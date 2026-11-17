// 5.1 – Functions exercises

// Part A – Basics
function greetUser(name) {
  console.log(`Hello, ${name}!`);
}

function isEven(number) {
  return number % 2 === 0;
}

function maxOfThree(a, b, c) {
  return Math.max(a, b, c);
}

function formatStudent(name, group, gpa) {
  return `Student ${name} from ${group} has GPA ${gpa}`;
}

console.log("A1:");
greetUser("Aida");
greetUser("Nurlan");

console.log("\nA2:");
console.log(isEven(4)); // true
console.log(isEven(7)); // false

console.log("\nA3:");
console.log(maxOfThree(1, 5, 3)); // 5
console.log(maxOfThree(10, 2, 7)); // 10

console.log("\nA4:");
console.log(formatStudent("Aida", "SE-101", 3.8));

// Part B – Function expressions and arrow functions
const multiply = function (a, b) {
  return a * b;
};

const squareExpression = function (x) {
  return x * x;
};

const squareArrow = x => x * x;

const toUpper = str => str.toUpperCase();

console.log("\nB1–B3:");
console.log(multiply(3, 4)); // 12
console.log(squareExpression(5)); // 25
console.log(squareArrow(5)); // 25
console.log(toUpper("hello")); // HELLO

// Part C – Default and rest parameters
function calculatePrice(basePrice, taxRate = 0.12) {
  return basePrice + basePrice * taxRate;
}

function sumAll(...nums) {
  return nums.reduce((total, num) => total + num, 0);
}

function average(...nums) {
  if (nums.length === 0) return null;
  return sumAll(...nums) / nums.length;
}

console.log("\nC1–C3:");
console.log(calculatePrice(100)); // 112
console.log(calculatePrice(100, 0.2)); // 120
console.log(sumAll(1, 2, 3, 4, 5)); // 15
console.log(sumAll()); // 0
console.log(average(10, 20, 30)); // 20
console.log(average()); // null

// Part D – Callbacks and higher-order functions
function repeat(times, action) {
  for (let i = 0; i < times; i++) {
    action(i);
  }
}

function applyToArray(arr, fn) {
  const result = [];
  for (const element of arr) {
    result.push(fn(element));
  }
  return result;
}

function filterPassing(scores, isPassing) {
  const result = [];
  for (const score of scores) {
    if (isPassing(score)) result.push(score);
  }
  return result;
}

console.log("\nD1:");
repeat(3, i => console.log("Hello", i));

console.log("\nD2:");
console.log(applyToArray([1, 2, 3], x => x * 2)); // [2, 4, 6]

console.log("\nD3:");
const scores = [95, 40, 76, 88, 55];
console.log(filterPassing(scores, score => score >= 60)); // [95, 76, 88]

// Part E – Pure and impure functions
let total = 0;

function addToTotal(value) {
  total += value;
}

function addValues(a, b) {
  return a + b;
}

function double(x) {
  return x * 2;
}

function logDouble(x) {
  const result = double(x);
  console.log("Input is:", x);
  console.log("Output is:", result);
  return result;
}

console.log("\nE1–E2:");
console.log(addValues(4, 6)); // 10
addToTotal(5);
console.log("External total changed by impure function:", total);
logDouble(7);

// Part F – Closures and function factories
function makeMultiplier(n) {
  // The inner function remembers n because of the lexical closure.
  return function (x) {
    return x * n;
  };
}

function createCounter() {
  let count = 0;
  return function () {
    count++;
    console.log(count);
    return count;
  };
}

function createIdGenerator(prefix) {
  let current = 1;
  return function () {
    const id = `${prefix}-${current}`;
    current++;
    return id;
  };
}

console.log("\nF1:");
const doubleNumber = makeMultiplier(2);
const tripleNumber = makeMultiplier(3);
console.log(doubleNumber(5)); // 10
console.log(tripleNumber(5)); // 15

console.log("\nF2:");
const counterA = createCounter();
const counterB = createCounter();
counterA(); // 1
counterA(); // 2
counterB(); // 1

console.log("\nF3:");
const genStudentId = createIdGenerator("STU");
const genCourseId = createIdGenerator("CRS");
console.log(genStudentId()); // STU-1
console.log(genStudentId()); // STU-2
console.log(genCourseId()); // CRS-1
