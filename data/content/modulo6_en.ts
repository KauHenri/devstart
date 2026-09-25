// Module 6: Object-Oriented Programming - Complete Didactic Content (English)

export const MODULO_6_CONTENT_EN: Record<string, string> = {
  'l6-1': `
# Object-Oriented Programming (OOP) Paradigm: Classes and Objects 🏗️

Up to this point, our programs have been written following the **Procedural** paradigm: we had isolated data in variables and lists on one side, and functions on the other that received this data, operated on it, and returned results.

As software systems grow to thousands of lines of code, the purely procedural model becomes chaotic. It is easy for a function to alter a variable it shouldn't touch, leading to silent bugs.

**Object-Oriented Programming (OOP)** was created to mirror how humans perceive and organize the real world: through **Entities (Objects)** that bundle together in a single package both their **data** and the **behaviors** that manipulate that data.

---

## 🏭 Blueprint vs. Actual Construction (Class vs. Object)

The fundamental distinction that every professional developer must master:

| Concept | Definition | Real-World Example |
| :--- | :--- | :--- |
| **Class (\`class\`)** | The **blueprint**, abstract specification, or architectural plan. It defines what attributes and methods will exist. | The technical blueprint of a car designed by automotive engineers. |
| **Object / Instance** | The concrete item created in computer memory from that blueprint. | The actual car parked in your garage, with a specific license plate, mileage, and color. |

\`\`\`
   ┌─────────────────────────────────────────┐
   │             Class: BankAccount          │
   │  Attributes: holder, balance, branch    │
   │  Methods:    deposit(), withdraw()      │
   └────────────────────┬────────────────────┘
                        │ Instantiation
        ┌───────────────┴───────────────┐
        ▼                               ▼
 ┌──────────────┐                ┌──────────────┐
 │ Object #1    │                │ Object #2    │
 │ holder: Ana  │                │ holder: Bob  │
 │ balance: $500│                │ balance: $120│
 └──────────────┘                └──────────────┘
\`\`\`

---

## 🛠️ Creating Your First Class in Python

In Python, we define a class using the \`class\` keyword. By universal **PEP 8** convention, class names use **PascalCase** (capitalized words without underscores).

\`\`\`python
# Class Definition
class WebServer:
    """Represents a web server in cloud infrastructure."""
    pass  # Instruction for a temporary empty block

# Creating two independent instances (objects):
prod_server = WebServer()
staging_server = WebServer()

print(prod_server)    # <__main__.WebServer object at 0x...>
print(staging_server) # <__main__.WebServer object at 0x...> (Different memory address!)
\`\`\`
`,

  'l6-2': `
# Methods, Attributes, and Magic Methods (\`__init__\`, \`self\`) 📐

An object gains practical utility when it has **Instance Attributes** (its internal variables) and **Methods** (the functions that define its actions).

---

## 🏗️ The \`__init__\` Constructor and the \`self\` Parameter

When we call \`BankAccount("Carlos", 1000)\`, Python performs two steps:
1. Allocates space in memory for the new object.
2. Automatically invokes the special **\`__init__\`** method (*initializer*), passing the newly created object as the first argument: **\`self\`**.

\`\`\`python
class BankAccount:
    def __init__(self, holder, initial_balance=0.0):
        # self.attribute = passed_value
        self.holder = holder
        self.balance = initial_balance
        self.active = True

    # Instance method (object behavior)
    def deposit(self, amount):
        if amount <= 0:
            print("❌ Deposit amount must be greater than zero.")
            return False
        self.balance += amount
        print(f"✅ Deposit of \${amount:.2f} completed successfully.")
        return True

    def withdraw(self, amount):
        if amount > self.balance:
            print(f"❌ Insufficient funds! Current balance: \${self.balance:.2f}")
            return False
        self.balance -= amount
        print(f"💸 Withdrawal of \${amount:.2f} completed.")
        return True

# Testing the class:
carlos_account = BankAccount("Carlos Silva", 500.0)
carlos_account.deposit(250.0)
carlos_account.withdraw(100.0)
print(f"Final balance for {carlos_account.holder}: \${carlos_account.balance:.2f}")
\`\`\`

---

## 🪄 Magic Methods (*Dunder Methods*)

Methods with double underscores before and after (\`__dunder__\`) allow you to integrate your class with Python's built-in operators and functions:

| Magic Method | When is it triggered by Python? | Purpose |
| :--- | :--- | :--- |
| **\`__str__(self)\`** | \`print(object)\` or \`str(object)\` | Human-readable representation for end users. |
| **\`__repr__(self)\`** | In the interactive console or for debug logs. | Unambiguous technical representation of the object. |
| **\`__len__(self)\`** | \`len(object)\` | Returns the conceptual size/length of the object. |
| **\`__eq__(self, other)\`**| \`object1 == other\` | Defines when two objects are considered equal. |

\`\`\`python
class Book:
    def __init__(self, title, author, pages):
        self.title = title
        self.author = author
        self.pages = pages

    def __str__(self):
        return f"'{self.title}' by {self.author} ({self.pages} pages)"

    def __len__(self):
        return self.pages

    def __eq__(self, other):
        if not isinstance(other, Book):
            return False
        return self.title == other.title and self.author == other.author

my_book = Book("Grokking Algorithms", "Aditya Bhargava", 256)
print(my_book)              # 'Grokking Algorithms' by Aditya Bhargava (256 pages)
print("Pages:", len(my_book)) # 256
\`\`\`
`,

  'l6-3': `
# Professional Encapsulation: Private Attributes and \`@property\` 🛡️

Imagine a hospital system where a \`Patient\` object has a \`medication_dosage\` attribute. If any developer could execute \`patient.medication_dosage = -500\`, lives would be at risk.

**Encapsulation** is the pillar of OOP that hides internal implementation details and protects an object's state against inappropriate modifications, exposing only secure interfaces.

---

## 🔒 Protected (\`_\`) and Private (\`__\`) Attributes in Python

Unlike Java or C++, Python does not have keywords like \`private\`. The Python ecosystem adopts naming conventions established in PEP 8:

1. **\`_attribute\` (Single underscore):** Indicates a protected attribute. It means: *"This is intended for internal use within this class; please respect that and do not access it directly from outside"*.
2. **\`__attribute\` (Double underscore):** Triggers the **Name Mangling** feature. The interpreter internally renames the attribute to \`_ClassName__attribute\` to prevent naming collisions in inheritance.

\`\`\`python
class SafeVault:
    def __init__(self, initial_balance, secret_key):
        self._manager = "Manager"     # Protected by convention
        self.__secret_key = secret_key # Name Mangling activated

vault = SafeVault(10000, "1234-ABCD")
# print(vault.__secret_key) # 💥 AttributeError: 'SafeVault' object has no attribute '__secret_key'
\`\`\`

---

## ✨ The Pythonic Way: \`@property\` and \`@setter\`

In modern Python, we avoid archaic methods like \`get_balance()\` and \`set_balance()\`. We use the **\`@property\`** and **\`@name.setter\`** decorators, which maintain the clean dot-syntax for reading and writing while executing security validations behind the scenes:

\`\`\`python
class Employee:
    def __init__(self, name, salary):
        self.name = name
        self._salary = salary  # Internal protected attribute

    # GETTER (allows access via employee.salary)
    @property
    def salary(self):
        return self._salary

    # SETTER (executes when someone runs employee.salary = new_value)
    @salary.setter
    def salary(self, new_value):
        if new_value <= 0:
            raise ValueError("Salary cannot be zero or negative!")
        self._salary = new_value

# Elegant usage:
dev = Employee("Helena", 8500.0)
print(f"Current salary: \${dev.salary:.2f}")

dev.salary = 9200.0  # Triggers the setter with validation
print(f"New salary: \${dev.salary:.2f}")

# dev.salary = -100  # 💥 Raises ValueError, preventing data corruption!
\`\`\`
`,

  'l6-4': `
# Inheritance: Reusability and Specialization of Classes 🧬

When developing enterprise software, we frequently discover entities that share most of their attributes and behaviors, differing only in specific details.

**Inheritance** allows us to create a base class (**Superclass** or Parent Class) with generic elements, and extend it into derived classes (**Subclasses** or Child Classes) that automatically inherit everything and add their own specializations.

---

## 👨‍👦 Syntax and the \`super()\` Function

To inherit, we place the parent class name in parentheses in the child class definition. To initialize the parent class from the child class, we use **\`super().__init__()\`**:

\`\`\`python
# 1. BASE CLASS (SUPERCLASS)
class Employee:
    def __init__(self, name, employee_id, base_salary):
        self.name = name
        self.employee_id = employee_id
        self.base_salary = base_salary

    def calculate_monthly_compensation(self):
        """Standard calculation for regular employees."""
        return self.base_salary

    def display_badge(self):
        print(f"[{self.name}] - ID: {self.employee_id}")

# 2. SUBCLASS THAT INHERITS FROM EMPLOYEE
class Manager(Employee):
    def __init__(self, name, employee_id, base_salary, annual_bonus):
        # Calls the constructor of the Employee class
        super().__init__(name, employee_id, base_salary)
        self.annual_bonus = annual_bonus

    # Method overriding using super()
    def calculate_monthly_compensation(self):
        monthly_bonus = self.annual_bonus / 12
        return super().calculate_monthly_compensation() + monthly_bonus

# 3. DEVELOPER SUBCLASS
class Developer(Employee):
    def __init__(self, name, employee_id, base_salary, tech_stack):
        super().__init__(name, employee_id, base_salary)
        self.tech_stack = tech_stack

# Testing inheritance:
mgr = Manager("Mariana", "EMP-101", 12000.0, annual_bonus=36000.0)
dev = Developer("Lucas", "EMP-202", 8000.0, tech_stack="Python & FastAPI")

mgr.display_badge()  # Inherited from Employee!
dev.display_badge()  # Inherited from Employee!

print(f"Mariana's compensation: \${mgr.calculate_monthly_compensation():.2f}")
print(f"Lucas's compensation: \${dev.calculate_monthly_compensation():.2f}")
\`\`\`
`,

  'l6-5': `
# Polymorphism and Duck Typing 🎭

The term **Polymorphism** means "many forms". In object-oriented programming, it describes the ability of objects from different classes to respond to the same message (same method name), each producing its own specialized behavior.

---

## 🦆 The Duck Typing Principle in Python

Python adopts the famous adage:
> *"If it walks like a duck and quacks like a duck, then to us, it's a duck!"*

In languages like Java, it is mandatory to formally implement an \`interface\`. In Python, all that is required is that the method exists with the matching signature:

\`\`\`python
class PixPaymentMethod:
    def process_payment(self, amount):
        print(f"⚡ Generating Pix QR Code for instant payment of \${amount:.2f}")

class CreditCardPaymentMethod:
    def process_payment(self, amount):
        print(f"💳 Requesting card processor authorization for \${amount:.2f}")

class BankSlipPaymentMethod:
    def process_payment(self, amount):
        print(f"📄 Issuing bank slip with barcode for the amount of \${amount:.2f}")

# Polymorphic function: it doesn't care what class the object belongs to,
# it only requires that it can execute .process_payment(amount)!
def complete_purchase(payment_method, order_total):
    print("Starting customer checkout...")
    payment_method.process_payment(order_total)
    print("Checkout completed successfully!\n")

# Testing with three distinct objects:
pix = PixPaymentMethod()
card = CreditCardPaymentMethod()
slip = BankSlipPaymentMethod()

complete_purchase(pix, 150.00)
complete_purchase(card, 320.00)
complete_purchase(slip, 89.90)
\`\`\`
`,

  'l6-6': `
# Practical Challenge: Complete Banking System in OOP 🏆

To consolidate all 4 pillars of Object-Oriented Programming (Abstraction, Encapsulation, Inheritance, and Polymorphism), you will architect a professional mini-banking system.

---

## 📋 System Architecture

1. **\`Account\` (Base / Generic Class):**
   - Attributes: \`account_number\`, \`holder\`, \`_balance\`.
   - Property: Protected \`balance\` with getter.
   - Methods: \`deposit(amount)\`, \`withdraw(amount)\`, \`display_statement()\`.
2. **\`CheckingAccount\` (Subclass):**
   - Has extra attribute: \`overdraft_limit\`.
   - Overrides the \`withdraw()\` method to allow withdrawals up to the overdraft limit.
3. **\`SavingsAccount\` (Subclass):**
   - Has extra attribute: \`interest_rate\`.
   - Exclusive method: \`apply_interest()\`.

---

## 💻 Project Implementation

\`\`\`python
class Account:
    def __init__(self, number, holder, initial_balance=0.0):
        self.number = number
        self.holder = holder
        self._balance = initial_balance
        self._history = [f"Account opened with initial balance of \${initial_balance:.2f}"]

    @property
    def balance(self):
        return self._balance

    def deposit(self, amount):
        if amount <= 0:
            print("❌ Invalid deposit: amount must be positive.")
            return False
        self._balance += amount
        self._history.append(f"Deposit of +\${amount:.2f}")
        return True

    def withdraw(self, amount):
        if amount <= 0:
            print("❌ Invalid withdrawal: amount must be positive.")
            return False
        if amount > self._balance:
            print(f"❌ Insufficient balance in {self.holder}'s account!")
            return False
        self._balance -= amount
        self._history.append(f"Withdrawal of -\${amount:.2f}")
        return True

    def display_statement(self):
        print(f"\\n===== ACCOUNT STATEMENT #{self.number} ({self.holder}) =====")
        for operation in self._history:
            print(f"  • {operation}")
        print(f"Consolidated Balance: \${self.balance:.2f}")
        print("=" * 45)


class CheckingAccount(Account):
    def __init__(self, number, holder, initial_balance=0.0, overdraft_limit=500.0):
        super().__init__(number, holder, initial_balance)
        self.overdraft_limit = overdraft_limit

    # Polymorphism: overriding with overdraft limit logic
    def withdraw(self, amount):
        if amount <= 0:
            return False
        total_available_limit = self._balance + self.overdraft_limit
        if amount > total_available_limit:
            print(f"❌ Total limit exceeded (Balance + Overdraft Limit = \${total_available_limit:.2f})!")
            return False
        self._balance -= amount
        self._history.append(f"Overdraft withdrawal of -\${amount:.2f}")
        return True


class SavingsAccount(Account):
    def __init__(self, number, holder, initial_balance=0.0, interest_rate=0.005):
        super().__init__(number, holder, initial_balance)
        self.interest_rate = interest_rate

    def apply_interest(self):
        interest = self._balance * self.interest_rate
        self._balance += interest
        self._history.append(f"Savings Interest: +\${interest:.2f}")


# --- BANKING SYSTEM TEST ---
ca = CheckingAccount(101, "Danilo Ferreira", initial_balance=100.0, overdraft_limit=400.0)
sa = SavingsAccount(102, "Beatriz Souza", initial_balance=2000.0)

# Operations on Checking Account using overdraft:
ca.withdraw(350.0)  # Uses $100 of balance and $250 of overdraft limit
ca.deposit(500.0)
ca.display_statement()

# Operations on Savings Account:
sa.apply_interest()
sa.withdraw(200.0)
sa.display_statement()
\`\`\`
`,
};
