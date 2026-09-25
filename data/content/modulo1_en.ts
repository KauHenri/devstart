// Module 1: Programming Logic - Complete Didactic Content (English)

export const MODULO_1_CONTENT_EN: Record<string, string> = {
  'l1-1': `
# What is Programming? 🧠

Imagine that you want to teach someone how to bake a cake. You need to write a **recipe** — a list of steps in the exact right order. If you forget to include "grease the pan" before "pour the batter", the cake will stick. If you forget "turn on the oven", the cake won't bake.

**Programming is exactly that**: writing a recipe for the computer.

---

## 🖥️ What is a Computer Program?

A program is nothing more than an ordered set of **instructions** telling the computer what to do with specific information.

> 💡 **The Great Truth:**
> Computers are blazing fast and never get tired, but they are **completely literal**. They have no common sense, cannot guess your intentions, and take no initiative. If you tell it *"walk toward the wall"*, it will keep walking until it bumps its head against it, unless you explicitly told it *"stop when you are 10 cm from the wall"*.

---

## 🔍 How Does a Computer Think?

At the most basic hardware level, a computer only understands electrical signals:
* **On (1)**
* **Off (0)**

This is what we call **binary code**. It would be dreadful for us humans to write entire programs using only zeros and ones like \`01001000 01100101 01101100 01101100 01101111\`.

That is why **Programming Languages** were invented:
\`\`\`
Us (Humans) ➔ Write in Python (Readable) ➔ The Interpreter translates ➔ The Processor executes in Binary (0 and 1)
\`\`\`

---

## 🐍 Why is Python the Best Language to Start With?

Created by **Guido van Rossum** in 1991, Python was designed with one central goal: **to be as readable as plain English**.

Take a look at this example:
\`\`\`python
age = 18

if age >= 18:
    print("You are an adult!")
else:
    print("You are a minor.")
\`\`\`

Even someone who has never programmed before can glance at this and understand: *"If the age is greater than or equal to 18, print that you are an adult; otherwise, print that you are a minor."*

---

## 📌 The 3 Core Pillars of Any Program

Practically every piece of software on the planet — from a simple calculator to Instagram or the YouTube algorithm — consists of three basic stages:

1. **Input:** Data entering the program (e.g., what you type, a mouse click, a camera photo).
2. **Processing:** What the program does with that data (e.g., calculates a math equation, checks if a password matches, crops an image).
3. **Output:** The result delivered back to you (e.g., a message on the screen, sound from the speakers, saving a file).

---

## 🎯 Lesson Summary

* **Programming** = giving logical, ordered instructions for a computer to solve a problem.
* **Computers are literal** = the precision of your commands matters immensely.
* **Python** = the most intuitive, modern, and versatile language in today's tech world.

In the next lesson, we will learn about **Algorithms**: the technique that structures these instructions step by step! 🚀
`,

  'l1-2': `
# Algorithms: The Step-by-Step Solution 📋

Everyone executes dozens of algorithms every day without even realizing it.

When you wake up, you probably follow a routine:
1. Turn off the alarm
2. Get out of bed
3. Walk to the bathroom
4. Brush your teeth
5. Wash your face

If you try to brush your teeth before putting toothpaste on the brush, it won't work. The **order of steps** matters just as much as the steps themselves.

---

## 🧩 What Defines an Algorithm?

An **algorithm** is a **finite sequence of logical, well-defined steps** designed to solve a specific problem.

For an algorithm to be considered valid, it must possess 5 key characteristics:

1. **Finiteness:** It must have a guaranteed end. It can never run forever without a purpose.
2. **Clarity (Unambiguity):** Each instruction must have only one possible interpretation. *"Add a little sugar"* is not algorithmic, but *"Add 2 tablespoons of sugar"* is.
3. **Input:** What the algorithm needs to receive before it starts.
4. **Output:** The final result delivered.
5. **Effectiveness:** Each step must be simple enough to actually be executed in practice.

---

## 🧮 Real-World Example: Student Grade Average Algorithm

Imagine a school needs to know if a student passed based on two exam scores:

\`\`\`
Step 1: Receive Exam Grade 1.
Step 2: Receive Exam Grade 2.
Step 3: Add Grade 1 and Grade 2 together.
Step 4: Divide the sum by 2 to find the Average.
Step 5: If the Average is greater than or equal to 7:
          Display "Congratulations, you passed!"
        Else:
          Display "You need to take remedial classes."
Step 6: End of algorithm.
\`\`\`

Notice how every step is crystal clear and impossible to misunderstand!

---

## 🛠️ How to Develop Algorithmic Thinking?

When faced with a new programming problem, **never start typing code straight into the editor**. Follow this formula:

1. **Understand the end goal:** What does the client or user want to see on the screen?
2. **Identify the raw materials:** What data do I already have or need to ask for?
3. **Break the big problem into smaller pieces (Decomposition):** Solving 3 small problems is 10x easier than solving 1 gigantic problem all at once.
4. **Write it out in plain English first:** If you can't explain the solution using normal words, the computer definitely won't understand it in Python.
`,

  'l1-3': `
# Variables and Data Types: Storing Information 📦

When you play a video game, where are your current score, your character's remaining lives, and your player name stored?

In computer memory, inside **Variables**!

---

## 📦 The Labeled Boxes Metaphor

Think of a variable as an organizer storage box:
* The box has a **label with a name** (so you can find it easily).
* The box has **contents stored inside** (the value).
* The contents can **vary** (change over time) — which is why it is called a *variable*!

For example:
\`\`\`
[ username ] ➔ "Alice Smith"
[ bank_balance ] ➔ 1450.75
[ player_level ] ➔ 5
[ is_vip_active ] ➔ True
\`\`\`

---

## 🏷️ The 4 Fundamental Data Types

In programming, computers treat numbers, text, and logical values in completely different ways. The 4 basic types you will use every single day are:

| Python Type | Full Name | What it stores | Examples |
|---|---|---|---|
| **\`int\`** | Integer | Whole numbers (positive or negative) without decimals | \`10\`, \`0\`, \`-5\`, \`2026\` |
| **\`float\`** | Floating Point | Real numbers containing decimal points | \`3.14\`, \`99.90\`, \`-0.5\` |
| **\`str\`** | String (Character String) | Text, words, symbols, and sentences inside quotes | \`"Hello World"\`, \`'Python'\`, \`"123"\` |
| **\`bool\`** | Boolean | Only two states: True or False | \`True\`, \`False\` |

> ⚠️ **Crucial Warning About Decimals:**
> In programming, we always use a **dot (.)** and never a comma (,) to separate decimal places:
> * Correct: \`price = 19.99\`
> * Incorrect: \`price = 19,99\` (Python will think these are two separate numbers or a tuple!)

---

## 🚫 Rules for Naming Your Variables

To avoid confusing Python, there are rules you must follow:

1. **Cannot start with a number:**
   * ❌ \`1name = "Peter"\` (Syntax Error!)
   * ✅ \`name1 = "Peter"\` or \`first_name = "Peter"\`
2. **Cannot contain spaces:**
   * ❌ \`monthly salary = 3000\`
   * ✅ \`monthly_salary = 3000\` (use an underscore \`_\` to separate words — a naming convention known as *snake_case*)
3. **Case Sensitive:**
   * \`Age\`, \`age\`, and \`AGE\` are three completely different boxes to Python!
`,

  'l1-4': `
# Decision Structures: Teaching the Computer to Choose 🔀

Until now, our algorithms followed a straight path: do step 1, then step 2, then step 3.

But real life is full of forks in the road:
* **IF** it rains ➔ take an umbrella.
* **ELSE** ➔ wear sunglasses.

**Decision Structures** (or conditional statements) allow your program to take different paths depending on the situation.

---

## 🚦 The Logical Structure: IF, ELSE IF, and ELSE

In pure logic and pseudocode, decisions work like this:

\`\`\`
IF (condition is True):
    Execute action block A
ELSE IF (another condition is True):
    Execute action block B
ELSE:
    If nothing tested above was true, execute action C
\`\`\`

---

## ⚖️ Comparison Operators

How does the computer know whether something is true or false? It compares values using these symbols:

| Operator | Meaning | Example | Result |
|---|---|---|---|
| \`==\` | Equal to | \`5 == 5\` | True (\`True\`) |
| \`!=\` | Not equal to | \`5 != 3\` | True (\`True\`) |
| \`>\` | Greater than | \`10 > 2\` | True (\`True\`) |
| \`<\` | Less than | \`4 < 1\` | False (\`False\`) |
| \`>=\` | Greater than or equal to | \`18 >= 18\` | True (\`True\`) |
| \`<=\` | Less than or equal to | \`7 <= 10\` | True (\`True\`) |

> 🚨 **Golden Rule for Beginners:**
> * A single \`=\` means **STORE (assign)** a value into the box (\`score = 10\`).
> * Double equals \`==\` means **COMPARE** whether two values are equal (\`score == 10\`).

---

## 💡 Practical Example: Smart Traffic Light

\`\`\`python
traffic_light = "green"

if traffic_light == "green":
    print("Go ahead safely!")
elif traffic_light == "yellow":
    print("Caution! Slow down.")
elif traffic_light == "red":
    print("Come to a complete stop!")
else:
    print("Flashing or defective light. Proceed with extra caution.")
\`\`\`
`,

  'l1-5': `
# Repetition Structures: The Superpower of Automation 🔁

Human beings hate performing the exact same task 1,000 times in a row. We get bored, exhausted, and start making mistakes.

Computers were invented specifically for this: **they love repetition**! A computer can repeat a calculation 1 billion times per second without complaining and with 100% precision.

In programming, we call these structures **Loops**.

---

## 🔄 The Two Types of Repetition in Real Life

There are two main ways to tell someone to repeat something:

### 1. Condition-Based Repetition (WHILE / \`while\`)
You don't know exactly how many times it will happen, but you know the stopping condition:
> *"Eat soup **WHILE** there is still food in the bowl."*
> *"Stay in the elevator **WHILE** it hasn't reached the 10th floor."*

### 2. Count-Based Repetition (FOR EACH / \`for\`)
You know the exact number of iterations or the list of items to go through:
> *"Run **10 laps** around the track."*
> *"Send an email to **EACH customer** on our contact list."*

---

## ⚠️ The Programmer's Nightmare: The Infinite Loop!

Imagine you write the following algorithm:
\`\`\`
WHILE (phone battery is less than 100%):
    wait
\`\`\`
If the charger is unplugged from the wall outlet, the battery level will **never** rise. What happens? The program stays trapped forever waiting, hangs, and freezes the system.

This is called an **Infinite Loop**. Whenever you create a conditional loop, you must ensure that at some point the condition will cease to be true so the program can move forward!
`,

  'l1-6': `
# Flowcharts: Drawing Your Thoughts 📐

Before building a house, an architect draws blueprints. Before shooting a movie, the director puts together a storyboard with scene-by-scene drawings.

In programming, a **Flowchart** is the visual drawing of your algorithm. It allows you and your team to see all possible paths of the system before writing a single line of code.

---

## 🔷 Standard Flowchart Shapes

There is an international standard (ISO standard) for the geometric shapes used in software diagrams:

| Symbol | Name | Purpose |
|---|---|---|
| 🟡 **Oval / Circle** | **Terminator** | Indicates the **START** or **END** of the algorithm. |
| 🔲 **Rectangle** | **Process** | An internal action or calculation (e.g., \`sum = a + b\`). |
| 🔷 **Diamond / Rhombus** | **Decision** | A Yes/No question (e.g., \`age >= 18?\`). Two arrows branch out from it! |
| ▱ **Parallelogram** | **Input/Output** | User data input or display on screen. |
| ➔ **Flow Arrows** | **Flowline** | Connects the shapes, indicating the direction of execution. |

---

## 🗺️ Visualizing a Decision in a Flowchart

Imagine validating a login password:

\`\`\`text
   [ START ]
       │
       ▼
  / Enter Password /
       │
       ▼
    < Is Password "1234"? > ─── NO ───➔ [ Display "Wrong Password" ] ──➔ [ END ]
       │
      YES
       │
       ▼
  [ Display "Welcome!" ]
       │
       ▼
     [ END ]
\`\`\`

Seeing the problem in diagram format eliminates 90% of logical confusion before you even open your code editor.
`,

  'l1-7': `
# Pseudocode: Speaking the Language of Algorithms ✍️

**Pseudocode** is a way of writing programs using our own native human language, but structured with the same rigidity and logic as a computer language.

It is brilliant because **you don't have to worry about strict syntax or picky rules of a specific language** — it focuses 100% on your pure logical reasoning.

---

## 📝 Comparison: Natural Language vs. Pseudocode vs. Python

Notice the progression for the same problem: calculating a purchase discount.

### 1. Plain English (Natural Language):
> *"Take the purchase amount. If it's over one hundred dollars, apply a ten percent discount and display the final price with the discount applied."*

### 2. Pseudocode (Structured):
\`\`\`text
ALGORITHM CalculateDiscount
VARIABLES
    purchase_amount, discount, final_price : REAL
START
    WRITE("Enter purchase amount:")
    READ(purchase_amount)
    
    IF purchase_amount > 100 THEN
        discount 🡨 purchase_amount * 0.10
        final_price 🡨 purchase_amount - discount
        WRITE("10% discount applied!")
    ELSE
        final_price 🡨 purchase_amount
        WRITE("No discount for this amount.")
    END_IF
    
    WRITE("Total to pay: $", final_price)
END
\`\`\`

### 3. In Python (Real Code):
\`\`\`python
purchase_amount = float(input("Enter purchase amount: "))

if purchase_amount > 100:
    discount = purchase_amount * 0.10
    final_price = purchase_amount - discount
    print("10% discount applied!")
else:
    final_price = purchase_amount
    print("No discount for this amount.")

print(f"Total to pay: \${final_price:.2f}")
\`\`\`

Notice how anyone who has mastered step 2 can write the code in Python (or JavaScript, C++, Java) in minutes? The reasoning is identical!
`,

  'l1-8': `
# Logic Challenge: Think Like a Programmer 🏆

Congratulations on reaching the end of **Module 1**! You now have the most important conceptual foundation in computer science.

---

## 🧠 The Big Challenge: The Water Jugs Riddle

This is a classic logical reasoning puzzle famously used in real technical interviews at top tech companies (such as Google and Microsoft):

> **Scenario:**
> You are standing on the bank of a river with an endless supply of water, and you have only **two empty jugs**:
> * One jug holds exactly **5 liters**.
> * The other jug holds exactly **3 liters**.
> 
> The jugs have no measurement markings on them. How can you measure **exactly 4 liters** of water using only these two jugs?

---

### 💡 The Step-by-Step Algorithmic Solution:

Think of the algorithm as a sequence of water transfers:

1. **Fill the 5L jug completely** to the brim. (5L Jug = 5, 3L Jug = 0)
2. **Pour water from the 5L jug into the 3L jug** until the smaller jug is full.
   * *Result:* The 3L jug is full, and **exactly 2 liters** remain in the 5L jug!
3. **Completely empty the 3L jug** by pouring the water back into the river. (5L Jug = 2, 3L Jug = 0)
4. **Pour the 2 liters from the large jug into the 3L jug**.
   * *Result:* The 3L jug now holds 2 liters of water and has room for exactly 1 more liter! (5L Jug = 0, 3L Jug = 2)
5. **Fill the 5L jug completely again** from the river. (5L Jug = 5, 3L Jug = 2)
6. **Pour from the 5L jug into the 3L jug until it is full**.
   * Since the 3L jug only needed 1 more liter to be full, it will take 1L.
   * *Final Result:* **Exactly 4 LITERS remain in the 5L jug!** 🎯

---

## 🚀 You Completed Module 1!
Now you think like a programmer: you break down problems, understand variables, decisions, and loops.

In **Module 2**, we will put our hands on the keyboard and write our first real Python programs!
`,
};
