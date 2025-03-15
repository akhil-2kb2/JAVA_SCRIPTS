// for (let i = 0; i < 5; i++) {
//     console.log("Hi AK");
// }
// console.log("Bye AK\nLoop has ended");

// // n number sum
// let sum =0;
// for (let i = 0; i <= 100; i++) {
//     sum += i;
// }
// console.log(sum);
//console.log(i); // i is not defined because i is declared with let keyword
//but if we use var keyword then i will be defined and will be accessible outside the loop
//why?  because var is function scoped and let is block scoped

// let j=1;
// while (j <= 10) {
//     console.log("Hi AK");
//     j++;
// }



// // for-of loop
// /**
//  * A string representing a name in uppercase with an underscore separating first and last names.
//  * 
//  * @type {string}
//  */
// let str = "AKHILESH_YADAV";
// let length = 0;

// /**
//  * Iterates over each character in the string `str` and logs it to the console.
//  * The `for...of` loop is used to iterate over the iterable object `str`.
//  */
// for (let i of str) {
//     console.log("i= ",i);
//     length++;
// }
// console.log("Length of the string is: ", length);


// // // for-in loop
// let obj = {
//     name: "AK",
//     age: 22,
//     city: "Delhi"
    
// };
// for (let key in obj) {
//     console.log(key, obj[key]);
// }

// //Prints all even numbers between 1 to 100
// for (let i = 1; i <= 100; i++) {
//     if (i % 2 === 0) {
//         console.log(i);
//     }
// }
// //for ood numbers
// for (let i = 1; i <= 100; i++) {
//     if (i % 2 !== 0) {
//         console.log(i);
//     }
// }

// guess the number