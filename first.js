// let Name = "Akhilesh"; // String
// //let Name = "Akhilesh"; //  Error: Identifier 'Name' has already been declared
// const age = 25; // const variable can't be re-declared or updated without a value
//age = 26; // Error: Assignment to constant variable/
// var isLearning = true; // Boolean
// var isLearning = false; //var can be re-declared and updated

// console.log(Name, age, isLearning);

// console.log(typeof "Hello"); // String
// let num = BigInt("42");
// console.log(typeof BigInt("42")); // BigInt
// console.log(typeof true); // Boolean
// console.log(typeof undefined); // Undefined
// console.log(typeof null); // Object (special case)
// console.log(typeof { name: "Akhilesh" }); // Object
// console.log(typeof Symbol("id")); // Symbol


// const student = {
//     fullName : "Akhilesh Yadav",
//     age : 25,
//     isLearning : true,
//     CGPA : 8.5,
// };
// console.log(student.fullName);
// console.log(student ["age"]);
// student["age"] = student["age"] + 1;
// console.log(student.age);
// console.log(student.isLearning);
// console.log(student["CGPA"]);

// const product = {
//     title : "Ball Pen",
//     rating : 4.5,
//     price : 270,
//     offer : 5,
// };
// console.log(product);
// const profile = {
//     username : "@ak2kb2Akhilesh",
//     isFollow : true,
//     followers : 1000,
//     following : 500,
//     posts : 100,
//     comments : 500,
//     likes : 10000,
//     bio : "I am a web developer",
// };
//     console.log(profile);

// let a = 10, b = 3;
// console.log("Addition:", a + b); // Addition: 13 
// console.log("Subtraction:", a - b);//   Subtraction: 7 
// console.log("Multiplication:", a * b);// Multiplication: 30 
// console.log("Division:", a / b);// Division: 3.3333333333333335 
// console.log("Modulus:", a % b);// Modulus: 1 
// console.log("Exponentiation:", a ** b);// Exponentiation: 1000 a^b

// // Assignment Operators
// let x = 10;
// x += 5;  // x = x + 5 
// console.log("Updated x:", x);  // Output: 15

// Comparison Operators
// console.log(10 == "10");   // true (only compares values)
// console.log(10 === "10");  // false (compares values + types)
// console.log(10 !== "10");  // true

// // Logical Operators

// let a = 10, b = 5;
// console.log(a > 5 && b < 10); // true (both are true)
// console.log(a > 15 || b < 10); // true (one is true)
// console.log(!(a > 5)); // false (negation)

// // increment and decrement operators
// let num = 5;
// console.log(num++); // Output: 5 (Post-increment, returns old value)
// console.log(num);   // Output: 6 (Updated value)
// console.log(++num); // Output: 7 (Pre-increment, returns new value)

// conditional Statements
let age = 25;
if (age >= 18) {
    console.log("You are eligible to vote");
}
else {
    console.log("You are not eligible to vote");
}

let mode = "dark";
    mode = "light";
let color;
if (mode === "dark") {
    color = "black";
}
else {
    color = "white";
}
console.log(color);

// odd or even
let num = 8;
if (num % 2 === 0) {
    console.log(num, "Even");
}
else {
    console.log(num, "Odd");
}

// ternary operator
let Age = 25;
let message = Age >= 18 ? "Adult" : "Child";
console.log(message);

// switch case
let day = "Wednesday";
switch (day) {
    case "Monday":
        console.log("Today is Monday");
        break;
    case "Tuesday":
        console.log("Today is Tuesday");
        break;
    case "Wednesday":
        console.log("Today is Wednesday");
        break;
    default:
        console.log("Invalid day");
}   

// Get User to input number using prompt ("Enter a number") Check if the number is divisible by 3 or not
let Num = prompt("Enter a number");
if (Num % 3 === 0) {
    console.log(Num, "is divisible by 3");
}
else {
    console.log(Num, "is not divisible by 3");
}

// Write a code give grades to student according to their score
let marks = prompt("Enter your marks (0-100)");
marks = parseInt(marks);
let grade;
if(marks >100 || marks < 0){
    grade = "Invalid marks";
}
else if (marks >= 90 && marks <= 100) {
    grade = "A+";
}
else if (marks >= 80 && marks < 90) {
    grade = "A";
}
else if (marks >= 70 && marks < 80) {
    grade = "B";
}
else if (marks >= 60 && marks < 70) {
    grade = "C";
}
else {
    grade = "F";
}
console.log("Grade:", grade);