// Module 3: Control Structures - Complete Didactic Content (English)

export const MODULO_3_CONTENT_EN: Record<string, string> = {
  'l3-1': `
# Conditionals in Python: if, elif, and else 🔀

Up until now, all our programs ran straight from top to bottom. But a real program needs to know how to **make decisions**:
* If the user enters the correct password, log into the system.
* If they make a mistake, display an error message.

In Python, we use the reserved keywords:
* **\`if\`** ("if")
* **\`elif\`** (short for "else if")
* **\`else\`** ("otherwise" / "else")

---

## 📐 Python's Golden Rule: Indentation!

In other languages like C or JavaScript, blocks of code are enclosed in curly braces \`{ }\`.
In Python, **indentation (spacing with 4 spaces or the Tab key) defines what belongs inside the block**:

\`\`\`python
age = 18

if age >= 18:
    print("Line inside the if block (indented with 4 spaces)")
    print("Also inside the if block")

print("Line outside the if block (always executes, no indentation)")
\`\`\`

> 🚨 **Attention:** Never forget the colon **\`:\`** at the end of the \`if\`, \`elif\`, or \`else\` line!

---

## 🚦 Practical Example: Age Group Classifier

\`\`\`python
age = int(input("Enter your age: "))

if age < 12:
    print("You are a Child.")
elif age < 18:
    print("You are a Teenager.")
elif age < 60:
    print("You are an Adult.")
else:
    print("You are a Senior.")
\`\`\`

Python checks conditions from top to bottom: the moment it finds a condition that evaluates to True, it executes that specific block and skips all the others, jumping straight to the end!
`,

  'l3-2': `
# Logical Operators: and, or, and not 🧩

What if we need to check more than one condition at the same time?
For example: to ride a roller coaster, you need to be **over 12 years old AND taller than 1.40m (4'7")**.

In Python, we combine conditions using readable English words:
* **\`and\`** (both conditions must be true)
* **\`or\`** (at least ONE condition must be true)
* **\`not\`** (inverts the value: turns True into False and vice versa)

---

## 📊 The Truth Table Explained with Coffee ☕

### 1. The \`and\` Operator (Strict):
Imagine that you only drink coffee if you have **coffee AND sugar**:
* Has coffee + Has sugar ➔ **Drink the coffee (\`True\`)**
* Has coffee + Missing sugar ➔ **Don't drink (\`False\`)**
* Missing coffee + Has sugar ➔ **Don't drink (\`False\`)**

\`\`\`python
has_coffee = True
has_sugar = True

if has_coffee and has_sugar:
    print("Hot coffee is ready!")
\`\`\`

### 2. The \`or\` Operator (Flexible):
Imagine that you accept payment with **Credit Card OR Cash**:
* Paid with Card? ➔ **Approved (\`True\`)**
* Paid with Cash? ➔ **Approved (\`True\`)**
* Paid with both? ➔ **Approved (\`True\`)**
* Neither available? ➔ **Declined (\`False\`)**

\`\`\`python
card = False
cash = True

if card or cash:
    print("Payment confirmed successfully!")
\`\`\`

### 3. The \`not\` Operator (Inverter):
\`\`\`python
is_raining = False

if not is_raining:
    print("Great weather, let's go for a walk in the park!")
\`\`\`
`,

  'l3-3': `
# The while Loop: Repeating While a Condition is True 🔄

The **\`while\`** statement is used to repeat a block of instructions as many times as necessary, until a specific condition changes and becomes false.

---

## 🔢 Anatomy of a while Loop

Every safe \`while\` loop consists of three parts:
1. **Initialization:** Creating a counter variable before the loop begins.
2. **Condition:** The test that determines whether the loop keeps running.
3. **Update (Step):** Modifying the variable inside the loop to avoid infinite loops!

Take a look at this example that counts from 1 to 5:
\`\`\`python
counter = 1  # 1. Initialization

while counter <= 5:  # 2. Condition
    print(f"Current number: {counter}")
    counter += 1  # 3. Update (adds 1 on each iteration)

print("Finished counting!")
\`\`\`

---

## 🛡️ Interactive Menu with User Exit

The \`while\` loop shines when you don't know how many times the user will want to run the program before exiting:

\`\`\`python
option = ""

while option != "3":
    print("\n--- SYSTEM MENU ---")
    print("1. Check Balance")
    print("2. Make a Deposit")
    print("3. Exit")
    
    option = input("Choose an option: ")
    
    if option == "1":
        print("Your balance is $1,500.00")
    elif option == "2":
        print("Deposit completed successfully!")
    elif option == "3":
        print("Thank you for using our system. See you soon!")
    else:
        print("Invalid option, please try again.")
\`\`\`
`,

  'l3-4': `
# The for Loop and the range() Function 🎯

While \`while\` is great when you don't know how many repetitions will occur, **\`for\`** is the absolute king when you want to iterate over a sequence or repeat a block an exact number of times!

---

## 🎛️ Mastering the \`range()\` Function

The \`range()\` function creates a sequence of numbers custom-tailored for \`for\`. It accepts up to 3 arguments:
\`range(start, stop, step)\`

> ⚠️ **Remember:** The **stop** value is never included! (It always goes up to \`stop - 1\`).

### 1. Only 1 argument (starts from 0 up to before the number):
\`\`\`python
for i in range(5):
    print(i)  # Prints: 0, 1, 2, 3, 4
\`\`\`

### 2. With start and stop:
\`\`\`python
for i in range(1, 6):
    print(i)  # Prints: 1, 2, 3, 4, 5
\`\`\`

### 3. With step (increments by step size):
\`\`\`python
# Even numbers from 0 to 10:
for i in range(0, 11, 2):
    print(i)  # Prints: 0, 2, 4, 6, 8, 10
\`\`\`

### 4. Countdown (negative step):
\`\`\`python
for count in range(5, 0, -1):
    print(count)
print("🚀 Blast off!")
\`\`\`

---

## 🔤 Iterating Over Letters in a Word

The \`for\` loop can iterate directly over any string:

\`\`\`python
word = "PYTHON"
for letter in word:
    print(f"Letter: {letter}")
\`\`\`
`,

  'l3-5': `
# Advanced Loop Control: break and continue ⏹️

Sometimes, inside a loop, an unexpected event occurs and you need to change your loop's plan on the fly. Python gives us two commands for this:

---

## 🛑 The \`break\` Statement (Stop Everything and Exit!)

\`break\` cancels and immediately terminates the loop, jumping straight to the first line of code after it.

Imagine searching for an item on a warehouse shelf:
\`\`\`python
products = ["rice", "beans", "pasta", "olive oil", "salt"]

for item in products:
    print(f"Checking shelf: {item}")
    if item == "pasta":
        print("🎯 Found the pasta! No need to keep searching.")
        break  # Immediately exits the loop!

print("Search completed.")
\`\`\`

---

## ⏭️ The \`continue\` Statement (Skip to the Next Iteration!)

\`continue\` does not terminate the loop; it simply ignores the rest of the current iteration and jumps straight to the next cycle.

Example: printing numbers from 1 to 10, **skipping the number 5**:
\`\`\`python
for num in range(1, 11):
    if num == 5:
        print("Skipping the forbidden number...")
        continue  # Skips print(num) and proceeds to 6!
    
    print(f"Number: {num}")
\`\`\`
`,

  'l3-6': `
# Practical Challenge: Interactive Mini Calculator 🧮

It's time to bring together all the knowledge from Module 3 into a real terminal application!

---

## 📋 Project Specifications:

You will build a complete terminal calculator that:
1. Presents a continuous menu of operations (\`+\`, \`-\`, \`*\`, \`/\`, or \`Q\` to Quit).
2. Prompts the user for two numbers.
3. Handles division by zero (don't let the program crash if the user tries to divide by zero!).
4. Displays the formatted result.
5. Only closes the program when the user explicitly chooses the exit option.

---

## 💻 Complete Reference Code:

\`\`\`python
while True:
    print("\n" + "=" * 30)
    print("      MINI CALCULATOR")
    print("=" * 30)
    print("[ + ] Addition")
    print("[ - ] Subtraction")
    print("[ * ] Multiplication")
    print("[ / ] Division")
    print("[ Q ] Quit")
    
    option = input("Choose the desired operation: ").strip().upper()
    
    if option == "Q":
        print("Thank you for using the Mini Calculator! See you soon! 👋")
        break
        
    if option not in ["+", "-", "*", "/"]:
        print("❌ Invalid option! Choose one of the symbols from the list.")
        continue
        
    num1 = float(input("Enter the 1st number: "))
    num2 = float(input("Enter the 2nd number: "))
    
    if option == "+":
        result = num1 + num2
        print(f"✅ Result: {num1} + {num2} = {result}")
    elif option == "-":
        result = num1 - num2
        print(f"✅ Result: {num1} - {num2} = {result}")
    elif option == "*":
        result = num1 * num2
        print(f"✅ Result: {num1} * {num2} = {result}")
    elif option == "/":
        if num2 == 0:
            print("❌ Math Error: Cannot divide by zero!")
        else:
            result = num1 / num2
            print(f"✅ Result: {num1} / {num2} = {result:.2f}")
\`\`\`

This project brings together variables, type conversion (\`float\`), conditionals (\`if/elif/else\`), an infinite loop with a stop condition (\`while True\` + \`break\`), f-strings, and edge case handling!
`,
};
