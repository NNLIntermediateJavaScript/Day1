/*
 * FileName:  Complete/01DeclarationsExpressions.js
 * Topics: 
 *      What are Functions Really?
 *      Function Declarations vs Expressions
 *      Hoisting function Declarations / Expressions
 */
console.log("FileName:  Complete/01DeclarationsExpressions.js");

/* 
 * Topic:  What are Functions Really?
 */
console.log("");
console.log("****************************************************************");
console.log("Topic:  What are Functions Really?");
console.log("****************************************************************");

// functions are a subtype of Object
// Note:  functions are first class citizens in JavaScript
//          They inherit from Object prototype
function firstClass() { return "First Class!"; }

// Note:  typeof is function, but underneath it really is an Object
console.log("typeof firstClass is " + typeof firstClass);
console.log("firstClass.prototype is " + firstClass.prototype);

// Note:  Calling firstClass() and assigning return value to firstClass1
let firstClass1 = firstClass();
console.log("firstClass1 is " + firstClass1);

// Note:  Assigning function to variable, not calling function and assigning return value
//          function can be passed as a parameter to a function and / or returned from functions
let firstClass2 = firstClass;
console.log("firstClass2 is " + firstClass2);
console.log("firstClass2() is " + firstClass2());

// Note:  functions have Properties and Methods
console.log("firstClass.call() is " + firstClass.call());


/* 
 * Topic:  Function Declarations vs Expressions
 */
console.log("");
console.log("****************************************************************");
console.log("Topic:  Function Declarations vs Expressions");
console.log("****************************************************************");

function functionDeclaration() { console.log("functionDeclaration() called"); }
var functionExpression = function() { console.log("function() called"); };

functionDeclaration();
functionExpression();


/* 
 * Topic:  Hoisting function Declarations / Expressions
 */
console.log("");
console.log("****************************************************************");
console.log("Topic:  Hoisting function Declarations / Expressions");
console.log("****************************************************************");

// Note: Function declarations are hoisted (code and all) to top of their scope
function functionDeclarationHoisting() {
    function functionDeclaration2() { return "Top"; }
    return functionDeclaration2();
    function functionDeclaration2() { return "Bottom"; }
}
console.log(functionDeclarationHoisting());			                // Bottom

// gets hoisted to
function functionDeclarationHoisted() {
    function functionDeclaration2() { return "Top"; }
    function functionDeclaration2() { return "Bottom"; }
    return functionDeclaration2();
}
console.log(functionDeclarationHoisted());			                // Bottom

// Function expressions, only the variable declaration is hoisted
function functionExpressionHoisting() {
    var functionExpression2 = function() { return "Top"; }
    return functionExpression2();
    var functionExpression2 = function() { return "Bottom"; }
}
console.log(functionExpressionHoisting());			                // 1

// gets hoisted to
function functionExpressionHoisted() {
    var functionExpression2;
    var functionExpression2;

    functionExpression2 = function() { return "Top"; }
    return functionExpression2();
    functionExpression2 = function() { return "Bottom"; }                       // Unreachable
}
console.log(functionExpressionHoisted());			                // 1
