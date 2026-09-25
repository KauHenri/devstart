// Module 10: Final Projects - Complete Didactic Content (English)

export const MODULO_10_CONTENT_EN: Record<string, string> = {
  'l10-1': `
# Final Project 1: Task Management System (CLI + JSON) 📋

Welcome to your first complete software engineering project! In this project, you will apply **OOP, JSON file handling, exception handling, and command-line interfaces** to build a professional task management system (*To-Do List Manager*).

---

## 🎯 Requirements Specification

The application must provide:
1. **Add Task:** Title, description, priority (Low, Medium, High), and creation date.
2. **List Tasks:** Tabular display of pending and completed tasks.
3. **Complete Task:** Mark tasks as finished.
4. **Remove Task:** Delete records by ID.
5. **Automatic Persistence:** Every change must be saved immediately to a \`tasks.json\` file and reloaded upon startup.

---

## 💻 Complete Application Source Code

\`\`\`python
import json
import os
from datetime import datetime

class Task:
    def __init__(self, task_id, title, priority="Medium", completed=False, created_at=None):
        self.id = task_id
        self.title = title
        self.priority = priority
        self.completed = completed
        self.created_at = created_at or datetime.now().strftime("%Y-%m-%d %H:%M")

    def to_dict(self):
        return {
            "id": self.id,
            "title": self.title,
            "priority": self.priority,
            "completed": self.completed,
            "created_at": self.created_at
        }

    @classmethod
    def from_dict(cls, data):
        return cls(
            data["id"],
            data["title"],
            data["priority"],
            data["completed"],
            data["created_at"]
        )


class TaskManager:
    FILE = "tasks.json"

    def __init__(self):
        self.tasks = []
        self._load()

    def _save(self):
        with open(self.FILE, "w", encoding="utf-8") as f:
            json.dump([t.to_dict() for t in self.tasks], f, indent=4, ensure_ascii=False)

    def _load(self):
        if not os.path.exists(self.FILE):
            self.tasks = []
            return
        try:
            with open(self.FILE, "r", encoding="utf-8") as f:
                data = json.load(f)
                self.tasks = [Task.from_dict(d) for d in data]
        except (json.JSONDecodeError, IOError):
            print("⚠️ Warning: Failed to read tasks file. Starting with an empty list.")
            self.tasks = []

    def next_id(self):
        return max([t.id for t in self.tasks], default=0) + 1

    def add(self, title, priority="Medium"):
        new_task = Task(self.next_id(), title, priority)
        self.tasks.append(new_task)
        self._save()
        print(f"✅ Task #{new_task.id} ('{title}') added successfully!")

    def list_tasks(self):
        if not self.tasks:
            print("\nNo tasks registered at the moment.")
            return

        print("\n" + "=" * 65)
        print(f"{'ID':<4} {'STATUS':<12} {'PRIORITY':<12} {'TITLE':<30}")
        print("-" * 65)
        for t in self.tasks:
            status = "✓ Done" if t.completed else "○ Pending"
            print(f"{t.id:<4} {status:<12} {t.priority:<12} {t.title:<30}")
        print("=" * 65)

    def complete(self, task_id):
        for t in self.tasks:
            if t.id == task_id:
                t.completed = True
                self._save()
                print(f"🎉 Task #{task_id} marked as completed!")
                return
        print(f"❌ Task with ID #{task_id} not found.")

    def remove(self, task_id):
        size_before = len(self.tasks)
        self.tasks = [t for t in self.tasks if t.id != task_id]
        if len(self.tasks) < size_before:
            self._save()
            print(f"🗑️ Task #{task_id} removed.")
        else:
            print(f"❌ Task #{task_id} not found.")

# --- SYSTEM USAGE SIMULATION ---
app = TaskManager()
app.add("Study Python decorators", priority="High")
app.add("Commit project to GitHub", priority="Medium")
app.list_tasks()
app.complete(1)
app.list_tasks()
\`\`\`
`,

  'l10-2': `
# Final Project 2: Scientific and Financial Calculator with History 🧮

In this second final project, you will build a robust tool for scientific and financial engineering calculations, applying **recursion, native modules (\`math\`), modularity, and operation history logging**.

---

## 🎯 Calculator Features

1. **Basic Operations:** Addition, subtraction, multiplication, division with safeguards against \`ZeroDivisionError\`.
2. **Scientific Calculations:** Square root, power, factorial (implemented via a recursive algorithm), and natural logarithm.
3. **Financial Calculations:** Compound interest and loan amortization.
4. **Audit Log:** Every performed operation is recorded to a file with an exact timestamp.

---

## 💻 Complete Application Source Code

\`\`\`python
import math
from datetime import datetime

class ScientificCalculator:
    HISTORY_FILE = "calculator_history.log"

    def __init__(self):
        self.memory = 0.0

    def _log_operation(self, operation: str, result: float):
        timestamp = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
        record = f"[{timestamp}] {operation} = {result}\\n"
        with open(self.HISTORY_FILE, "a", encoding="utf-8") as f:
            f.write(record)

    def add(self, a: float, b: float) -> float:
        res = a + b
        self._log_operation(f"{a} + {b}", res)
        return res

    def divide(self, a: float, b: float) -> float:
        if b == 0:
            raise ZeroDivisionError("Division by zero is not allowed.")
        res = a / b
        self._log_operation(f"{a} / {b}", res)
        return res

    def square_root(self, a: float) -> float:
        if a < 0:
            raise ValueError("Square root of a negative number does not exist in real numbers.")
        res = math.sqrt(a)
        self._log_operation(f"sqrt({a})", res)
        return res

    def factorial(self, n: int) -> int:
        if n < 0:
            raise ValueError("Factorial is only defined for non-negative integers.")
        # Recursive algorithm with base case:
        if n <= 1:
            return 1
        res = n * self.factorial(n - 1)
        return res

    def compound_interest(self, principal: float, annual_rate_pct: float, years: int) -> float:
        """Final amount = Principal * (1 + r)^t"""
        decimal_rate = annual_rate_pct / 100
        amount = principal * math.pow(1 + decimal_rate, years)
        self._log_operation(f"Compound Interest (Principal: {principal}, Rate: {annual_rate_pct}%, Years: {years})", amount)
        return amount

# --- TESTING OPERATIONS ---
calc = ScientificCalculator()
print("Addition:", calc.add(125.5, 34.5))
print("Division:", calc.divide(100, 4))
print("Square root of 144:", calc.square_root(144))
print("Factorial of 6:", calc.factorial(6))
print("Yield of $10,000 at 12% per year for 5 years:")
print(f"Final amount: \${calc.compound_interest(10000, 12.0, 5):.2f}")
\`\`\`
`,

  'l10-3': `
# Final Project 3: Web API Consumer and Exchange Rate Alerts 🌐

In this real-world integration project, you will build a Python utility bot that consumes **public REST APIs**, handles market exchange rate fluctuations, and generates reports applying financial business rules.

---

## 🎯 Requirements Specification

1. **API Consumption:** Fetch real-time exchange rates for US Dollar (USD), Euro (EUR), and Bitcoin (BTC) against the Brazilian Real (BRL).
2. **Exception Handling:** Gracefully handle lack of internet connection, timeouts, and malformed responses without crashing.
3. **Alert Rule:** Visually notify if a currency rises above a specified threshold.
4. **Report Export:** Save daily exchange rates in tabular console format and CSV.

---

## 💻 Complete Application Source Code

\`\`\`python
import requests
import json
import csv
from datetime import datetime

class CurrencyTracker:
    BASE_URL = "https://economia.awesomeapi.com.br/last"

    def __init__(self, pairs=("USD-BRL", "EUR-BRL", "BTC-BRL")):
        self.pairs = pairs

    def fetch_rates(self):
        endpoint = f"{self.BASE_URL}/{','.join(self.pairs)}"
        try:
            response = requests.get(endpoint, timeout=8)
            response.raise_for_status()
            return response.json()
        except requests.exceptions.RequestException as error:
            print(f"❌ Communication failure with API: {error}")
            return None

    def generate_console_report(self):
        data = self.fetch_rates()
        if not data:
            return

        print("\n" + "=" * 60)
        print(f"  REAL-TIME EXCHANGE RATE REPORT — {datetime.now().strftime('%Y-%m-%d %H:%M')}")
        print("=" * 60)
        print(f"{'PAIR':<12} {'CURRENT':<15} {'DAY HIGH':<15} {'DAY LOW':<15}")
        print("-" * 60)

        csv_records = [["Pair", "Rate", "High", "Low", "Timestamp"]]
        now_iso = datetime.now().isoformat()

        for key, info in data.items():
            pair = info.get("name", key)
            bid = float(info.get("bid", 0.0))
            high = float(info.get("high", 0.0))
            low = float(info.get("low", 0.0))

            print(f"{key:<12} R$ {bid:<12.2f} R$ {high:<12.2f} R$ {low:<12.2f}")
            csv_records.append([key, bid, high, low, now_iso])

        print("=" * 60)

        # Save to history CSV file
        with open("exchange_history.csv", "a", newline="", encoding="utf-8") as f:
            writer = csv.writer(f)
            writer.writerows(csv_records[1:]) # Write records without repeating header

        print("📁 Exchange rates appended to 'exchange_history.csv'!")

# --- BOT EXECUTION ---
tracker = CurrencyTracker()
tracker.generate_console_report()
\`\`\`
`,

  'l10-4': `
# Final Project 4: Sales Spreadsheet Analysis and Processing Pipeline 📊

In this Data Science and Office Automation project, you will build an **ETL Pipeline** (*Extract, Transform, Load*) using **Pandas** to process thousands of business sales records, clean corrupted data, and extract managerial insights.

---

## 🎯 Pipeline Stages

1. **Extract:** Simulating or reading a raw sales CSV file with inconsistencies (null fields, dates as plain text).
2. **Transform:**
   - Handling missing values (*Data Cleaning*).
   - Converting data types (strings to numeric values and datetimes).
   - Creating derived metrics (Profit Margin = Sales - Cost).
3. **Load / Export:** Generating a summarized report by Region and Product Category in Excel/CSV.

---

## 💻 Complete Application Source Code

\`\`\`python
import pandas as pd
import numpy as np

def run_sales_pipeline():
    print("🚀 [ETL] Starting sales data processing...")

    # 1. SIMULATING RAW CSV (EXTRACTION)
    raw_data = {
        "Date": ["2026-01-10", "2026-01-11", "2026-01-11", "2026-01-12", "2026-01-13"],
        "Customer": ["Alpha Store", "Beta LLC", "Gamma Corp", "Delta Tech", "Alpha Store"],
        "Region": ["Southeast", "South", "Southeast", "Northeast", "Southeast"],
        "Category": ["Electronics", "Furniture", "Electronics", "Services", "Electronics"],
        "Gross_Value": [15000.0, np.nan, 8500.0, 3200.0, 12000.0],
        "Operating_Cost": [9000.0, 4200.0, 5100.0, 1500.0, 7200.0]
    }
    df = pd.DataFrame(raw_data)

    # 2. TRANSFORMATION AND CLEANING
    # Handle missing values in Gross_Value column by replacing with the mean:
    mean_sales = df["Gross_Value"].mean()
    df["Gross_Value"] = df["Gross_Value"].fillna(mean_sales)

    # Calculate strategic columns:
    df["Net_Profit"] = df["Gross_Value"] - df["Operating_Cost"]
    df["Profit_Margin_Pct"] = (df["Net_Profit"] / df["Gross_Value"]) * 100

    print("\n✅ Cleaned Dataset:")
    print(df[["Customer", "Region", "Gross_Value", "Net_Profit", "Profit_Margin_Pct"]])

    # 3. MANAGERIAL ANALYSIS (GROUPBY)
    regional_summary = df.groupby("Region").agg(
        Total_Sales=("Gross_Value", "sum"),
        Total_Profit=("Net_Profit", "sum"),
        Average_Margin=("Profit_Margin_Pct", "mean")
    ).reset_index()

    print("\n📈 Consolidated Performance by Geographic Region:")
    print(regional_summary)

    # 4. EXPORT
    regional_summary.to_csv("consolidated_sales_report.csv", index=False, sep=";")
    print("\n💾 File 'consolidated_sales_report.csv' generated successfully!")

run_sales_pipeline()
\`\`\`
`,

  'l10-5': `
# Final Project 5: Operating System File Automation Script 🤖

The ultimate test of a real-world Python developer: **building tools that save hours of repetitive human work**.

In this course-concluding project, you will build a file organization and cleanup robot on disk using the modern **\`pathlib\`** module, automatically sorting documents, spreadsheets, images, and installers.

---

## 🎯 Requirements Specification

1. **Intelligent Scanning:** Scan an input folder (e.g., a messy Downloads folder).
2. **Extension Mapping:**
   - Images (\`.png\`, \`.jpg\`, \`.jpeg\`, \`.gif\`) $\\rightarrow$ \`Images/\` folder
   - Documents (\`.pdf\`, \`.docx\`, \`.txt\`, \`.xlsx\`) $\\rightarrow$ \`Documents/\` folder
   - Programs (\`.exe\`, \`.msi\`, \`.zip\`, \`.rar\`) $\\rightarrow$ \`Installers/\` folder
3. **Overwrite Prevention:** Rename files with a timestamp if a file already exists at the destination.
4. **Execution Report:** Display in the console how many files of each type were organized.

---

## 💻 Complete Application Source Code

\`\`\`python
import os
import shutil
from pathlib import Path
from datetime import datetime

class FileOrganizer:
    CATEGORIES = {
        "Documents": [".pdf", ".docx", ".txt", ".xlsx", ".csv", ".pptx"],
        "Images": [".png", ".jpg", ".jpeg", ".gif", ".svg", ".webp"],
        "Installers_and_Archives": [".exe", ".msi", ".zip", ".rar", ".7z", ".tar.gz"],
        "Videos_and_Audio": [".mp4", ".mkv", ".mp3", ".wav"],
        "Code_and_Scripts": [".py", ".js", ".html", ".css", ".json", ".sql"]
    }

    def __init__(self, target_folder: str):
        self.directory = Path(target_folder).resolve()
        if not self.directory.exists():
            raise FileNotFoundError(f"The specified folder does not exist: {self.directory}")

    def organize(self):
        print(f"🧹 Starting cleanup in directory: {self.directory}")
        report = {category: 0 for category in self.CATEGORIES}
        report["Other"] = 0

        # Iterate over all files in the folder (ignoring subdirectories already created)
        for item in self.directory.iterdir():
            if item.is_dir() or item.name.startswith("."):
                continue  # Skip directories and hidden system files

            extension = item.suffix.lower()
            dest_folder_name = "Other"

            # Identify corresponding category:
            for category, extensions in self.CATEGORIES.items():
                if extension in extensions:
                    dest_folder_name = category
                    break

            # Create destination folder if it doesn't exist yet:
            dest_folder = self.directory / dest_folder_name
            dest_folder.mkdir(exist_ok=True)

            # Move file safely:
            dest_file = dest_folder / item.name
            
            # If a file with the same name already exists, add a timestamp to prevent data loss:
            if dest_file.exists():
                timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
                new_name = f"{item.stem}_{timestamp}{item.suffix}"
                dest_file = dest_folder / new_name

            shutil.move(str(item), str(dest_file))
            report[dest_folder_name] += 1
            print(f"  • Moved: '{item.name}' ➔ '{dest_folder_name}/'")

        # Display final summary
        print("\n" + "=" * 45)
        print("  CONSOLIDATED ORGANIZATION REPORT")
        print("=" * 45)
        for cat, count in report.items():
            if count > 0:
                print(f"  📁 {cat:<25}: {count} files")
        print("=" * 45)
        print("✨ Organization completed successfully!")

# --- TEST SIMULATION IN LOCAL DIRECTORY ---
# Create a temporary folder and test the robot:
test_folder = Path("./test_downloads_folder")
test_folder.mkdir(exist_ok=True)

# Creating some dummy files to test the robot:
(test_folder / "contract.pdf").touch()
(test_folder / "vacation_photo.jpg").touch()
(test_folder / "setup_python.exe").touch()
(test_folder / "monthly_report.xlsx").touch()

# Running automation:
bot = FileOrganizer(str(test_folder))
bot.organize()
\`\`\`
`,
};
