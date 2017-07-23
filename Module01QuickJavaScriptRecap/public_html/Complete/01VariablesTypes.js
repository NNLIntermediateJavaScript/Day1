/*
 * FileName:  Complete/01VariablesTypes.js
 * Topics: 
 *      JavaScript Data Types
 *      Dynamic Typing
 *      Coercion
 */
console.log("FileName:  Complete/01VariablesTypes.js");


/* 
 * Topic:  JavaScript Data Types
 */
console.log("");
console.log("****************************************************************");
console.log("Topic:  JavaScript Data Types");
console.log("****************************************************************");

console.log("typeof true is " + typeof true);                                   // boolean
console.log("typeof false is " + typeof false);                                 // boolean
console.log("typeof 13 is " + typeof 13);                                       // number
console.log("typeof 'string' is " + typeof "string");                           // string
console.log("typeof { prop: 'value' } is " + typeof { prop: "value" } );        // object
console.log("typeof null is " + typeof null);                                   // object (bug in typeof, should return null)
console.log("typeof undefined is " + typeof undefined);                         // undefined
console.log("typeof NaN is " + typeof NaN);                                     // number

// IE11:  Not Supported
console.log("IE11:  Symbol() Not Supported");
//console.log("typeof Symbol() is " + typeof Symbol());                           // symbol (new to ES6, not supported in IE11)


/* 
 * Topic:  Dynamic Typing
 */
console.log("");
console.log("****************************************************************");
console.log("Topic:  Dynamic Typing");
console.log("****************************************************************");

// undefined (reminder, if code has run then a is a global and will be defined)
var a;
console.log("var a;");
console.log("a is " + a);
console.log("typeof a is " + typeof a);

console.log("");
function sayHello() { console.log("function sayHello() {}"); }
a = sayHello();
console.log("a = sayHello();");
console.log("a is " + a);
console.log("typeof a is " + typeof a);

// boolean
console.log("");
a = 10 > 5;
console.log("a = 10 > 5;");
console.log("a is " + a);
console.log("typeof a is " + typeof a);

// number
console.log("");
a = 10 / 5;
console.log("a = 10 / 5;");
console.log("a is " + a);
console.log("typeof a is " + typeof a);

// number (NaN)
console.log("");
a = Math.sqrt(-1);
console.log("a = Math.sqrt(-1);");
console.log("a is " + a);
console.log("typeof a is " + typeof a);

// number (NaN)
console.log("");
a = parseInt("blah");
console.log("a = parseInt('blah');");
console.log("a is " + a);
console.log("typeof a is " + typeof a);

// string
console.log("");
a = "value";
console.log("a = 'value'");
console.log("a is " + a);
console.log("typeof a is " + typeof a);

// object
console.log("");
a = window;
console.log("a = window;");
console.log("a is " + a);
console.log("a.toString() is " + a.toString());
console.log("typeof a is " + typeof a);

// symbol (new to ES6, )
// IE11:  Not Supported
console.log("IE11:  Symbol() Not Supported");
//console.log("");
//a = Symbol("new symbol");
//console.log("a = Symbol('new symbol');");
//console.log("a.toString() is " + a.toString());
//console.log("typeof a is " + typeof a);

/* 
 * Topic:  Coercion
 */
console.log("");
console.log("****************************************************************");
console.log("Topic:  Coercion");
console.log("****************************************************************");

// Explicit Coercion _ When developer uses a Function or Method to force conversion
console.log("typeof '13' is " + typeof "13");
console.log("typeof Number('13') is " + typeof Number("13"));

// Implicit Coercion - When JavaScript automatically does conversion
// Note: The difference between == and === is strict equals does not allow conversion
console.log("'13' == 13 is " + ("13" == 13));                                   // true, loosely equals
console.log("'13' === 13 is " + ("13" === 13));                                 // false, strictly equals
