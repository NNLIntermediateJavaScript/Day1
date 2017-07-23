/*
 * FileName:  Complete/03ES6ArrowFunctions.js
 * Topics: 
 *      ES6 Arrow Functions
 */
console.log("FileName:  Complete/03ES6ArrowFunctions.js");

/* 
 * Topic:  ES6 Arrow Functions
 */
console.log("");
console.log("****************************************************************");
console.log("Topic:  ES6 Arrow Functions");
console.log("****************************************************************");

// Traditional function syntax
let noArrowSum = function(param1, param2) { return param1 + param2; }

// IE11:  Not Supported
console.log("IE11:  ES6 Arrow Functions Not Supported");

// Equivalent arrow function syntax
//let es6ArrowSum = (param1, param2) => param1 + param2;
//
//console.log(noArrowSum(1, 2));                                                  // 3
//console.log(es6ArrowSum(1, 2));                                                 // 3
//
//
//// Basic syntaxes
//// Note: Only 1 parameter means parathesis not required
//let arrow1 = param1 => param1 + 10;
//console.log(arrow1(5));                                                         // 15
//
//// Note: No parameters require empty parathesis
//let arrow2 = () => "arrow";
//console.log(arrow2());                                                          // arrow
//
//// Note: Multiple parameters also require parathesis
//let arrow3 = (param1, param2, param3) => Math.max(param1, param2, param3);
//console.log(arrow3(1, 2, 3));                                                   // 3
//
//// Note: And of course 1 parameter could have parathesis
//let arrow4 = (param1) => param1 + 10;
//console.log(arrow4(5));                                                         // 15
//
//// Note: No arguments collection and no duplicate named parameters
////let arrow5 = (param1) => arguments[0];                                          // Uncaught ReferenceError: arguments is not defined
////let arrow5 = (param1, pararm1) = param1;                                        // Uncaught ReferenceError: Invalid left-hand side in assignment
////console.log(arrow5(5));
//
//// Note: More complex function bodies use {} curly braces
//let arrow6 = () => {};
//console.log(arrow6());                                                          // undefined
//
//let arrow7 = (param1, param2) => {
//    if (param1 > param2) return true;
//    else return false;
//}
//console.log(arrow7(2, 1));                                                      // true
