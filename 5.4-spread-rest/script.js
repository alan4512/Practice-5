// 5.4 – Spread & Rest Operators

// C1 – Spread with arrays
const frontEnd = ["HTML", "CSS", "JavaScript"];
const backEnd = ["Node.js", "Express"];
const fullStack = [...frontEnd, ...backEnd];
const withReact = ["React", ...frontEnd];

console.log("C1:", fullStack, withReact);

// C2 – Spread with objects
const baseUser = { name: "Aida", role: "student" };
const extra = { group: "SE-101", active: true };
const userProfile = { ...baseUser, ...extra };
const promotedUser = { ...userProfile, role: "class_rep" };

console.log("C2:", userProfile, promotedUser);

// C3 – Rest parameters: sum and average
function sum(...nums) {
  return nums.reduce((total, number) => total + number, 0);
}

function average(...nums) {
  if (nums.length === 0) return NaN;
  return sum(...nums) / nums.length;
}

console.log("C3:", sum(1, 2, 3)); // 6
console.log(average(10, 20, 30, 40)); // 25

// C4 – Rest in array destructuring
const marks = [98, 87, 76, 65, 54];
const [top1, top2, ...others] = marks;
console.log(`C4: Top students: ${top1}, ${top2}. Others: ${JSON.stringify(others)}.`);

// C5 – Rest in object destructuring
const course = {
  code: "SE101",
  title: "Intro to Software Engineering",
  credits: 6,
  semester: "Fall",
  instructor: "Nurlan Shaidullaev"
};

const { code, title, ...details } = course;
console.log("C5:", code, title, details);

// C6 – Immutable object update
const student = { id: 1, name: "Aida", group: "SE-101", gpa: 3.8 };
const updatedStudent = { ...student, gpa: 3.9 };

console.log("C6:", student, updatedStudent);

// C7 – Immutable array updates
const groups = ["SE-101", "SE-102"];
const groupsWithEnd = [...groups, "SE-103"];
const groupsWithStart = ["SE-001", ...groups];

console.log("C7:", groups, groupsWithEnd, groupsWithStart);

// C8 – Combine Rest & Spread
function maxScore(first, ...rest) {
  if (first === undefined) return null;
  return Math.max(first, ...rest);
}

console.log("C8:", maxScore(85, 90, 75, 100, 88)); // 100
console.log(maxScore()); // null
