/* 
 * FileName: Complete/04IntrinsicObjects.js
 * Topics:
 *         Wrapper Object Forms
 *         Arrays
 *         Math
 *         Date
 */
console.log("FileName:  Complete/04IntrinsicObjects.js");

/* 
 * Topic:  Wrapper Object Forms
 */
console.log("");
console.log("****************************************************************");
console.log("Wrapper Object Forms");
console.log("****************************************************************");

// Wrappers Object Forms (String, Number, Boolean)
// Auto Boxing
console.log("");
console.log("Wrapper Object Forms");

var string1 = "Value", number1 = 123.456, boolean1 = true;

console.log(string1.substring(1, 3));
console.log(number1.toFixed(2));
console.log(boolean1.toString());


/* 
 * Topic:  Arrays
 */
console.log("");
console.log("****************************************************************");
console.log("Arrays");
console.log("****************************************************************");

var array = ["Value", 13, true],
    array2 = new Array("Value", 13, true);
array.push("End Value");
array.splice(2, 0, "New Value2");
array.splice(1, 1);

console.log("array[0] is " + array[0]);
console.log("array[1] is " + array[1]);

console.log("");
// IE11:  Not Supported
console.log("IE11:  for of loop Not Supported");
//for (let value of array) console.log(value);

console.log("");
// Alertnative that is Supported on IE11
array.forEach(function (value, index, array) { 
    console.log("value is " + value);
    console.log("index is " + index);
    console.log("array is " + array);
});

console.log("");
// Note: ES6 Template Literal syntax ` and Expression Interpolation
// IE11:  Not Supported
console.log("IE11:  Template Literal Syntax Not Supported");
//for (let i = 0; i < array.length; i++) console.log(`array[${i}] is ` + array[i]);

console.log("");
console.log("array.length is " + array.length);
console.log("typeof array is " + typeof array);


/* 
 * Topic:  Math
 */
console.log("");
console.log("****************************************************************");
console.log("Math");
console.log("****************************************************************");

var radius = 5,
    circleArea = Math.PI * radius * radius;  
console.log(Math.round(circleArea));


/* 
 * Topic:  Date
 */
console.log("");
console.log("****************************************************************");
console.log("Date");
console.log("****************************************************************");

var now = new Date(),
    xmas = new Date(2017, 11, 25),
    day = now.getDate(),
    month = now.getMonth() + 1,
    year = now.getFullYear();
console.log(now);
console.log(month + "-" + day + "-" + year);
console.log(xmas);