// Module 8: Python Libraries - Complete Didactic Content (English)

export const MODULO_8_CONTENT_EN: Record<string, string> = {
  'l8-1': `
# The Python Ecosystem, Modules, and the \`pip\` Package Manager 📦

One of Python's greatest competitive advantages in the global market is its **"Batteries Included"** philosophy, paired with the **PyPI** (*Python Package Index*), a central repository featuring over 500,000 open-source packages created by the worldwide community.

---

## 🧩 What Are Modules and Packages?

* **Module:** Simply any \`.py\` file containing functions, classes, and variables that you want to reuse across other scripts.
* **Package:** A directory containing multiple modules organized under a single hierarchy (historically requiring a special \`__init__.py\` file).

\`\`\`python
# Import Styles:

# 1. Import the entire module (requires module.function):
import math
print("Square root of 81:", math.isqrt(81))

# 2. Import specific elements directly into the current scope:
from math import sqrt, pi
print("Value of Pi:", pi)

# 3. Import with an alias to shorten references:
import datetime as dt
now = dt.datetime.now()
print("Current time:", now.strftime("%H:%M:%S"))
\`\`\`

> 🚨 **Beware of \`from module import *\`**: This pollutes your namespace with hundreds of hidden names, potentially overwriting your own variables without warning. Never use this in professional projects!

---

## 🛠️ The \`pip\` Package Manager

\`pip\` is the command-line tool that downloads, installs, and manages third-party libraries on your computer:

\`\`\`bash
# Install a library
pip install requests

# Install a specific version to prevent breaking changes
pip install pandas==2.1.4

# List all installed libraries in the environment
pip list

# Freeze dependencies into a requirements file for your team
pip freeze > requirements.txt

# On another machine, install everything with a single command
pip install -r requirements.txt
\`\`\`

---

## 🌐 Virtual Environments (\`venv\`): The Professional Developer's Secret

If Project A requires \`Django 3.2\` and Project B requires \`Django 5.0\`, installing them globally on your machine will break one of the projects. 

A **virtual environment** creates an isolated sandbox for each project:

\`\`\`bash
# 1. Create the virtual environment in the project folder:
python -m venv .venv

# 2. Activate on Windows (PowerShell):
.venv\\Scripts\\Activate.ps1

# 3. Deactivate when you finish working:
deactivate
\`\`\`
`,

  'l8-2': `
# High-Performance Numerical Computing with NumPy ⚡

**NumPy** (*Numerical Python*) is the foundation of nearly the entire Artificial Intelligence, Data Science, and Machine Learning ecosystem on the planet (TensorFlow, PyTorch, SciPy, and Pandas all run on top of it).

---

## 🚀 Why Are Python Lists Slow for Math?

A standard Python list stores generic pointers to objects in memory. To add two numbers in a list, Python must inspect each element's type at runtime.

NumPy introduces the **\`ndarray\`** (N-Dimensional Array), which stores data in contiguous blocks of memory in low-level C, with static typing and **vectorized** operations:

\`\`\`python
# Conceptual performance simulation:
# A mathematical operation across 1 million items:
# Pure Python list: ~150 milliseconds
# NumPy array:      ~1.8 milliseconds (nearly 100x faster!)
\`\`\`

---

## 💻 Creating and Operating on Arrays

\`\`\`python
import numpy as np

# 1. Creating arrays from lists:
heights_cm = np.array([170, 185, 162, 190, 175])

# 2. Vectorized operations (WITHOUT ANY FOR LOOP!):
heights_meters = heights_cm / 100
print("Heights in meters:", heights_meters)

# 3. Instant C-speed statistics:
print(f"Mean: {heights_meters.mean():.2f}m")
print(f"Standard Deviation: {heights_meters.std():.2f}")
print(f"Max Height: {heights_meters.max():.2f}m")

# 4. Elegant boolean filtering (Masking):
tall = heights_meters[heights_meters >= 1.80]
print("People 1.80m or taller:", tall)
\`\`\`

---

## 🔲 Two-Dimensional Matrices (Rows and Columns)

\`\`\`python
# 2x3 Matrix (2 rows, 3 columns):
matrix = np.array([
    [10, 20, 30],
    [40, 50, 60]
])

print("Matrix shape (rows, columns):", matrix.shape) # (2, 3)
print("Sum by column:", matrix.sum(axis=0)) # [50, 70, 90]
print("Sum by row:", matrix.sum(axis=1))    # [60, 150]
\`\`\`
`,

  'l8-3': `
# Data Analysis and Manipulation with Pandas 🐼

If NumPy is the scientific calculator, **Pandas** is "Excel on steroids" for programmers. It was created to manipulate structured data tables with millions of rows in seconds.

---

## 📊 The Two Core Data Structures

1. **\`Series\`**: A labeled one-dimensional array (like a single column in a spreadsheet).
2. **\`DataFrame\`**: A complete two-dimensional table with labeled rows and columns.

\`\`\`python
import pandas as pd

# Creating a DataFrame from a dictionary:
sales_data = {
    "Salesperson": ["Ana", "Bruno", "Carla", "Daniel", "Eduarda"],
    "Region": ["Southeast", "South", "Southeast", "Northeast", "South"],
    "Revenue": [45000, 32000, 58000, 29000, 64000],
    "Target_Hit": [True, False, True, False, True]
}

df = pd.DataFrame(sales_data)
print("DataFrame Overview:")
print(df)
\`\`\`

---

## 🔍 Queries, Filtering, and Enterprise Aggregations

\`\`\`python
# 1. Selecting specific columns:
print("\nRevenue Only:\n", df["Revenue"])

# 2. Filtering rows with rules (e.g., Salespeople with revenue over 40,000):
top_performers = df[df["Revenue"] >= 40000]
print("\nTop Performers:\n", top_performers[["Salesperson", "Revenue"]])

# 3. The Power of GroupBy (Pivot Table):
# Group by Region and calculate count, mean, and sum of revenue:
regional_report = df.groupby("Region")["Revenue"].agg(["count", "mean", "sum"])
print("\nPerformance by Region:")
print(regional_report)
\`\`\`

---

## 💾 Reading and Exporting Real-World Data

In professional routines, you will read and write external data with single-line commands:
\`\`\`python
# df = pd.read_csv("monthly_report.csv")
# df = pd.read_excel("accounting_spreadsheet.xlsx")
# df.to_json("processed_data.json", orient="records", indent=2)
\`\`\`
`,

  'l8-4': `
# Professional Data Visualization with Matplotlib 📈

Data analysis without visual charts rarely convinces executives or clients. **Matplotlib** is the industry-standard library for transforming raw numbers into expressive, publication-ready visualizations.

---

## 📊 Most Commonly Used Chart Types

| Chart Type | Matplotlib Function | Best Use Case |
| :--- | :--- | :--- |
| **Line** | \`plt.plot()\` | Metric trends over time (stock prices, monthly sales). |
| **Bar** | \`plt.bar()\` / \`plt.barh()\` | Comparing discrete categories (sales by branch, audience by channel). |
| **Scatter** | \`plt.scatter()\` | Relationship and correlation between two continuous variables (age vs. salary). |
| **Histogram** | \`plt.hist()\` | Frequency distributions (grade distributions of students). |

---

## 🎨 Complete Code for an Enterprise Chart

\`\`\`python
import matplotlib.pyplot as plt

# Semester data:
months = ["January", "February", "March", "April", "May", "June"]
revenue_2025 = [25000, 31000, 28000, 42000, 39000, 51000]
revenue_2026 = [28000, 36000, 34000, 49000, 46000, 62000]

# Configure figure size (Width x Height in inches)
plt.figure(figsize=(10, 5))

# Plot lines with styles and legends:
plt.plot(months, revenue_2025, marker="o", color="#64748b", linestyle="--", label="2025 Revenue")
plt.plot(months, revenue_2026, marker="s", color="#22c55e", linewidth=2.5, label="2026 Revenue (Current)")

# Titles and axis formatting:
plt.title("Bi-Annual Revenue Growth ($)", fontsize=14, fontweight="bold", pad=15)
plt.xlabel("Reference Month", fontsize=11)
plt.ylabel("Consolidated Revenue", fontsize=11)

# Visual guide grid and legend:
plt.grid(True, linestyle=":", alpha=0.6)
plt.legend(loc="upper left")

# Save as a high-resolution PNG image for presentations:
# plt.savefig("financial_report.png", dpi=300, bbox_inches="tight")
# plt.show()
\`\`\`
`,

  'l8-5': `
# Consuming REST APIs with the \`requests\` Library 🌐

In 90% of programming job openings, you are expected to know how to connect systems through **HTTP APIs**. The **\`requests\`** library is the industry standard and most elegant tool for making web requests in the Python ecosystem.

---

## 📡 The HTTP Communication Lifecycle

\`\`\`
  Your Python Application             API Server (e.g., GitHub, Stripe)
       │                                            │
       │────── GET /api/v1/users ──────────────────>│ (Processes request)
       │                                            │
       │<───── 200 OK + JSON Response ──────────────│
\`\`\`

---

## 🚦 Key HTTP Status Codes

* **\`200 OK\`**: Complete success. The requested data was returned.
* **\`201 Created\`**: Successful creation of a new record (common in POST requests).
* **\`400 Bad Request\`**: Your application sent invalid or malformed parameters.
* **\`401 Unauthorized\`**: Authentication token or API key is missing or incorrect.
* **\`404 Not Found\`**: The requested resource or endpoint does not exist.
* **\`500 Internal Server Error\`**: The target server experienced an unhandled internal error.

---

## 💻 Practical Example: Consuming a Public API

\`\`\`python
import requests

def get_currency_rate(source_currency="USD", target_currency="BRL"):
    """Fetches the real-time exchange rate of a currency via a public API."""
    url = f"https://economia.awesomeapi.com.br/last/{source_currency}-{target_currency}"
    
    try:
        # 1. Make the GET request with a safety timeout (5 seconds):
        response = requests.get(url, timeout=5)
        
        # 2. Automatically raise an exception if status is 4xx or 5xx:
        response.raise_for_status()
        
        # 3. Convert JSON response into a native Python dictionary:
        data = response.json()
        key = f"{source_currency}{target_currency}"
        current_rate = float(data[key]["bid"])
        currency_name = data[key]["name"]
        
        return {
            "pair": currency_name,
            "rate": current_rate,
            "day_high": float(data[key]["high"]),
            "day_low": float(data[key]["low"])
        }
        
    except requests.exceptions.Timeout:
        print("❌ Error: The API server took too long to respond.")
    except requests.exceptions.ConnectionError:
        print("❌ Error: No internet connection.")
    except requests.exceptions.HTTPError as http_error:
        print(f"❌ HTTP Error returned by API: {http_error}")
    except KeyError:
        print("❌ Error: Unexpected structure in API response.")
    return None

# Testing the integration:
info = get_currency_rate("USD", "BRL")
if info:
    print(f"=== {info['pair'].upper()} EXCHANGE RATE ===")
    print(f"Current Commercial Rate: R$ {info['rate']:.2f}")
    print(f"Daily Range: R$ {info['day_low']:.2f} to R$ {info['day_high']:.2f}")
\`\`\`
`,
};
