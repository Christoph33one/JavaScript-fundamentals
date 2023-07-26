// // JAVASCRIPT FUNDAMENTALS PART 2
// // Activate strict mode
// 'use strict';
// // Examlples of words you can not use!
// // const interface = 'Audio'
// // const private = 543;

/*
// Functions
*/
function logger() {
    console.log("My name is Chris");
}

// calling, running, invoking a function
logger();

// Parameters have no value, value for apples & oranges is passsed when function is called(5, 0)!
function fruitProcessor(apples, oranges) {
    // console.log(apples, oranges); // 5, 0
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}
// 5 & 0 are the values of the functions parameters
const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
console.log(fruitProcessor(5, 0));

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);