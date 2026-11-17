// 5.2 – OOP practice exercises

// A1 – Object literal converted to a class
class StudentBasic {
  constructor(firstName, lastName, group) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.group = group;
  }

  greet() {
    console.log(`Hi, I'm ${this.firstName} from ${this.group}`);
  }
}

console.log("A1:");
const studentA = new StudentBasic("Aida", "Uulu", "SE-101");
const studentB = new StudentBasic("Nurlan", "Asanov", "SE-102");
studentA.greet();
studentB.greet();

// A2 – Constructor function converted to a class
class Course {
  constructor(title, hours) {
    this.title = title;
    this.hours = hours;
  }

  describe() {
    console.log(`${this.title} – ${this.hours} hours`);
  }

  isLong() {
    return this.hours >= 60;
  }
}

console.log("\nA2:");
const course = new Course("JavaScript", 80);
course.describe();
console.log(course.isLong()); // true

// A3 – Encapsulation with a private field
class BankAccount {
  #balance = 0;

  constructor(owner) {
    this.owner = owner;
  }

  deposit(amount) {
    if (amount > 0) {
      this.#balance += amount;
      return true;
    }
    return false;
  }

  withdraw(amount) {
    if (amount <= 0) return false;
    if (amount > this.#balance) {
      console.log("Withdrawal denied: insufficient balance.");
      return false;
    }
    this.#balance -= amount;
    return true;
  }

  getBalance() {
    return this.#balance;
  }
}

console.log("\nA3:");
const account = new BankAccount("Nurlan");
account.deposit(100);
account.withdraw(30);
console.log(account.getBalance()); // 70
account.withdraw(100); // Bonus: logs insufficient balance.

// A4 – Inheritance
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  introduce() {
    console.log(`Hi, I'm ${this.name}, ${this.age} years old.`);
  }
}

class Student extends Person {
  constructor(name, age, group) {
    super(name, age);
    this.group = group;
  }

  introduce() {
    console.log(`Hi, I'm ${this.name}, I study in group ${this.group}.`);
  }
}

class Teacher extends Person {
  constructor(name, age, subject) {
    super(name, age);
    this.subject = subject;
  }

  introduce() {
    console.log(`Hi, I'm ${this.name}, I teach ${this.subject}.`);
  }
}

console.log("\nA4:");
new Student("Aida", 18, "SE-101").introduce();
new Teacher("Nurlan", 35, "JavaScript").introduce();

// A5 – Polymorphism
class Shape {
  area() {
    throw new Error("Not implemented");
  }
}

class Rectangle extends Shape {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
  }

  area() {
    return this.width * this.height;
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  area() {
    return Math.PI * this.radius ** 2;
  }
}

console.log("\nA5:");
const shapes = [new Rectangle(3, 4), new Circle(2), new Rectangle(5, 6)];
for (const shape of shapes) {
  console.log(shape.area());
}

// A6 – Todo list domain model
class TodoItem {
  constructor(title) {
    this.title = title;
    this.completed = false;
  }

  toggle() {
    this.completed = !this.completed;
  }
}

class TodoList {
  constructor(name) {
    this.name = name;
    this.items = [];
  }

  addItem(title) {
    const item = new TodoItem(title);
    this.items.push(item);
    return item;
  }

  getCompleted() {
    return this.items.filter(item => item.completed);
  }

  getPending() {
    return this.items.filter(item => !item.completed);
  }

  removeCompleted() {
    this.items = this.items.filter(item => !item.completed);
  }
}

console.log("\nA6:");
const todoList = new TodoList("College Tasks");
const task1 = todoList.addItem("Learn JavaScript");
todoList.addItem("Practice OOP");
todoList.addItem("Complete homework");
task1.toggle();
console.log("Completed:", todoList.getCompleted());
console.log("Pending:", todoList.getPending());
todoList.removeCompleted();
console.log("After removing completed:", todoList.items);
