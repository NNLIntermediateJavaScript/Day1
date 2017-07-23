/* 
 * FileName: Complete/05Functions.js
 * Topics:
 *         Declaring & Calling Functions
 *         return Values
 *         Function Parameters
 *         ES6 Rest Parameters
 *         ES6 Default Parameters
 */
console.log("FileName:  Complete/05Functions.js");

/* 
 * Topic:  Declaring & Calling Functions
 */
console.log("");
console.log("****************************************************************");
console.log("Declaring & Calling Functions");
console.log("****************************************************************");

function globalFunction() {
    console.log("globalFunction() called");
}
globalFunction();


/* 
 * Topic:  return Values
 */
console.log("");
console.log("****************************************************************");
console.log("return Values");
console.log("****************************************************************");

function returnValues() {
    console.log("returnValues() called");
    return "Return Value";
}
console.log("returnValues() returned " + returnValues());
var returnValue = returnValues();
console.log("returnValue is " + returnValue);

// Caution:  Watch for missing parameter parathesis
returnValue = returnValues;
console.log("returnValue is " + returnValue);
console.log("typeof returnValue is " + typeof returnValue);


/* 
 * Topic:  Function Parameters
 */
console.log("");
console.log("****************************************************************");
console.log("Function Parameters");
console.log("****************************************************************");

function parameters(param1, param2) {
    console.log("paramters(param1, param2) called");
    return param1 + param2;
}
console.log("parameters(2, 3) returned " + parameters(2, 3));

// Note:  All functions get an arguments array for parameters passed in
//          arguments[0], arguments[1], arguments[2], etc
function argumentsArray() {
    console.log("argumentsArray() called");
    
    // IE11:  Not Supported
    console.log("IE11:  for of loop Not Supported");
    //for (let value of arguments) console.log(value);

    return arguments.length + " arguments passed in";
}
console.log("argumentsArray(1, 2, 'Value', true) returned " + 
        argumentsArray(1, 2, "Value", true));


/* 
 * Topic:  ES6 Rest Parameters
 */
console.log("");
console.log("****************************************************************");
console.log("ES6 Rest Parameters");
console.log("****************************************************************");

// Note: Only one rest parameter per function
// Note: Must be last parameter in list
// IE11:  Not Supported
console.log("IE11:  ES6 Rest Paramaters Not Supported");
//function es6RestParameters(param1, ...params) {
//    console.log("es6RestParameters(param1, ...params) called");
//    return "param1 is " + param1 + 
//            " and " + params.length + " other parameters passed in";
//}
//console.log("es6RestParameters(1, 2, 'Value', true) returned " + 
//        es6RestParameters(1, 2, "Value", true));


/* 
 * Topic:  ES6 Default Parameters
 */
console.log("");
console.log("****************************************************************");
console.log("ES6 Default Parameters");
console.log("****************************************************************");

// IE11:  Not Supported
console.log("IE11:  ES6 Default Parameters Not Supported");
//function es6DefaultParameters(param1 = "default", param2 = "default") {
//     console.log("es6DefaultParameters:  param1 = " + param1 + " param2 = " + param2);
//}
//es6DefaultParameters();                                                         // param1 = default param2 = default
//es6DefaultParameters(1);                                                        // param1 = 1 param2 = default
//es6DefaultParameters(1, 2);                                                     // param1 = 1 param2 = 2
//es6DefaultParameters(0, 0);                                                     // param1 = 0 param2 = 0
//
//
//console.log("");
//function es6DefaultParameterFeature1(param3, param4 = param3) {
//     console.log("es6DefaultParameterFeature1:  param3 = " + param3 + " param4 = " + param4);
//}
//es6DefaultParameterFeature1(3);                                                 // param1 = 1 param2 = 1
//// Note: Can't reverse them due to Temporal Dead Zone / creation order
//
//
//console.log("");
//function getValue() { return 6; }
//function es6DefaultParameterFeature2(param5, param6 = getValue()) {
//     console.log("es6DefaultParameterFeature2:  param5 = " + param5 + " param6 = " + param6);
//}
//es6DefaultParameterFeature2(5);                                                 // param1 = 1 param2 = 5
// Note: Watch out for missing parathesis on getValue(), passes function reference instead of calling


console.log("");
function es5DefaultParameters(param7, param8) {
    param7 = param7 || "default";
    param8 = (typeof param8 !== 'undefined') ? param8 : "default";
    console.log("es5DefaultParameters:  param7 = " + param7 + " param8 = " + param8);
}
es5DefaultParameters();                                                         // param7 = default param8 = default
es5DefaultParameters(1);                                                        // param7 = 1 param8 = default
es5DefaultParameters(1, 2);                                                     // param7 = 1 param8 = 2

// Note:  Since 0 is falsy, using || or operator sets it to "default"
es5DefaultParameters(0, 0);                                                     // param7 = default param8 = 0
