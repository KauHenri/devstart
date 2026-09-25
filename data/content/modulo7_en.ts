// Module 7: Files and Error Handling - Complete Didactic Content (English)

export const MODULO_7_CONTENT_EN: Record<string, string> = {
  'l7-1': `
# Robust Exception Handling (\`try\`, \`except\`, \`else\`, \`finally\`) 🛡️

In the real world, systems fail for reasons outside the programmer's control:
* A user types letters where the system expected a number.
* A network cable is disconnected during a request.
* A hard drive runs out of disk space.
* An essential configuration file is deleted by mistake.

If you don't handle these unforeseen events, the Python interpreter raises an **Exception**, halts execution abruptly (*crash*), and dumps a terrifying *Traceback* right in the user's face. The \`try/except\` block is your program's seatbelt.

---

## 🧯 The Complete Anatomy of the Protective Block

Many programmers only know about \`try\` and \`except\`, but Python provides **4 coordinated blocks**:

\`\`\`
try:
    # Risky code that might trigger a failure
except ErrorType as error:
    # Executed ONLY if that specific error occurred
else:
    # Executed ONLY if the try block ran 100% WITHOUT any errors
finally:
    # ALWAYS executed, whether an error occurred or not!
\`\`\`

---

## 💻 Practical Example with all 4 Blocks

\`\`\`python
def divide_values(numerator, denominator):
    try:
        result = numerator / denominator
    except ZeroDivisionError as error:
        print("❌ Math error: Cannot divide a number by zero!")
        return None
    except TypeError as error:
        print(f"❌ Type error: Both values must be numeric. Details: {error}")
        return None
    else:
        print("✨ Arithmetic operation calculated successfully!")
        return result
    finally:
        print("🔄 [LOG] Division process finalized (resources released).")

print("Test 1 (Valid):", divide_values(10, 2))
print("-" * 40)
print("Test 2 (Division by zero):", divide_values(10, 0))
\`\`\`

---

## ⚠️ The Worst Practice in the World: Bare Empty \`except:\`

**NEVER use an \`except\` block without specifying the exception type** or simply silencing it with \`pass\`:

\`\`\`python
# ❌ TERRIBLE PRACTICE (A crime against debugging):
try:
    process_banking_data()
except:
    pass # You hid whether memory ran out, syntax failed, or the database crashed!

# ✅ CORRECT AND PROFESSIONAL APPROACH:
try:
    process_banking_data()
except (ConnectionError, TimeoutError) as network_error:
    print(f"Attempting to reconnect due to network failure: {network_error}")
except Exception as unexpected_error:
    # Handle or log with the exact class name
    print(f"Unexpected failure detected [{type(unexpected_error).__name__}]: {unexpected_error}")
\`\`\`
`,

  'l7-2': `
# Creating Custom Exceptions with \`raise\` 🚨

In enterprise applications, often the rule being violated is not a technical Python error, but rather a **Business Rule** of your organization.

For example: to Python, there is no mathematical issue with transferring an amount of \`-$500.00\`. However, according to your banking system's rules, that is unacceptable.

---

## 📤 Raising Errors with \`raise\`

The \`raise\` keyword forces an exception to be triggered:

\`\`\`python
def register_user_age(age):
    if not isinstance(age, int):
        raise TypeError("Age must be an integer.")
    if age < 0:
        raise ValueError(f"Invalid age ({age}): a person cannot have a negative age.")
    if age < 18:
        raise PermissionError("Registration only permitted for users 18 or older.")
    
    print(f"User aged {age} registered successfully!")
\`\`\`

---

## 🧬 Creating Your Own Exception Class

To build high-standard custom exceptions, we create a new class that inherits from the base class **\`Exception\`**:

\`\`\`python
class InsufficientFundsError(Exception):
    """Exception raised when a withdrawal exceeds the available balance."""
    def __init__(self, current_balance, withdrawal_amount):
        self.current_balance = current_balance
        self.withdrawal_amount = withdrawal_amount
        message = (
            f"Withdrawal attempt of $ {withdrawal_amount:.2f} denied. "
            f"Available account balance: $ {current_balance:.2f}"
        )
        super().__init__(message)

class BankAccount:
    def __init__(self, account_holder, balance):
        self.account_holder = account_holder
        self.balance = balance

    def withdraw(self, amount):
        if amount > self.balance:
            raise InsufficientFundsError(self.balance, amount)
        self.balance -= amount
        return self.balance

# Catching the custom exception in the frontend/API:
account = BankAccount("Juliana", 150.0)

try:
    account.withdraw(300.0)
except InsufficientFundsError as error:
    print("System Warning:", error)
    print(f"Missing $ {error.withdrawal_amount - error.current_balance:.2f} to complete the operation.")
\`\`\`
`,

  'l7-3': `
# Professional File Reading and the \`with\` Context Manager 📄

Variables in RAM memory evaporate as soon as the program terminates or the computer powers off. Persisting data into physical files on disk is the first step toward storing durable information.

---

## 🔑 The Context Manager (\`with\`)

In the past, programmers had to write:
\`\`\`python
# Old, risky approach:
file = open("data.txt", "r")
content = file.read()
file.close() # If an error occurred before this line, the file stayed locked on Windows!
\`\`\`

The modern, safe, and standard way in Python is to use the **\`with\`** statement (*Context Manager*). It guarantees that the file will be **closed with 100% certainty**, even if a critical failure occurs in the middle of reading!

\`\`\`python
# Creating a sample file for testing
with open("sales_report.txt", "w", encoding="utf-8") as f:
    f.write("January: 15000\\nFebruary: 18200\\nMarch: 21400\\n")

# MEMORY-EFFICIENT LINE-BY-LINE READING
with open("sales_report.txt", "r", encoding="utf-8") as file:
    for line_number, line in enumerate(file, start=1):
        # .strip() removes the invisible newline character (\\n)
        print(f"Line #{line_number}: {line.strip()}")
\`\`\`

---

## 📊 Main Reading Methods

| Method | How does it work? | When to use? |
| :--- | :--- | :--- |
| **\`file.read()\`** | Reads the entire file at once into a single string. | Only for small files that comfortably fit in memory. |
| **\`file.readline()\`** | Reads a single line per call. | Controlled, iterative step-by-step reading. |
| **\`for line in file:\`** | Iterates on demand (*Lazy Evaluation*). | **Universal best practice**: allows reading 50 GB files without freezing your PC! |
| **\`file.readlines()\`** | Returns a list of strings containing all lines. | When you need to index lines by a specific position. |

> 💡 **Pay Attention to Encoding:** Always specify \`encoding="utf-8"\`. On Windows, the default is often \`cp1252\`, which triggers the dreaded \`UnicodeDecodeError\` when reading characters with accents, special symbols, or non-ASCII characters!
`,

  'l7-4': `
# Writing to Files and CSV Manipulation 📝

To write data to disk, the \`open()\` function takes an **access mode** parameter:

| Mode | Name | Behavior |
| :--- | :--- | :--- |
| **\`"w"\`** | *Write* | **Creates a new file**. If the file already exists, it **ERASES ALL PREVIOUS CONTENT** without any prior warning! |
| **\`"a"\`** | *Append* | Creates the file if it does not exist, or **appends new data to the end** without erasing existing content. Ideal for logs! |
| **\`"r+"\`**| *Read/Write* | Simultaneous reading and writing within the same file. |

---

## 💾 Writing Files with \`write()\` and \`writelines()\`

\`\`\`python
# Appending events to a log file:
events = [
    "[10:00:01] User 'admin' logged in successfully.\\n",
    "[10:05:22] Automated backup completed.\\n",
    "[10:12:45] User 'admin' logged out.\\n"
]

with open("system.log", "a", encoding="utf-8") as log_file:
    log_file.writelines(events)

print("Logs recorded successfully!")
\`\`\`

---

## 📊 Professional Handling of CSV Files

The **CSV** (*Comma-Separated Values*) format is the industry standard for exchanging tables and spreadsheets (like Excel). Python provides the built-in **\`csv\`** module:

\`\`\`python
import csv

customer_data = [
    ["ID", "Name", "City", "Balance"],
    [1, "Mariana Ramos", "São Paulo", 4500.50],
    [2, "Felipe Costa", "Curitiba", 3200.00],
    [3, "Larissa Antunes", "Belo Horizonte", 7890.20]
]

# Writing to CSV:
with open("customers.csv", "w", newline="", encoding="utf-8") as f_csv:
    writer = csv.writer(f_csv, delimiter=",")
    writer.writerows(customer_data)

# Reading the CSV back:
with open("customers.csv", "r", encoding="utf-8") as f_csv:
    reader = csv.reader(f_csv, delimiter=",")
    for row in reader:
        print("Record:", row)
\`\`\`
`,

  'l7-5': `
# Data Serialization and Persistence with JSON 🌐

The **JSON** (*JavaScript Object Notation*) format is the universal language of data exchange across the internet. Every modern API (Stripe, PayPal, OpenAI, Google) sends and receives structured data in JSON.

In Python, the mapping between types is virtually seamless:
* JSON Object $\\longleftrightarrow$ Python Dictionary (\`dict\`)
* JSON Array $\\longleftrightarrow$ Python List (\`list\`)
* JSON Booleans (\`true\`, \`false\`) $\\longleftrightarrow$ Python Booleans (\`True\`, \`False\`)
* JSON \`null\` $\\longleftrightarrow$ \`None\` in Python

---

## 🛠️ The 4 Fundamental Functions of the \`json\` Module

Remember the mnemonic rule of the trailing letter:
* **\`s\`** at the end (\`dumps\`, \`loads\`) operates on **Strings** in memory.
* **Without \`s\`** (\`dump\`, \`load\`) operates directly on physical **Files** on disk.

\`\`\`python
import json

# 1. Complex Python object:
user_config = {
    "user_id": 4821,
    "name": "Guilherme Santos",
    "preferences": {
        "dark_theme": True,
        "language": "en-US",
        "email_notifications": False
    },
    "skills": ["Python", "Docker", "PostgreSQL"],
    "credit_limit": None
}

# 2. WRITING DIRECTLY TO A FILE (json.dump):
with open("config.json", "w", encoding="utf-8") as f_json:
    json.dump(user_config, f_json, indent=4, ensure_ascii=False)

print("File config.json saved!")

# 3. READING DIRECTLY FROM A FILE (json.load):
with open("config.json", "r", encoding="utf-8") as f_json:
    loaded_data = json.load(f_json)

print(f"Loaded user: {loaded_data['name']}")
print(f"Skill #1: {loaded_data['skills'][0]}")
print(f"Dark theme enabled? {loaded_data['preferences']['dark_theme']}")
\`\`\`
`,
};
