// Module 5: Functions - Complete Didactic Content (English)

export const MODULO_5_CONTENT_EN: Record<string, string> = {
  'l5-1': `
# Defining Functions in Python (\`def\`, Parameters, and Return) ⚙️

In professional software engineering, there is an absolute mantra: **DRY — Don't Repeat Yourself**. If you copy and paste the same block of code into multiple places across your project, you've just created a maintenance time bomb: whenever a business rule changes, you'll have to remember to manually update every single copy.

A **function** is a named, self-contained block of code designed to perform a specific, well-defined task. Think of a function like an **industrial juicer**:
1. It has an **input** (fruits placed into the hopper).
2. It performs internal **processing** (blades crushing and squeezing).
3. It delivers a tangible **output** (a glass of fresh juice on the tray).

---

## 🏗️ Anatomy of a Function in Python

To teach the Python interpreter a new function, we use the reserved keyword \`def\` (short for *define*), followed by the function name in \`snake_case\`, parentheses for parameters, and a colon (\`:\`).

\`\`\`
  def   function_name   (  parameter_1, parameter_2  )  :
   │          │                        │                │
keyword   identifier in          input parameters    start of
(def)      snake_case                                  block
\`\`\`

\`\`\`python
# 1. FUNCTION DEFINITION
def greet_developer(name, language):
    """Displays a personalized welcoming message."""
    message = f"Hello, {name}! Welcome to your journey mastering {language}."
    print(message)

# 2. CALLING / INVOKING THE FUNCTION
greet_developer("Alice", "Python")
greet_developer("Bob", "TypeScript")
\`\`\`

---

## 🔄 \`print()\` vs \`return\`: The Fundamental Difference

One of the most frequent misunderstandings among beginner programmers is confusing **displaying on screen** with **returning a value**.

| Feature | What does it actually do? | Restaurant Analogy |
| :--- | :--- | :--- |
| **\`print()\`** | Merely displays characters in the terminal/console. The data vanishes into thin air right after. | The waiter shouts the dish name across the dining room, but never places any food on your table. |
| **\`return\`** | Terminates the function and **hands the computed result** back to the caller. | The waiter brings the tray directly to your table so you can actually eat your meal. |

\`\`\`python
# Example with print (the result CANNOT be reused):
def calculate_area_print(width, height):
    area = width * height
    print(area)

result = calculate_area_print(5, 4) # Prints 20 to the console
print("Result type:", type(result)) # <class 'NoneType'> -> EMPTY!

# Correct example with return (the result IS returned):
def calculate_area_return(width, height):
    area = width * height
    return area

room_area = calculate_area_return(5, 4)
# Now we can perform math calculations, save to a database, etc.:
flooring_price_per_sqm = 45.0
total_cost = room_area * flooring_price_per_sqm
print(f"Total cost to cover {room_area}m²: \${total_cost:.2f}")
\`\`\`

---

## 📦 Returning Multiple Values

In Python, a function can return multiple values simultaneously separated by commas. Under the hood, Python packs these values into an immutable **Tuple**, allowing direct unpacking:

\`\`\`python
def analyze_numbers(numbers):
    minimum = min(numbers)
    maximum = max(numbers)
    average = sum(numbers) / len(numbers)
    return minimum, maximum, average  # Returns a tuple: (minimum, maximum, average)

data = [12, 45, 7, 89, 23, 56]
min_val, max_val, avg_val = analyze_numbers(data)

print(f"Min: {min_val} | Max: {max_val} | Average: {avg_val:.1f}")
\`\`\`

---

## ⚠️ Common Pitfalls and Gotchas

1. **Forgetting parentheses when calling a function:**
   \`\`\`python
   def get_status():
       return "Server Active"

   print(get_status)   # Displays: <function get_status at 0x...> (points to the function in memory!)
   print(get_status()) # Displays: "Server Active" (executes the function!)
   \`\`\`
2. **Unreachable Code after \`return\`:**
   Any line written after a \`return\` statement within the same execution path will never be executed, as \`return\` terminates the function immediately.

---

## 💡 Best Practices (PEP 8)

* **Docstrings:** Always document your functions with an explanatory string on the first line using triple quotes (\`"""\`).
* **Descriptive \`snake_case\` names:** Use verbs to indicate clear actions (\`calculate_discount\`, \`validate_email\`, \`send_notification\`). Avoid generic names like \`f()\`, \`thing()\`, or \`process()\`.
`,

  'l5-2': `
# Advanced Parameters: Defaults, *args, and **kwargs 📦

In enterprise systems, not all data inputs are mandatory, and flexible functions are essential for building robust APIs and reusable libraries.

---

## 1. Default Parameters

You can assign default values to parameters. If the caller does not supply that argument, the default value kicks in automatically:

\`\`\`python
def connect_database(host="localhost", port=5432, timeout=30):
    print(f"Connecting to {host}:{port} (Timeout: {timeout}s)...")

# Calls with varying levels of flexibility:
connect_database()                         # Uses all defaults
connect_database("192.168.1.100")          # Overrides host only
connect_database(port=5433, timeout=60)    # Keyword arguments
\`\`\`

> 🚨 **Beware the Golden Syntax Rule:** Parameters with default values must ALWAYS come **after** positional parameters without default values, otherwise Python raises \`SyntaxError: non-default argument follows default argument\`.

---

## 2. \`*args\` (Variable Positional Arguments)

When you do not know in advance how many arguments will be passed to a function (for example, a calculator summing an arbitrary amount of numbers), we use the asterisk prefix \`*args\`.

Python collects all extra arguments passed positionally and groups them into a **Tuple**:

\`\`\`python
def sum_numbers(*args):
    # args is a tuple, e.g.: (10, 20, 30)
    print(f"Values received: {args} (Type: {type(args).__name__})")
    total = sum(args)
    return total

print("Result 1:", sum_numbers(5, 10))
print("Result 2:", sum_numbers(1, 2, 3, 4, 5, 6, 7, 8, 9, 10))
\`\`\`

---

## 3. \`**kwargs\` (Variable Keyword Arguments)

The double asterisk prefix \`**kwargs\` (*Keyword Arguments*) captures all arguments passed in \`key=value\` format and packs them into a **Dictionary**:

\`\`\`python
def register_product(product_id, name, price, **kwargs):
    print(f"--- Product #{product_id}: {name} (\${price:.2f}) ---")
    for key, value in kwargs.items():
        print(f"  • {key.replace('_', ' ').title()}: {value}")

# Passing dynamic attributes without modifying the function signature:
register_product(
    101, "Gaming Mouse", 49.99,
    brand="Logitech", dpi=16000, rgb=True, warranty_months=24
)
\`\`\`

---

## 🗺️ Universal Parameter Ordering

When combining different parameter types in the same function, PEP 8 and Python's syntax strictly enforce this order:

\`\`\`
def function(required_positional, *args, default_values=..., **kwargs):
\`\`\`

---

## ⚠️ Critical Gotcha: Mutable Objects as Default Values

**NEVER use lists, dictionaries, or sets as a parameter's default value!**
The default value is evaluated **only once** when Python defines the function, not on each subsequent call.

\`\`\`python
# ❌ SERIOUS BUG: The default list is shared across calls!
def add_item(item, items_list=[]):
    items_list.append(item)
    return items_list

print(add_item("A")) # ['A']
print(add_item("B")) # ['A', 'B'] -> CAUTION! 'A' persisted!

# ✅ CORRECT AND PROFESSIONAL APPROACH:
def add_item_safe(item, items_list=None):
    if items_list is None:
        items_list = [] # A new independent list created at runtime
    items_list.append(item)
    return items_list
\`\`\`
`,

  'l5-3': `
# Variable Scope: Local, Enclosing, Global, and Built-in (LEGB) 🌍

A variable created in your code is not indiscriminately accessible everywhere. Python follows strict rules for **identifier visibility and resolution**, known by the acronym **LEGB**:

\`\`\`
┌──────────────────────────────────────────────┐
│  L - Local (Inside the function itself)      │
│   ┌──────────────────────────────────────────┤
│   │  E - Enclosing (Nested functions)        │
│   │   ┌──────────────────────────────────────┤
│   │   │  G - Global (Module / file level)    │
│   │   │   ┌──────────────────────────────────┤
│   │   │   │  B - Built-in (print, len, range)│
└───┴───┴───┴──────────────────────────────────┘
\`\`\`

---

## 1. Local Scope vs Global Scope

\`\`\`python
interest_rate = 0.05  # GLOBAL variable (visible throughout the file)

def calculate_installment(loan_amount, months):
    # interest_rate is read from global scope
    # total_interest and final_amount are LOCAL variables
    total_interest = loan_amount * (interest_rate * months)
    final_amount = loan_amount + total_interest
    return final_amount / months

installment = calculate_installment(1000, 12)
print(f"Installment amount: \${installment:.2f}")

# Attempting to access a local variable outside the function:
# print(total_interest) # 💥 NameError: name 'total_interest' is not defined!
\`\`\`

---

## 2. The \`global\` Keyword (and Why You Should Avoid It)

When you try to **assign** a value to a variable that already exists globally from within a function, Python creates a **new local variable** with that same name (a behavior known as *shadowing*).

\`\`\`python
score = 0

def score_point():
    global score  # Informs Python that we want to modify the GLOBAL variable
    score += 10

score_point()
print("Global score:", score) # 10
\`\`\`

> 💡 **Engineering Best Practice:** Avoid using \`global\` in real-world projects. Modifying mutable global variables introduces unexpected "side effects" that become extremely hard to trace in large systems. The clean and correct approach is to pass data through **parameters** and return results via **\`return\`**.

---

## 3. Enclosing Scope and the \`nonlocal\` Keyword (Closures)

When a function is defined inside another function, the inner function has access to the outer function's scope (*Enclosing Scope*):

\`\`\`python
def create_counter():
    count = 0
    def increment():
        nonlocal count  # Modifies the variable in the parent function's scope
        count += 1
        return count
    return increment

my_counter = create_counter()
print(my_counter()) # 1
print(my_counter()) # 2
print(my_counter()) # 3
\`\`\`
`,

  'l5-4': `
# First-Class Functions and Lambda Expressions λ

In Python, functions are **first-class citizens**. This means functions can be treated like any other piece of data: they can be assigned to variables, passed as arguments to other functions, and returned from functions.

---

## 1. Assigning Functions to Variables

\`\`\`python
def shout(text):
    return text.upper() + "!!!"

# Assigning the function without parentheses:
announcer = shout
print(announcer("attention to this announcement")) # ATTENTION TO THIS ANNOUNCEMENT!!!
\`\`\`

---

## 2. What Are Lambda Expressions?

A **lambda expression** is an anonymous function (a function without an explicit name) written on a single line. Its syntax is compact:

\`\`\`
lambda parameter1, parameter2: return_expression
\`\`\`

Direct comparison:
\`\`\`python
# Traditional function:
def calculate_tax(price):
    return price * 0.15

# Equivalent lambda expression:
calculate_tax_lambda = lambda price: price * 0.15

print(calculate_tax(100))        # 15.0
print(calculate_tax_lambda(100)) # 15.0
\`\`\`

---

## 3. Practical Use: \`sorted()\`, \`map()\`, and \`filter()\`

Lambda expressions shine when used as short-lived arguments passed to higher-order functions (*Higher-Order Functions*).

### Custom Sorting:
\`\`\`python
users = [
    {"name": "Beatrice", "age": 29},
    {"name": "Charles", "age": 19},
    {"name": "Anna", "age": 35}
]

# Sort the list of dictionaries by the 'age' field:
sorted_users = sorted(users, key=lambda u: u["age"])
for u in sorted_users:
    print(f"{u['name']} - {u['age']} years old")
\`\`\`

### Quick Filtering with \`filter()\`:
\`\`\`python
prices = [15.50, 89.90, 120.00, 45.00, 310.00]
# Filter only expensive products (>= $100):
expensive = list(filter(lambda p: p >= 100.0, prices))
print("Premium products:", expensive) # [120.0, 310.0]
\`\`\`

---

## ⚠️ When NOT to Use Lambdas

If your logic requires more than one operation, complex conditionals, or loops, **NEVER force a lambda**. Write a regular function with \`def\`, as readability is an absolute priority in the Python ecosystem.
`,

  'l5-5': `
# Recursion: Functions Calling Themselves 🌀

**Recursion** is an elegant and powerful technique where a function solves a problem by dividing it into smaller instances of the very same problem, calling itself until it reaches a known trivial case.

---

## 🧱 The 2 Essential Pillars of Every Recursive Function

Every recursive function strictly requires two well-defined parts:
1. **Base Case (Stopping Condition):** The simplest possible scenario where the answer is immediate, requiring no further recursion. Without a base case, the function calls itself infinitely until it runs out of memory (\`RecursionError: maximum recursion depth exceeded\`).
2. **Recursive Case:** The step where the function breaks the problem down and invokes itself with a reduced argument, moving closer to the base case.

---

## 🧮 Classic Example 1: Factorial ($n!$)

The factorial of a natural number $n$ is defined as the product of all positive integers from 1 up to $n$.
Mathematically:
$$5! = 5 \\times 4!$$
$$4! = 4 \\times 3!$$
$$1! = 1 \\quad \\text{(Base Case)}$$

\`\`\`python
def factorial(n):
    # 1. BASE CASE:
    if n <= 1:
        return 1
    # 2. RECURSIVE CASE:
    return n * factorial(n - 1)

print("5! =", factorial(5)) # 120
\`\`\`

### Visualizing the Call Stack:
\`\`\`
factorial(3)
  ├── 3 * factorial(2)
  │         ├── 2 * factorial(1)
  │         │         └── returns 1 (Base Case)
  │         └── returns 2 * 1 = 2
  └── returns 3 * 2 = 6
\`\`\`

---

## 🌿 Classic Example 2: Fibonacci Sequence

The sequence where each term is the sum of the two preceding ones: $0, 1, 1, 2, 3, 5, 8, 13, 21 \\dots$

\`\`\`python
def fibonacci(n):
    """Returns the n-th term of the Fibonacci sequence."""
    if n == 0:
        return 0
    if n == 1:
        return 1
    return fibonacci(n - 1) + fibonacci(n - 2)

# Displaying the first 10 terms:
sequence = [fibonacci(i) for i in range(10)]
print("Fibonacci Sequence:", sequence)
\`\`\`

---

## ⚠️ Python's Recursion Limit

The CPython interpreter has a default recursion depth limit (typically 1,000 calls) to safeguard the system against a stack overflow (*stack overflow*). You can inspect this limit with:
\`\`\`python
import sys
print("Default recursion limit:", sys.getrecursionlimit())
\`\`\`
`,

  'l5-6': `
# Practical Challenge: Mathematical Utilities Library 🏆

In this Module 5 consolidation project, we will apply every core concept of functions (parameters, return values, defaults, recursion, and docstrings) to structure a professional mathematical and statistical utility module.

---

## 📋 Requirements Specification

Our library must contain the following decoupled and tested functions:

1. **\`calculate_statistics(*numbers)\`**:
   - Accepts an arbitrary quantity of numbers via \`*args\`.
   - Returns a dictionary containing: \`count\`, \`sum\`, \`average\`, \`min\`, and \`max\`.
2. **\`convert_temperature(value, from_scale="C", to_scale="F")\`**:
   - Converts temperatures between Celsius, Fahrenheit, and Kelvin with scale validation.
3. **\`recursive_power(base, exponent)\`**:
   - Computes $base^{exponent}$ using recursion (without using the \`**\` operator).
4. **\`is_prime(n)\`**:
   - Returns \`True\` if the number is prime and \`False\` otherwise.

---

## 💻 Complete Solution Implementation

\`\`\`python
def calculate_statistics(*numbers):
    """Calculates fundamental statistical indicators."""
    if not numbers:
        return {"count": 0, "sum": 0, "average": 0.0, "min": None, "max": None}
    
    total = sum(numbers)
    count = len(numbers)
    return {
        "count": count,
        "sum": total,
        "average": total / count,
        "min": min(numbers),
        "max": max(numbers)
    }

def convert_temperature(value, from_scale="C", to_scale="F"):
    """Converts temperatures between Celsius (C), Fahrenheit (F), and Kelvin (K)."""
    from_scale = from_scale.upper()
    to_scale = to_scale.upper()
    
    # 1. Normalize everything to Celsius:
    if from_scale == "C":
        celsius = value
    elif from_scale == "F":
        celsius = (value - 32) * 5 / 9
    elif from_scale == "K":
        celsius = value - 273.15
    else:
        raise ValueError(f"Invalid source scale: {from_scale}")
    
    # 2. Convert from Celsius to the target scale:
    if to_scale == "C":
        return round(celsius, 2)
    elif to_scale == "F":
        return round((celsius * 9 / 5) + 32, 2)
    elif to_scale == "K":
        return round(celsius + 273.15, 2)
    else:
        raise ValueError(f"Invalid target scale: {to_scale}")

def recursive_power(base, exponent):
    """Calculates base^exponent recursively."""
    if exponent == 0:
        return 1
    if exponent < 0:
        return 1 / recursive_power(base, -exponent)
    return base * recursive_power(base, exponent - 1)

def is_prime(n):
    """Checks whether a positive integer is prime."""
    if n <= 1:
        return False
    if n <= 3:
        return True
    if n % 2 == 0 or n % 3 == 0:
        return False
    i = 5
    while i * i <= n:
        if n % i == 0 or n % (i + 2) == 0:
            return False
        i += 6
    return True

# Brazilian Portuguese aliases (for platform exercise compatibility):
calcular_estatisticas = calculate_statistics
converter_temperatura = convert_temperature
potencia_recursiva = recursive_power
eh_primo = is_prime

# --- EXECUTION AND TESTS ---
stats = calculate_statistics(10, 20, 30, 40, 50)
print("Statistics:", stats)

temp_f = convert_temperature(100, from_scale="C", to_scale="F")
print(f"100°C is equal to {temp_f}°F")

power = recursive_power(2, 5)
print(f"2 raised to the power of 5 = {power}")

print(f"Is 29 prime? {is_prime(29)}")
print(f"Is 30 prime? {is_prime(30)}")
\`\`\`
`,
};
