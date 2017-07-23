/*
 * FileName:  Complete/02IIFEs.js
 * Topics: 
 *      IIFEs
 */
console.log("FileName:  Complete/02IIFEs.js");

/* 
 * Topic:  IIFEs
 */
console.log("");
console.log("****************************************************************");
console.log("Topic:  IIFEs");
console.log("****************************************************************");

// IIFE - Immediate Invoked Function Expression
// Note: This executes once as written
(function() {
    let grades = [93, 95, 88, 0, 55, 91];

    function average() {
        let total = 0;
        //for (let value of grades) total = total + value;
        grades.forEach(function (value) { total = total + value; });
        return Math.floor(total / grades.length);
    }
    console.log('Your grade average is ' + average());                          // Your grade average is 70
}());

// Note:  No polution of the global namespace
//average();                                                                      // Uncaught ReferenceError: average is not defined