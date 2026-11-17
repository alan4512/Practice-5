import { Person, Student, Teacher } from "./index.js";

const people = [
  new Person("John", 40),
  new Student("Aida", 18, "SE-101"),
  new Teacher("Nurlan", 35, "JavaScript")
];

console.log("B5 – School models:");
people.forEach(person => person.introduce());
