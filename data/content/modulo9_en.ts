// Module 9: Job Market - Complete Didactic Content (English)

export const MODULO_9_CONTENT_EN: Record<string, string> = {
  'l9-1': `
# Version Control with Git and GitHub in Professional Practice 🐙

You can be the best programmer in the world with Python syntax; if you don't know how to use **Git**, you will not be able to work on any professional tech team.

---

## 🧭 Git vs GitHub: Don't Confuse Them!

* **Git:** A local distributed version control software that runs in your terminal. It takes snapshots of your codebase history with timestamp, date, and author.
* **GitHub:** A cloud-based platform that hosts your Git repositories, enabling team collaboration, code reviews, and CI/CD automations.

\`\`\`
       Your Computer (Local)                          Cloud (GitHub)
  ┌───────────────────────────────┐              ┌────────────────────────┐
  │ Working Directory (Files)     │              │ Remote Repository      │
  │              │                │              │ (origin/main)          │
  │       [git add]               │              └───────────▲────────────┘
  │              ▼                │                          │
  │ Staging Area                  │                          │
  │              │                │                          │
  │     [git commit]              │                          │
  │              ▼                │                          │
  │ Local History (.git) ─────────┼────────[git push]────────┘
  └───────────────────────────────┘
\`\`\`

---

## ⚡ The 8 Essential Day-to-Day Commands

\`\`\`bash
# 1. Initialize tracking in a project folder
git init

# 2. Check the status of modified files
git status

# 3. Add modified files to the staging area
git add .

# 4. Create a point in history with a clear commit message in the imperative mood
git commit -m "Add shipping calculation by zip code in checkout module"

# 5. Create and switch to a new branch (feature branch)
git checkout -b feature/jwt-authentication

# 6. Connect your local repository to the remote GitHub repo
git remote add origin https://github.com/your-username/your-project.git

# 7. Push your commits to GitHub
git push -u origin feature/jwt-authentication

# 8. Update your local repository with changes from teammates
git pull origin main
\`\`\`

---

## 🛡️ The \`.gitignore\` File

Never push to GitHub:
* Passwords and secret API keys (\`.env\` files).
* The virtual environment folder (\`.venv/\`).
* Python cache files (\`__pycache__/\`).

Create a file named \`.gitignore\` at the root of your project containing:
\`\`\`gitignore
.venv/
__pycache__/
*.pyc
.env
.DS_Store
\`\`\`
`,

  'l9-2': `
# Clean Code and Best Practices (PEP 8) 🧼

> *"Any fool can write code that a computer can understand. Good programmers write code that humans can understand."* — Martin Fowler

In tech companies, you spend **10 times more time reading existing code** than writing new code. Clean code reduces bugs and accelerates product releases.

---

## 🎯 The Golden Rules of Clean Code in Python

### 1. Meaningful and Intentional Names
\`\`\`python
# ❌ BAD: Cryptic names that require reading the code to guess
d = 86400
def p(l):
    return [x for x in l if x > 100]

# ✅ EXCELLENT: Self-explanatory code
SECONDS_PER_DAY = 86400
def filter_free_shipping_orders(orders):
    FREE_SHIPPING_THRESHOLD = 100.0
    return [order for order in orders if order.amount > FREE_SHIPPING_THRESHOLD]
\`\`\`

### 2. Small Functions with Single Responsibility (SRP)
A function should do **one single thing**, and do it impeccably. If your function validates data, writes to the database, sends an email, and formats a report, it needs to be sliced into 4 smaller functions.

### 3. Type Annotations (*Type Hints*)
Added starting from Python 3.5, type annotations transform readability in enterprise codebases and allow your editor to detect errors even before running the code:

\`\`\`python
def calculate_discount(base_price: float, percentage: float) -> float:
    """Calculate the final amount after deducting the discount percentage."""
    return base_price * (1 - percentage / 100)
\`\`\`

### 4. Documentation with Docstrings (Google Style)
\`\`\`python
def transfer_funds(source_id: int, destination_id: int, amount: float) -> bool:
    """Execute a monetary transfer between two registered accounts.

    Args:
        source_id: Unique identifier of the source account.
        destination_id: Unique identifier of the beneficiary account.
        amount: Monetary amount to be transferred.

    Returns:
        True if the operation completed successfully.

    Raises:
        ValueError: If the amount is negative or the balance is insufficient.
    """
    pass
\`\`\`
`,

  'l9-3': `
# Professional Debugging Techniques and Reading Tracebacks 🐛

A junior programmer who encounters an error in the terminal often closes their eyes and changes random lines of code hoping it will work. 
A senior programmer **calmly reads the Traceback from bottom to top**.

---

## 🔍 How to Read a Python Traceback

The Traceback is the family tree of a failure:

\`\`\`text
Traceback (most recent call last):
  File "app.py", line 42, in <module>
    process_cart(my_cart)
  File "app.py", line 28, in process_cart
    total = calculate_total(cart.items)
  File "app.py", line 15, in calculate_total
    return sum(item.price for item in items)
TypeError: unsupported operand type(s) for +: 'int' and 'str'
\`\`\`

1. **Look at the LAST LINE first:** It reveals exactly **WHAT the error was** (\`TypeError\`) and the explanatory reason (*attempting to add int and str*).
2. **Look at the file and line number right above it:** \`app.py\`, line 15. That is precisely where the collision occurred!

---

## 🛠️ The Native Interactive Debugger: \`breakpoint()\`

Forget scattering dozens of \`print("here 1")\` and \`print("here 2")\` throughout your code!
Python provides the built-in **\`breakpoint()\`** command, which pauses program execution midway and opens an interactive console (\`pdb\`) for you to inspect live variables in memory:

\`\`\`python
def process_payroll(employees):
    for emp in employees:
        salary = emp["salary"]
        benefit = emp["benefit"]
        
        # The program will freeze here for you to investigate!
        breakpoint()
        
        net_salary = salary + benefit
        print(f"{emp['name']}: \${net_salary:.2f}")
\`\`\`

### Quick Debugger Commands (\`pdb\`):
* **\`p variable\`**: Prints the current value of that variable.
* **\`n\`**: Executes the **next** line of code.
* **\`s\`**: Steps into (**step into**) the function being called.
* **\`c\`**: Continues (**continue**) normal execution until the next breakpoint.
* **\`q\`**: Quits (**quit**) execution immediately.
`,

  'l9-4': `
# Building a High-Impact Portfolio on GitHub 🌟

Technical recruiters and engineering managers receive hundreds of resumes every week. The fastest way to stand out is to showcase **real, functional projects with impeccable documentation**.

---

## 📁 The Anatomy of the Perfect Repository

A repository that wins technical interviews isn't just a haphazard dump of \`.py\` files. It should follow this structure:

\`\`\`
my-automation-project/
├── .github/workflows/      # Automated test workflows (CI)
├── src/                    # Organized source code
│   ├── __init__.py
│   ├── main.py
│   └── utils.py
├── tests/                  # Unit tests proving it works
│   └── test_main.py
├── .gitignore              # Ignores virtual environments and secrets
├── requirements.txt        # Pinned dependencies
├── LICENSE                 # Open-source license (MIT or Apache 2.0)
└── README.md               # The calling card of your project!
\`\`\`

---

## 📄 The Winning \`README.md\` Template

Your README file should contain:
1. **Title with Badges:** Project name and status badges (Python 3.12, License: MIT, Build: Passing).
2. **Animated GIF or Screenshot:** Visual demo of the program running in 5 seconds.
3. **Problem the Project Solves:** Why would someone use this software? What pain point does it solve?
4. **Technologies Used:** List of libraries, tools, and architecture.
5. **Step-by-Step Installation and Execution Guide:** Copy-paste terminal commands for anyone to clone and run in 2 minutes.
6. **Author:** Your name, LinkedIn, and professional contact links.
`,

  'l9-5': `
# How to Prepare and Stand Out in Technical Interviews 💼

The technical interview is the final hurdle between you and getting hired as a Python Developer. Knowing how to code is only 50% of the equation; the other 50% is your **communication skills and structured reasoning**.

---

## 🧠 How to Tackle Live Coding Challenges

When the interviewer shares their screen and asks you to solve an algorithmic problem live:

1. **NEVER start coding immediately:** Take a breath and ask clarifying questions about edge cases: *"Can input numbers be negative?"*, *"Can the list be empty?"*, *"Are there memory constraints?"*.
2. **Think Out Loud:** The interviewer is not just looking for the correct answer; they want to see **how your mind organizes the problem**. Explain your train of thought.
3. **Deliver a Brute-Force Solution First:** Solve the problem in a straightforward way (even if slow). Say: *"We can solve it this way in $O(n^2)$, and next we can optimize it using a hash table to achieve $O(n)$"*.
4. **Trace Mental Test Cases:** Before saying you're done, manually simulate a test case line by line in front of the interviewer.

---

## 🗣️ The STAR Method for Behavioral Questions

When asked: *"Tell me about a time your code broke in production or you had a technical conflict with a colleague"*, answer using the **STAR** method:

* **S (Situation):** Clear and concise context (*"At my previous company, we had an automation script processing invoices every day at 6 PM..."*).
* **T (Task):** What your role was (*"My responsibility was to ensure 10,000 files were validated without locking up the database..."*).
* **A (Action):** The technical decisions YOU took (*"I identified a memory leak, refactored to batch reading with context managers, and added error handling with logging..."*).
* **R (Result):** Tangible impact backed by metrics (*"Execution time dropped from 45 minutes to 4 minutes and the error rate went to zero"*).
`,
};
