import createUser from "./user.js";

const users = [
  createUser("Aida", "student"),
  createUser("Nurlan", "teacher"),
  createUser("Alan", "admin")
];

console.log("B2 – Users:");
users.forEach(user => console.log(user));
