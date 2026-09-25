// Module 2: Basic Python - Complete Didactic Content (English)

export const MODULO_2_CONTENT_EN: Record<string, string> = {
  'l2-1': `
# Introduction to Python: The World's Most Loved Language 🐍

Welcome to the world of **Python**! 

Created in 1991 by Dutch programmer **Guido van Rossum**, Python was designed with a core motto in mind: **readable code is more important than clever code**.

---

## 🎭 Fun Fact: Where did the name "Python" come from?

Contrary to what most people think, the name Python **did not come from the python snake**! 

Guido van Rossum was a huge fan of the famous 1970s British comedy troupe **Monty Python's Flying Circus**. He wanted a name that was short, unique, and slightly mysterious. That is why to this day, the Python community loves making jokes with Monty Python references (for example, using the words *spam* and *eggs* as variable names in tutorials).

---

## 🌟 The Zen of Python (The Philosophy of the Language)

If you open any Python terminal and type:
\`\`\`python
import this
\`\`\`
You will see a poem with the core principles of the language:

* *Beautiful is better than ugly.*
* *Explicit is better than implicit.*
* *Simple is better than complex.*
* *Complex is better than complicated.*
* *Readability counts.*
* *If the implementation is hard to explain, it's a bad idea.*

---

## 🚀 Where does Python dominate the world today?

1. **Artificial Intelligence & Machine Learning:** Virtually every state-of-the-art AI library (PyTorch, TensorFlow, Scikit-Learn) is written or controlled in Python.
2. **Data Science and Analytics:** Companies like Netflix and Spotify use Python (with Pandas and NumPy) to analyze what you watch and recommend movies and music.
3. **Web Development and APIs:** Modern frameworks like FastAPI and Django power the servers of massive platforms like Instagram.
4. **Task Automation and Scripting:** Doing in 10 seconds what would take a human 5 hours in Excel (copying files, reading PDFs, sending automated emails).

---

## ⌨️ Your First Line of Code

The rite of passage for every programmer in history is the famous **"Hello World"**:

\`\`\`python
print("Hello, World!")
\`\`\`

The \`print()\` function is a built-in Python command that takes whatever is inside the parentheses and displays it on the screen for the user.
`,

  'l2-2': `
# Installation and Development Environment 💻

In DevStart, you can run Python directly in your browser without installing anything! But for the real-world job market, you will want to have the environment set up on your computer.

---

## 🛠️ What makes up a Python developer's environment?

1. **The Python Interpreter:** The program that reads your code text file and executes it on the computer.
2. **A Code Editor (IDE):** Where you write your code. The industry standard today is **Visual Studio Code (VSCode)** or **Antigravity IDE**.
3. **The Terminal:** The command-line window (Command Prompt or PowerShell on Windows) where you run commands and view results.

---

## 📥 Step-by-Step Installation on Your Computer (Windows)

1. Go to the official website: **[python.org/downloads](https://www.python.org/downloads/)**
2. Download the latest version of Python 3.
3. **VERY IMPORTANT in the installer:**
   > ⚠️ On the very first screen of the installer, check the box:
   > **[X] Add Python to PATH** (or *Add Python to environment variables*).
   > If you forget to check this box, Windows will not recognize the \`python\` command in the terminal!
4. Click **Install Now** and wait for it to complete.

---

## 🔍 How to Test if It Worked?

Open your terminal (press \`Win + R\`, type \`cmd\` or \`powershell\`, and press Enter) and type:

\`\`\`bash
python --version
\`\`\`

If you see something like \`Python 3.12.x\` (or higher), congratulations! Python is properly installed and ready to build wonders.
`,

  'l2-3': `
# Variables in Python: Practice and Conventions 🔢

In Python, creating a variable is incredibly simple. You only need to choose a name and use the equals sign \`=\` to assign a value.

\`\`\`python
name = "Alex"
age = 22
balance = 350.50
is_active = True
\`\`\`

---

## 🔄 Dynamic Typing: Python is Smart!

In older languages (like C or Java), you were required to declare the variable type before creating it:
\`\`\`c
int age = 20; // In C: you had to specify that it was an integer
\`\`\`

In Python, you **do not need to declare the type**! Python figures it out on its own from the value you assign:
\`\`\`python
x = 10         # Python automatically knows it's an int (integer)
x = "DevStart" # Now it became a string (text) without any error!
\`\`\`

---

## 📝 Naming Conventions: snake_case

The Python community follows an official code style guide called **PEP 8**.

The rule for variables is **snake_case** (all lowercase letters separated by underscores):

* ✅ **Excellent:** \`birth_date\`, \`total_orders\`, \`discounted_price\`
* ❌ **Avoid:** \`birthDate\` (camelCase style used in JavaScript)
* ❌ **Avoid:** \`totalorders\` (all together is hard to read)
* ❌ **Terrible:** \`x1\`, \`a\`, \`temp\` (mysterious names that no one knows what they mean)

---

## ⚡ Multiple Assignment and the Value Swapping Trick

Python has some "superpowers" that save many lines of code:

### Creating multiple variables on the same line:
\`\`\`python
name, role, salary = "Lucas", "Analyst", 4500.00
print(name)    # Lucas
print(salary)  # 4500.00
\`\`\`

### Swapping variable values in just 1 line:
\`\`\`python
cup_a = "orange juice"
cup_b = "soda"

# In Python, we swap the contents instantly:
cup_a, cup_b = cup_b, cup_a

print("Cup A now has:", cup_a) # soda
print("Cup B now has:", cup_b) # orange juice
\`\`\`
`,

  'l2-4': `
# Fundamental Data Types and Conversions 🏷️

How do you know what data type is stored inside a variable? Python gives us a built-in function for that: **\`type()\`**.

\`\`\`python
name = "Python"
year = 2026
height = 1.78
is_approved = True

print(type(name))        # <class 'str'>
print(type(year))        # <class 'int'>
print(type(height))      # <class 'float'>
print(type(is_approved)) # <class 'bool'>
\`\`\`

---

## 🔄 Type Casting (Type Conversion)

Often, we receive data in one format and need to convert it into another. The 4 main conversion functions are:

1. **\`int()\`**: Converts to an integer.
   \`\`\`python
   text = "50"
   number = int(text) # Now it's the real number 50!
   print(number + 10) # Prints: 60
   \`\`\`
2. **\`float()\`**: Converts to a decimal number (float).
   \`\`\`python
   price = float("19.90") # Becomes the float 19.90
   \`\`\`
3. **\`str()\`**: Converts anything to text.
   \`\`\`python
   age = 25
   text = "I am " + str(age) + " years old."
   \`\`\`
4. **\`bool()\`**: Converts to a boolean.
   * Zero (\`0\`), empty strings (\`""\`), and empty lists become \`False\`.
   * Any non-zero number or text with content becomes \`True\`.

---

## 🚨 The Classic Beginner Trap

Look at what happens if you add two numbers that are stored as strings (inside quotes):

\`\`\`python
num1 = "10"
num2 = "20"
result = num1 + num2
print(result)
\`\`\`

What do you think it will print? 30?
**NOPE! It will print \`1020\`!** 

Why? Because when we add strings (\`str + str\`), Python performs **concatenation** (glues the texts together) instead of mathematical addition. If you want actual math, you must convert them: \`int(num1) + int(num2)\`!
`,

  'l2-5': `
# Mathematical and Comparison Operators 🧮

Python functions as a high-precision scientific supercalculator.

---

## ➕ Arithmetic Operators

| Operator | Operation | Example | Result |
|---|---|---|---|
| \`+\` | Addition | \`10 + 5\` | \`15\` |
| \`-\` | Subtraction | \`10 - 5\` | \`5\` |
| \`*\` | Multiplication | \`10 * 5\` | \`50\` |
| \`/\` | Float Division (always produces float) | \`10 / 4\` | \`2.5\` |
| \`//\` | Floor Division (discards decimals) | \`10 // 4\` | \`2\` |
| \`%\` | Modulo (Remainder of division) | \`10 % 3\` | \`1\` |
| \`**\` | Exponentiation (Power) | \`2 ** 3\` | \`8\` (2 * 2 * 2) |

---

## 🎯 The Secret Modulo Trick (\`%\`)

The remainder operator \`%\` is one of the most useful operators in all of programming. How does it work?
* If we divide 10 by 2, the division is exact and the remainder is **0**.
* If we divide 11 by 2, remainder is **1**.

> 💡 **How to check if any number is Even or Odd:**
> Simply test: \`number % 2 == 0\`. If it equals zero, it's **EVEN**. If there is a remainder of 1, it's **ODD**!

---

## ⏩ Augmented Assignment Operators

Instead of typing \`points = points + 10\`, you can use the shortcut:
* \`points += 10\` (adds 10)
* \`lives -= 1\` (subtracts 1)
* \`salary *= 1.10\` (increases by 10%)
`,

  'l2-6': `
# Working with Strings and Modern f-Strings 📝

Strings are sequences of characters used to store any kind of text.

---

## ✂️ String Slicing

In Python, every character in a string has a numerical address called an **index**, which always starts at **zero**:

\`\`\`python
text = "PYTHON"
# Indices:
#   P -> 0
#   Y -> 1
#   T -> 2
#   H -> 3
#   O -> 4
#   N -> 5
\`\`\`

You can "slice" the word like a slice of cheese using the syntax \`[start : stop : step]\`:

\`\`\`python
language = "Python"

print(language[0])    # P (first character)
print(language[-1])   # n (last character - negative indices count from the end!)
print(language[0:3])  # Pyt (from index 0 up to, but not including, index 3)
print(language[2:])   # thon (from index 2 to the end)
print(language[::-1]) # nohtyP (the ultimate trick to reverse a string!)
\`\`\`

---

## 🧰 Essential String Methods

\`\`\`python
message = "  Learning Python is Awesome  "

# Cleaning and casing
print(message.strip())       # Removes whitespace from both ends
print(message.upper())       # LEARNING PYTHON IS AWESOME
print(message.lower())       # learning python is awesome
print(message.replace("Python", "Logic")) # Replaces one word with another

# Finding length
print(len(message))          # Counts total number of characters
\`\`\`

---

## ✨ f-Strings: The Magic of String Interpolation

Before Python 3.6, combining text with variables was cumbersome and messy. Today we use **f-strings** (simply prefix the quotes with the letter \`f\`):

\`\`\`python
student = "Alex"
grade = 9.856
course = "Python"

# Place variables directly inside curly braces {}:
message = f"Student {student} scored {grade:.1f} in the {course} course!"
print(message)
# Formatted output with 1 decimal place:
# "Student Alex scored 9.9 in the Python course!"
\`\`\`
`,

  'l2-7': `
# Input and Output: Interacting with the User 💬

A program that does not receive information from the user is just a static animation. Real usefulness comes when you build programs that respond to input!

---

## 📥 The \`input()\` Function

The \`input()\` function pauses program execution and waits for the user to type something and press the **Enter** key.

\`\`\`python
name = input("What is your name? ")
print(f"Pleased to meet you, {name}!")
\`\`\`

---

## ⚠️ The Golden Rule of \`input()\`

> 🚨 **Commit this to memory forever:**
> The \`input()\` function **ALWAYS** returns the typed value as **text (\`str\`)**, even if the user only types numbers!

If you try to do this:
\`\`\`python
age = input("Enter your age: ")
next_year = age + 1 # 💥 ERROR! You cannot add text and a number!
\`\`\`

To do math with what the user typed, you **must** convert the input:

\`\`\`python
age = int(input("Enter your age: "))
next_year = age + 1
print(f"Next year you will be {next_year} years old!")
\`\`\`

---

## 🖨️ Advanced \`print()\` Tricks

The \`print()\` function has two awesome optional parameters:

### 1. The separator (\`sep\`):
\`\`\`python
# By default, it separates items with a space, but you can change it:
print("24", "09", "2026", sep="/") # Prints: 24/09/2026
\`\`\`

### 2. The line ending (\`end\`):
\`\`\`python
# By default, it prints a newline at the end, but you can prevent it:
print("Loading", end="...")
print(" Done!")
# Prints everything on the same line: "Loading... Done!"
\`\`\`
`,

  'l2-8': `
# Quiz and Complete Review: Basic Python 🎯

Congratulations on completing all the hands-on lessons of **Module 2**!

---

## 🏆 Summary of Skills You've Mastered:

1. **Variables and Types:** You know how to use \`int\`, \`float\`, \`str\`, and \`bool\`.
2. **Input and Output:** You know how to use \`print()\` formatted with f-strings and receive data with \`input()\`.
3. **Type Conversions:** You know how to convert text into numbers using \`int()\` and \`float()\` to avoid calculation errors.
4. **String Manipulation:** You have mastered slicing, cleaning methods like \`strip()\`, and upper/lower casing.
5. **Operators:** You know how to compute remainders with \`%\`, powers with \`**\`, and floor divisions with \`//\`.

---

## ❓ Quick Knowledge Check (Think before checking the answer):

1. **What is the result of \`type(10.0)\`?**
   * *Answer:* \`<class 'float'>\` (it has a decimal point, so it is a float, even if it is zero after the decimal point).
2. **What happens when you run \`"3" * 4\` in Python?**
   * *Answer:* \`"3333"\`! In Python, multiplying a string by a number repeats the text!
3. **What is the difference between \`=\` and \`==\`?**
   * *Answer:* \`=\` is assignment (stores a value into a variable), while \`==\` is equality comparison.

In **Module 3**, we will enter the heart of systems: **Control Flow (if/else and Loops)**!
`,
};
