// Module 4: Data Structures - Complete Didactic Content (English)

export const MODULO_4_CONTENT_EN: Record<string, string> = {
  'l4-1': `
# Python Lists: Organizing Multiple Data Items 📦

Until now, every variable we created held only a single value at a time (\`name = "Ana"\` or \`age = 20\`).

But what if you were programming an online store with 500 products? Creating 500 separate variables (\`product1\`, \`product2\`, ..., \`product500\`) would be insane!

That's why **Lists** exist!

---

## 📋 Creating Your First List

In Python, we create lists using square brackets **\`[ ]\`** and separating items with commas:

\`\`\`python
# List of strings
fruits = ["Apple", "Banana", "Strawberry", "Grape"]

# List of numbers
prices = [10.50, 4.20, 15.00, 8.90]

# Lists can mix different data types:
profile = ["Carlos Silva", 28, 1.80, True]
\`\`\`

---

## 🏷️ Accessing Items by Index

Just like with strings, item indexing always starts from **zero (0)**:

\`\`\`python
cities = ["New York", "London", "Tokyo", "Paris"]

print(cities[0])  # New York (first item)
print(cities[1])  # London (second item)
print(cities[-1]) # Paris (last item in the list!)
\`\`\`

---

## ✏️ Lists are Mutable (They Can Be Modified)

Unlike strings, you can directly change the value of any element in a list:

\`\`\`python
teams = ["Lakers", "Warriors", "Bulls"]
print("Before:", teams)

# Replacing the second item (index 1):
teams[1] = "Celtics"
print("After:", teams) # ['Lakers', 'Celtics', 'Bulls']
\`\`\`
`,

  'l4-2': `
# List Methods: Manipulating Elements 🛠️

Lists come equipped with powerful built-in tools that allow you to add, remove, sort, and search for elements.

---

## ➕ Adding Elements

### 1. \`append()\` — Adds to the end of the list:
\`\`\`python
tasks = ["Study Python", "Make coffee"]
tasks.append("Practice exercises")
print(tasks) # ['Study Python', 'Make coffee', 'Practice exercises']
\`\`\`

### 2. \`insert()\` — Adds at a specific position:
\`\`\`python
# Adds "Wash the dishes" exactly at position 1:
tasks.insert(1, "Wash the dishes")
\`\`\`

---

## ➖ Removing Elements

### 1. \`pop()\` — Removes and returns the last item (or by index):
\`\`\`python
numbers = [10, 20, 30]
last = numbers.pop() # Removes 30
print(numbers) # [10, 20]
\`\`\`

### 2. \`remove()\` — Removes by value:
\`\`\`python
groceries = ["milk", "bread", "sugar"]
groceries.remove("bread") # Removes the first occurrence of the word "bread"
\`\`\`

---

## 📊 Quick Statistics and Sorting

\`\`\`python
grades = [7.5, 9.0, 4.0, 8.5, 6.0]

print("Number of tests:", len(grades)) # 5
print("Lowest grade:", min(grades))    # 4.0
print("Highest grade:", max(grades))   # 9.0
print("Total sum:", sum(grades))       # 35.0
print("Average:", sum(grades) / len(grades)) # 7.0

# Sorting from lowest to highest:
grades.sort()
print("Ascending order:", grades)

# Sorting from highest to lowest:
grades.sort(reverse=True)
print("Descending order:", grades)
\`\`\`
`,

  'l4-3': `
# Tuples: Immutable and Safe Lists 🔒

A **Tuple** is virtually identical to a list, with one crucial difference: **it is 100% immutable**. Once created, no element can be added, removed, or modified.

---

## 🛡️ Syntax: Parentheses Instead of Square Brackets

\`\`\`python
# Tuple of geographic coordinates
coordinates = (-23.5505, -46.6333)

# Tuple with days of the week
days_of_week = ("Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday")
\`\`\`

If you try to modify a value:
\`\`\`python
coordinates[0] = 0 # 💥 TypeError: 'tuple' object does not support item assignment!
\`\`\`

---

## 🤔 Why Use Tuples if Lists are More Flexible?

1. **Protection against accidental bugs:** If you have data that should **never** change (months of the year, state codes, GPS coordinates), using a tuple guarantees that no other part of the code will accidentally modify that data.
2. **Processing speed:** Tuples consume less memory and are read faster by the computer than lists.
`,

  'l4-4': `
# Dictionaries: Key-Value Structures 📖

If you open a traditional paper dictionary, you look up a **word (key)** to read its **definition (value)**.

In Python, a **Dictionary (\`dict\`)** works the same way: instead of accessing data through numeric indices (\`0, 1, 2\`), you access it using **meaningful names/keys**.

---

## 🗂️ Creating a Dictionary

We use curly braces **\`{ }\`** with the **\`"key": value\`** structure:

\`\`\`python
student = {
    "name": "Alex Smith",
    "age": 21,
    "course": "Software Engineering",
    "grade": 9.4,
    "enrolled": True
}
\`\`\`

---

## 🔍 How to Access and Modify Values

\`\`\`python
# Accessing:
print(student["name"])   # Alex Smith
print(student["course"]) # Software Engineering

# Modifying:
student["grade"] = 9.8

# Adding a new key:
student["semester"] = 4
\`\`\`

---

## 🛡️ The Safe Method: \`.get()\`

If you try to access a key that does not exist using square brackets (\`student["phone"]\`), your program will crash with a \`KeyError\`.

To avoid this, use the **\`.get()\`** method:
\`\`\`python
# If not found, it returns "Not provided" instead of crashing the program!
phone = student.get("phone", "Not provided")
print(phone) # Not provided
\`\`\`

---

## 🔁 Iterating Over a Dictionary with \`for\`

\`\`\`python
car = {"brand": "Toyota", "model": "Corolla", "year": 2024}

for key, value in car.items():
    print(f"{key.upper()}: {value}")
\`\`\`
`,

  'l4-5': `
# Sets: Eliminate Duplicates Instantly 🧺

In school math, you surely studied numerical sets (A ∪ B, A ∩ B). Python features a built-in data structure directly inspired by this concept: **Sets** (\`set\`).

---

## ✨ The 2 Golden Rules of a Set:

1. **Unique Elements:** No duplicate items allowed! If you try to add the number 10 five times, it will only store it once.
2. **Unordered:** Elements have no index (\`set[0]\` does not exist).

---

## 🪄 The Duplicate Removal Trick

Imagine you received a massive list of customer emails where many signed up multiple times:

\`\`\`python
raw_emails = [
    "john@email.com",
    "mary@email.com",
    "john@email.com",
    "peter@email.com",
    "mary@email.com"
]

# Convert to a set to remove duplicates in 1 second:
unique_emails = list(set(raw_emails))
print(unique_emails)
# Output: ['john@email.com', 'mary@email.com', 'peter@email.com']
\`\`\`

---

## 🧮 Mathematical Set Operations

\`\`\`python
python_students = {"Lucas", "Ana", "Marcos", "Beatriz"}
javascript_students = {"Beatriz", "Carlos", "Lucas", "Fernanda"}

# 1. Intersection (who is taking BOTH courses at the same time):
both = python_students & javascript_students
print("Enrolled in both:", both) # {'Beatriz', 'Lucas'}

# 2. Union (all unique students in the school):
all_students = python_students | javascript_students
print("Total students:", all_students)

# 3. Difference (who is taking Python but NOT JavaScript):
only_python = python_students - javascript_students
print("Python only:", only_python) # {'Ana', 'Marcos'}
\`\`\`
`,

  'l4-6': `
# List Comprehension: Elegant Code 🚀

**List Comprehension** is one of the most elegant, admired, and widely used features in modern Python. It allows you to create new lists from existing iterables using a single, readable line of code.

---

## 🔄 The Traditional Way vs. The Pythonic Way

Imagine you want to create a list containing the square of every number from 1 to 5:

### The Traditional Way (4 lines):
\`\`\`python
squares = []
for x in range(1, 6):
    squares.append(x ** 2)

print(squares) # [1, 4, 9, 16, 25]
\`\`\`

### With List Comprehension (A single line!):
\`\`\`python
squares = [x ** 2 for x in range(1, 6)]
print(squares) # [1, 4, 9, 16, 25]
\`\`\`

The reading blueprint is:
> \`[ WHAT_I_WANT  for  ITEM  in  SEQUENCE ]\`

---

## 🔍 Filtering with an \`if\` Condition

You can also add filters at the end of the expression!
Example: getting only the even numbers from a list:

\`\`\`python
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

# Creates a list with only numbers where n % 2 == 0:
evens = [n for n in numbers if n % 2 == 0]
print(evens) # [2, 4, 6, 8, 10]
\`\`\`

---

## 🌟 Real-World Example: Formatting Usernames

\`\`\`python
raw_names = ["   ana ", "CARLOS   ", "   pEdRo"]

# Strips whitespace and capitalizes the first letter:
clean_names = [name.strip().capitalize() for name in raw_names]
print(clean_names)
# Output: ['Ana', 'Carlos', 'Pedro']
\`\`\`

You just saved dozens of lines of code using the peak of Python's elegance!
`,
};
