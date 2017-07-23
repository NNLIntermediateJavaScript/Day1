/* 
 * FileName: Complete/03ConditionsLoops.js
 * Topics:
 *         if Statements
 *         switch Statements
 *         Ternary Operator
 *         for Loops
 *         do / while Loops
 *         ES6 for of Loops
 */
console.log("FileName:  Complete/03ConditionsLoops.js");

/* 
 * Topic:  if Statements
 */
console.log("");
console.log("****************************************************************");
console.log("if Statements");
console.log("****************************************************************");

// Note: truthy = non-empty string, valid number, true boolean, arrays, objects, functions
// Note: falsy = empty string, invalid number (0, -0, NaN), false boolean, no value (null, undefined)
let truthyFalsy = "something";
//let truthyFalsy = "";
//let truthyFalsy = 1;
//let truthyFalsy = 0;
if (truthyFalsy) { console.log ( "Truthy" );  }
else { console.log ( "Falsy" ); }

// Note:  Some style guides want you to always use braces, even with one statment

/* 
 * Topic:  switch Statements
 */
console.log("");
console.log("****************************************************************");
console.log("switch Statements");
console.log("****************************************************************");

// Note:  Without break statements, you get fall thru
let dice = Math.floor(Math.random() * 6) + 1;
console.log("dice is " + dice);
switch (dice) {
    case 1:
        console.log("You rolled a one");
        break;
    case 2:
        console.log("You rolled a two");
        break;
    case 3:
        console.log("You rolled a three");
        break;
    default:
        console.log("You rolled a four, five, or six...");
}

/* 
 * Topic:  Ternary Operator
 */
console.log("");
console.log("****************************************************************");
console.log("Ternary Operator");
console.log("****************************************************************");

let coin = Math.floor(Math.random() * 2);
console.log("coin is " + coin);
console.log("You flipped " + ((coin) ? "heads" : "tails"));

// similar to:
if (coin) console.log("You flipped heads");
else console.log("You flipped tails");


/* 
 * Topic:  for Loops
 */
console.log("");
console.log("****************************************************************");
console.log("for Loops");
console.log("****************************************************************");

// Note:  Made up of 3 clauses; initialization, conditional, and update
for (var i = 0; i < 3; i++) { console.log("i is " + i); }                       // 0 1 2

for (let j = 0; j < 3; j++) { console.log("j is " + j); }                       // 0 1 2
console.log("i is " + i);                                                       // 3
// console.log("j is " + j);                                                       // Uncaught ReferenceError: j is not defined


/* 
 * Topic:  do / while Loops
 */
console.log("");
console.log("****************************************************************");
console.log("do / while Loops");
console.log("****************************************************************");

let k = 0;
while (k < 3) {                                                                 // 0 1 2
    console.log("k is " + k); 
    k++;
}

let l = 0;
do {                                                                            // 0 1 2
    console.log("l is " + l); 
    l++;
} while (l < 3);


/* 
 * Topic:  ES6 for of Loops
 */
console.log("");
console.log("****************************************************************");
console.log("ES6 for of Loops");
console.log("****************************************************************");

// IE11:  Not Supported
console.log("IE11:  for of loop Not Supported");
//let iterable = [10, 20, 30];
//for (let value of iterable) {
//  console.log(value);
//}
//
//// Note:  const is fine too, but can't change value
//for (const value of iterable) {
//  console.log(value);
//}
//
//// Note:  strings are iterable
//let string = "Value";
//for (let value of string) {
//  console.log(value);
//}
