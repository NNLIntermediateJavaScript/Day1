/* 
 * FileName: Complete/02DeclaringVariables.js
 * Topics:
 *      Declaring Variables
 *      Scope
 *      Hoisting
 *      ES6 Block Scope with let Declaration
 */
console.log("FileName:  Complete/02DeclaringVariables.js");

/* 
 * Topic:  Declaring Variables
 */
console.log("");
console.log("****************************************************************");
console.log("Topic:  Declaring Variables");
console.log("****************************************************************");

var globalVar1;
var globalVar2 = "globalVar", globalVar3 = 13;

console.log("globalVar1 is " + globalVar1);                                     // undefined
console.log("globalVar2 is " + globalVar2);                                     // globalVar
console.log("globalVar3 is " + globalVar3);                                     // 13


/* 
 * Topic:  Scope
 */
console.log("");
console.log("****************************************************************");
console.log("Topic:  Scope");
console.log("****************************************************************");

function globalFunction() {
    console.log("globalVar1 is " + globalVar1);                                 // undefined
    console.log("globalVar2 is " + globalVar1);                                 // globalVar
    console.log("globalVar3 is " + globalVar1);                                 // 13
 
    var localVar1 = "localVar";
    console.log("localVar1 is " + localVar1);                                   // localVar
    
    mysteryVar = "mysteryVar";
    console.log("mysteryVar is " + mysteryVar);                                 // mysteryVar
}

globalFunction();
//console.log("localVar1 is " + localVar1);                                       // Uncaught ReferenceError: localVar1 is not defined
console.log("mysteryVar is " + mysteryVar);                                     // mysteryVar

// In a web browser, global variables stored in window object
// Not necessarily true in other JavaScript environments such as Node.js
console.log("window.mysteryVar is " + window.mysteryVar);                       // mysteryVar


/* 
 * Topic:  Hoisting
 */
console.log("");
console.log("****************************************************************");
console.log("Topic:  Hoisting");
console.log("****************************************************************");

function variableHoisting() {
    if (true) {
        var localVar1 = 1;
    } else {
        localVar1 = 2;
    }
    return localVar1;
}
console.log("variableHoisting() is " + variableHoisting());

// gets hoisted to
function variableHoisted() {
    var localVar1;
    if (true) {
        localVar1 = 1;
    } else {
        localVar1 = 2;
    }
    return localVar1;
}
console.log("variableHoisted() is " + variableHoisted());	


/* 
 * Topic:  ES6 Block Scope with let Declaration
 */
console.log("");
console.log("****************************************************************");
console.log("Topic:  ES6 Block Scope with let Declaration");
console.log("****************************************************************");

// Note: Block Level
if (false) {
    let letGlobalVar1 = 1;
}
// console.log(letGlobalVar1);                                                     // Uncaught ReferenceError: letGlobalVar1 is not defined

// Note: No Hoisting
function es6BlockScopeNoHoisting() {
    if (true) {
        let localVar1 = 1;
    } else {
        localVar1 = 2;
    }
//    return localVar1;                                                           // Uncaught ReferenceError: localVar1 is not defined
}
es6BlockScopeNoHoisting();

// Note: No Redeclaration
function es6BlockScopeNoRedeclaration() {
    var localVar1 = 1;
    var localVar1 = 2;
//    let localVar1 = 3;                                                          // Uncaught SyntaxError: Identifier 'localVar1' has already been declared
}
es6BlockScopeNoRedeclaration();

// Note: Temperal Dead Zone
function es6BlockScopeTemperalDeadZone() {
    console.log(typeof localVar1);                                              // undefined
//    console.log(typeof localVar2);                                              // Uncaught ReferenceError: localVar2 is not defined

    let localVar2 = 1;
}
es6BlockScopeTemperalDeadZone();

// const - block level read-only declaration
function es6BlockScopeConstants() {
//    const const1;                                                               // Uncaught SyntaxError: Missing initializer in const declaration
    const const2 = 2;
//    const2 = 3;                                                                 // Uncaught TypeError: Assignment to constant variable.
}
es6BlockScopeConstants();