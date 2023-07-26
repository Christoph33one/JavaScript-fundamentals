// // JAVASCRIPT FUNDAMENTALS PART 2
// // Activate strict mode
// 'use strict';
// // Examlples of words you can not use!
// // const interface = 'Audio'
// // const private = 543;
/*
// Functions

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



// Declaring functions & Expressions

//  Declaration
// Function that be used before it's declared
function calcAge1(birthYear) {
    return 2037 - birthYear;
}
// save value into a varible, pass function and calculate 2037 = 1992(birthYear)
const age1 = calcAge1(1991);
// console.log(age1);


// Expression
// Essentially a function value stored in a varible
// Function with out a name = Expression
// Functions are values which can be stored in a varible!
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}
const age2 = calcAge2(1991);
console.log(age1, age2);



// Arrow functions
// Great for quick one-line functions. But has no (this) keyword
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);


// const yearsUntilretirment = (birthYear) => {
//     const age = 2037 - birthYear;
//     const retirment = 65 - age; // 46
//     return retirment;
// }

// console.log(yearsUntilretirment(1991)); // birthYear 1991

const yearsUntilretirment = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirment = 65 - age;
    // return retirment;
    return `${firstName} retires is ${retirment} years `
}

console.log(yearsUntilretirment(1991, 'Chris'));
console.log(yearsUntilretirment(1980, 'Bob'));



// Functions calling other functions
function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples); // apples(2) now replaces (apples) in the functions parameter /  4 x 2 = 8
    const orangePieces = cutFruitPieces(oranges); // 3 x 4 = 12

    const juice = `Juice with ${applePieces} piece of apple and ${orangePieces}  pieces of orange.`;
    return juice;
}

console.log(fruitProcessor(2, 3));




// Reviewing functions
// birthYear = 1991
// fisrtName = 'Chris' & 'Mike'
// age = Chris - 46 / Mike - 87
const calcAge = function (birthYear) {
    return 2037 - birthYear;
}

const yearsUntilretirment = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirment = 65 - age; //Chris - 46 / Mike - 87

    if (retirment > 0) {
        console.log(`${firstName} retires is ${retirment} years `);
        return retirment; // Return statement goes below the log or if above it will be ignored!!
    } else {
        console.log(`${firstName} has already retired :)`) // Return statement goes below the log or if above it will be ignored!!
        return -1;
    }

}

console.log(yearsUntilretirment(1991, 'Chris'));
console.log(yearsUntilretirment(1950, 'Mike'));
*/

// FUNCTION CHALLANGE 1

/* 1. Create an arrow function calcAverage to 
calculate the average of 3 scores. 
This function should have three parameters and 
return a single number (the average score).

2. Create two new variables — scoreDolphins and scoreKoalas, 
and assign the value returned from the calcAverage function 
to them (you will need to call this function, and pass 
scores as arguments).

3. Create a function checkWinner that takes the average score
of each team as parameters (avgDolphins and avgKoalas), 
and then logs the winner to the console, together with the 
victory points, according to the rule above. Example: Koalas win 
(30 vs. 13) (use avgDolphins and avgKoalas instead of hard-coded values).

*/
// 1.
const calcAverage = (a, b, c) => (a + b + c) / 3;
console.log(calcAverage(3, 4, 5)); // 3 + 4+ 5 = 12 divided by(/) 3 = 4

// 2.
// const scoreDolphins = calcAverage(44, 23, 71);
// const scoreKoalas = calcAverage(65, 54, 49);
// console.log(scoreDolphins, scoreKoalas);


// TEST DATA 1
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreDolphins, scoreKoalas);

// 3.
const checkWinner = function (avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins win! (${avgDolphins} vs. ${avgKoalas})`)
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Dolphins win! (${avgDolphins} vs. ${avgKoalas})`)
    } else {
        console.log('No team wins...')
    }
}
checkWinner(scoreDolphins, scoreKoalas);

// TEST DATA 2
scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
console.log(scoreDolphins, scoreKoalas);
checkWinner(scoreDolphins, scoreKoalas);
