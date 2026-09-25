'use client';

import { useRef, useEffect, useState } from 'react';
import Editor from '@monaco-editor/react';
import { Play, RotateCcw, ExternalLink, Loader2 } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useLanguage } from '@/contexts/LanguageContext';

interface CodeEditorProps {
  initialCode?: string;
  language?: string;
  height?: string;
  onRun?: (code: string, output: string, error: string | null) => void;
  readOnly?: boolean;
  fileName?: string;
}

declare global {
  interface Window {
    pyodide: {
      runPythonAsync: (code: string) => Promise<unknown>;
      globals: { get: (key: string) => unknown };
    };
    loadPyodide: (options: { indexURL: string }) => Promise<Window['pyodide']>;
    pyodideLoading?: Promise<Window['pyodide']>;
    pyodideReady?: boolean;
  }
}

export function CodeEditor({
  initialCode = '# Escreva seu código Python aqui\nprint("Hello, DevStart!")',
  language = 'python',
  height = '300px',
  onRun,
  readOnly = false,
  fileName = 'main.py',
}: CodeEditorProps) {
  const [code, setCode] = useState(initialCode);
  const [output, setOutput] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [isRunning, setIsRunning] = useState(false);
  const [pyodideStatus, setPyodideStatus] = useState<'loading' | 'ready' | 'error'>('loading');
  const { resolvedTheme } = useTheme();
  const { t } = useLanguage();
  const editorRef = useRef<unknown>(null);

  // Load Pyodide
  useEffect(() => {
    if (typeof window === 'undefined') return;

    if (window.pyodideReady) {
      setPyodideStatus('ready');
      return;
    }

    if (!window.pyodideLoading) {
      // Temporarily mask define to prevent AMD loader (Monaco) conflicts with error-stack-parser
      const originalDefine = (window as unknown as { define?: unknown }).define;
      if (originalDefine) {
        (window as unknown as { define?: unknown }).define = undefined;
      }

      // Add Pyodide script
      const script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/pyodide/v0.25.0/full/pyodide.js';
      document.head.appendChild(script);

      window.pyodideLoading = new Promise((resolve, reject) => {
        script.onload = async () => {
          try {
            const pyodide = await window.loadPyodide({
              indexURL: 'https://cdn.jsdelivr.net/pyodide/v0.25.0/full/',
            });
            window.pyodide = pyodide;
            window.pyodideReady = true;
            resolve(pyodide);
          } catch (e) {
            reject(e);
          } finally {
            if (originalDefine) {
              (window as unknown as { define?: unknown }).define = originalDefine;
            }
          }
        };
        script.onerror = (e) => {
          if (originalDefine) {
            (window as unknown as { define?: unknown }).define = originalDefine;
          }
          reject(e);
        };
      });
    }

    window.pyodideLoading
      .then(() => setPyodideStatus('ready'))
      .catch(() => setPyodideStatus('error'));
  }, []);

  const runCode = async () => {
    if (pyodideStatus !== 'ready' || isRunning) return;

    setIsRunning(true);
    setOutput('');
    setError(null);

    try {
      // Capture stdout
      let capturedOutput = '';
      
      // Override print to capture output
      const setupCode = `
import sys
import io
_captured_output = io.StringIO()
sys.stdout = _captured_output
sys.stderr = _captured_output
`;
      await window.pyodide.runPythonAsync(setupCode);
      
      try {
        await window.pyodide.runPythonAsync(code);
        capturedOutput = String((window.pyodide.globals.get('_captured_output') as any).getvalue());
        setOutput(capturedOutput || t('(sem saída)', '(no output)'));
        setError(null);
        onRun?.(code, capturedOutput, null);
      } catch (pyError) {
        const errorMsg = String(pyError);
        capturedOutput = String((window.pyodide.globals.get('_captured_output') as any).getvalue());
        if (capturedOutput) setOutput(capturedOutput);
        setError(errorMsg);
        onRun?.(code, capturedOutput, errorMsg);
      } finally {
        // Restore stdout
        await window.pyodide.runPythonAsync('sys.stdout = sys.__stdout__; sys.stderr = sys.__stderr__');
      }
    } catch (e) {
      setError(String(e));
    } finally {
      setIsRunning(false);
    }
  };

  const openInVSCode = () => {
    const blob = new Blob([code], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = fileName;
    a.click();
    URL.revokeObjectURL(url);
  };

  const resetCode = () => {
    setCode(initialCode);
    setOutput('');
    setError(null);
  };

  return (
    <div
      className="rounded-xl overflow-hidden border"
      style={{ borderColor: 'var(--border)' }}
    >
      {/* Toolbar */}
      <div
        className="flex items-center justify-between px-4 py-2 border-b"
        style={{
          background: '#1e293b',
          borderColor: '#334155',
        }}
      >
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
          <span className="ml-2 text-xs font-mono" style={{ color: '#64748b' }}>
            {fileName}
          </span>
        </div>
        <div className="flex items-center gap-2">
          {pyodideStatus === 'loading' && (
            <span className="text-xs flex items-center gap-1" style={{ color: '#64748b' }}>
              <Loader2 size={12} className="animate-spin" /> {t('Carregando Python...', 'Loading Python...')}
            </span>
          )}
          <button
            onClick={resetCode}
            disabled={readOnly}
            className="p-1.5 rounded transition-colors hover:bg-white/10"
            style={{ color: '#94a3b8' }}
            title={t('Resetar código', 'Reset code')}
          >
            <RotateCcw size={14} />
          </button>
          <button
            onClick={openInVSCode}
            className="p-1.5 rounded transition-colors hover:bg-white/10"
            style={{ color: '#94a3b8' }}
            title={t('Baixar e abrir no VSCode', 'Download and open in VSCode')}
          >
            <ExternalLink size={14} />
          </button>
          <button
            onClick={runCode}
            disabled={pyodideStatus !== 'ready' || isRunning}
            className="flex items-center gap-1.5 px-3 py-1 rounded text-xs font-semibold transition-all disabled:opacity-50"
            style={{
              background: isRunning ? '#334155' : 'linear-gradient(135deg, #22c55e, #16a34a)',
              color: 'white',
            }}
          >
            {isRunning ? (
              <><Loader2 size={12} className="animate-spin" /> {t('Executando...', 'Running...')}</>
            ) : (
              <><Play size={12} /> {t('Executar', 'Run')}</>
            )}
          </button>
        </div>
      </div>

      {/* Editor */}
      <Editor
        height={height}
        defaultLanguage={language}
        value={code}
        onChange={(val) => setCode(val || '')}
        onMount={(editor) => { editorRef.current = editor; }}
        theme="vs-dark"
        options={{
          fontSize: 14,
          fontFamily: 'var(--font-geist-mono), Consolas, monospace',
          minimap: { enabled: false },
          scrollBeyondLastLine: false,
          lineNumbers: 'on',
          readOnly,
          automaticLayout: true,
          padding: { top: 12, bottom: 12 },
          wordWrap: 'on',
          suggestOnTriggerCharacters: true,
          tabSize: 4,
        }}
      />

      {/* Output */}
      {(output || error) && (
        <div
          className="border-t"
          style={{
            background: '#0f172a',
            borderColor: '#334155',
          }}
        >
          <div
            className="px-4 py-1.5 text-xs font-semibold border-b"
            style={{
              background: error ? 'rgba(239,68,68,0.1)' : 'rgba(34,197,94,0.1)',
              borderColor: '#334155',
              color: error ? '#f87171' : '#4ade80',
            }}
          >
            {error ? t('❌ Erro', '❌ Error') : t('✅ Saída', '✅ Output')}
          </div>
          <pre
            className="p-4 text-sm font-mono overflow-x-auto"
            style={{
              color: error ? '#f87171' : '#e2e8f0',
              whiteSpace: 'pre-wrap',
              maxHeight: '200px',
              overflowY: 'auto',
            }}
          >
            {error || output}
          </pre>
        </div>
      )}
    </div>
  );
}
