// // JAVASCRIPT FUNDAMENTALS PART 2
// // Activate strict mode
// 'use strict';
// // Examlples of words you can not use!
// // const interface = 'Audio'
// // const private = 543;
/*
// FUNCTIONS

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



// DELCARING FUNCTIONS & EXPRESSIONS
// DECLARATION
// Function that be used before it's declared
function calcAge1(birthYear) {
    return 2037 - birthYear;
}
// save value into a varible, pass function and calculate 2037 = 1992(birthYear)
const age1 = calcAge1(1991);
// console.log(age1);


// EXPRESSION
// Essentially a function value stored in a varible
// Function with out a name = Expression
// Functions are values which can be stored in a varible!
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}
const age2 = calcAge2(1991);
console.log(age1, age2);



// ARROW FUNCTIONS
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


// 1.
const calcAverage = (a, b, c) => (a + b + c) / 3;
console.log(calcAverage(3, 4, 5)); // 3 + 4 + 5 = 12 divided by(/) 3 = 4

// 2.
// const scoreDolphins = calcAverage(44, 23, 71);
// const scoreKoalas = calcAverage(65, 54, 49);
// console.log(scoreDolphins, scoreKoalas);


// TEST DATA 1
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49) ;
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



// DATA STRUCTURES
// ARRAY OPERATIONS(METHODS)

const friend1 = 'chris';
const friend2 = 'vik';
const friend3 = 'mike';

// ARRAYS
// Most comon way to write arrays!
const friends = ['chris', 'vik', 'mike'];
console.log(friends);

// const years = new Arrray(1992, 1984, 1988, 2020);

// console.log(friends[0]);// = chris
// console.log(friends[2]);// = vik

// console.log(friends.length); // = 3
// console.log(friends[friends.length - 1]); // = mike

// mutate an array
friends[2] = 'James';
console.log(friends); // replaces mike with James!

const firstName = 'Jonas';
const jonas = [firstName, 'Brown', 2037 - 1991,
    'teacher', friends];
console.log(jonas.length);

// EXRCISE
const calcAge = function (birthYear) {
    return 2037 - birthYear;
}
const years = [1991, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]); // = 46
const age2 = calcAge(years[1]); // = 70
const age3 = calcAge(years[years.length - 1]); // = 19
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]),
calcAge(years[years.length - 1])];
console.log(ages); // = 46, 70, 19]



// ARRAY METHODS
// Push method
const friends = ['chris', 'vik', 'mike'];
// Add elements
const newLenght = friends.push('James');
console.log(friends); // = ['chris', 'vik', 'mike', 'James']
console.log(newLenght);

// returns new array item
friends.unshift('John');
console.log(friends); // = ['John', 'chris', 'vik', 'mike', 'James']

// REMOVE ELEMENTS
friends.pop();
const popped = friends.pop(); // = ['John', 'chris', 'vik']
console.log(popped); // Not used to often!
console.log(friends);

friends.shift();
console.log(friends); // = ['chris', 'vik']

console.log(friends.indexOf('vik'));
console.log(friends.indexOf('bob'));

// ES6 METHOD
friends.push(23);
console.log(friends.includes('vik')); // = True
console.log(friends.includes('bob')); // = False
console.log(friends.includes(23)); // = True

if (friends.includes('vik')) {
    console.log('You have a friend called Vik!') // = You have a friend called Vik!
}


// ARRAY CHALLENGE 2
/* Write a function calcTip that takes any bill value
as an input and returns the corresponding tip, calculated
based on the rules above (you can check out the code from the
first tip calculator challenge if you need to). Use the function
type you like the most. Test the function using a bill value of 100.

2.And now let's use arrays! So, create an array called bills containing
the test data below.

3.Create an array called tips containing the tip value for each bill,
calculated from the function you created before.

4. BONUS: Create an array totals containing the total values,
so the bill + tip.

const calcTip = function (bill) {
    return bill >= 50 && 300 ? bill * 0.15 : bill * 0.2
    // bill equal or higher than 300 or bill x 0.15 else bill x 0.2
}
// Cleaner way instaed of creating seprate varibles.
const bills = [125, 555, 44]; // = [18.75, 83.25, 8.8]
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(bills, tips, totals); // = [143.75, 638.25, 52.8]




// OBJECTS
// Objects have curly braces {} to define a new object
const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmenn',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Micheal', 'Peter', ' Steven']
};
console.log(jonas);

// DOT VS BRACKET NOTATION
console.log(jonas.lastName); // Dot notation
console.log(jonas['lastName']); // Bracket notation

const nameKey = 'Name';
console.log(jonas['first' + nameKey]);
console.log(jonas['last' + nameKey]);

// console.log(jonas.'last' + nameKey); // Dot notation will not work this way!

const interestedIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends');

// Get a property that does not exist as an object from jonas
if (jonas[interestedIn]) {
    console.log(jonas[interestedIn]);
} else {
    console.log('Wrong request!  Choose between firstName, lastName, age, job, and friends');
}

jonas.location = 'Portugal';
jonas['twitter'] = '@jonasschmedtmann';
console.log(jonas);

// CHALLENGE
// "Jonas has 3 friends, and his best friend is called Micheal"

console.log(`${jonas.firstName} has ${jonas.friends.
    length}, and his best friend is called ${jonas.friends[0]}`)



// OBJECT METHODS
const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmenn',
    birthYear: 1991,
    job: 'teacher',
    friends: ['Micheal', 'Peter', ' Steven'],
    hasDriversLicense: true,

    // This is a function expression(method)
    // this holds a function value (functions are values!)
    // calcAge: function (birthYear) {
    //     return 2037 - birthYear;
    // }


    // Using the (this) keyword to retieve birthyear only
    // this, pionts to the object jonas and it's key value pairs!
    // calcAge: function () {
    //     console.log(this);
    //     return 2037 - this.birthYear;
    // }


    // Another way to use the this keyword to calculate the age and log it to the console
    calcAge: function () {
        this.age = 2037 - this.birthYear;
        return this.age;
    },
    // CHALLENGE
    // "Jonas is a 46-year old teacher, and he has a drivers license"
    // Jonas is a 46- year old teacher, and he has a drivers license.
    getSummary: function () {
        return `${this.firstName} is a ${this.calcAge()}
            - year old ${jonas.job}, and he has ${this.
                hasDriversLicense ? 'a' : 'no'} drivers license.`
    }
};


console.log(jonas.calcAge());
// console.log(jonas.calcAge(1991));
console.log(jonas.age);
console.log(jonas.getSummary());
*/

// OBJECTS CHALLENGE 3
/*
1. For each of them, create an object with properties
for their full name, mass, and height (Mark Miller and
John Smith). Name these objects as mark and john,
and their properties exactly as fullName, mass and height.

2. Create a calcBMI method on each object to calculate the
BMI (the same method on both objects). Assign the BMI value
to a property, and also return it from the method.

3.Log to the console who has the higher BMI,
together with the full name and the respective BMI.
Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!".


const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,

    // Method
    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }

}
const john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,

    // Method
    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
}
// call the object and then the method
mark.calcBMI();
john.calcBMI();

console.log(mark.bmi, john.bmi);

if (mark.bmi > john.bmi) {
    console.log(`${mark.fullName}'s BMI
    ${mark.bmi} is higher that ${mark.fullName}
    ${john.bmi}`);
} else if (john.bmi > mark.bmi) {
    console.log(`${john.fullName}'s BMI
    ${mark.bmi} is higher that ${mark.fullName}
    ${john.bmi}`);
}
/*Mark Miller's BMI
27.309968138370508 is higher that Mark Miller
24.194608809993426




// LOOPS
// ITERATION: THE FOR LOOP
// console.log('Lifting weights repetition 1');

// For loops keeps running while condition is true!
for (let rep = 1; rep <= 10; rep++) {
    // console.log(`Lifting weights repetition 1');
    console.log(`Lifting weights repetition ${rep}`);
}
*/


// LOOPING ARRAYS, BREAKING AND CONTINUING
const jonas = [
    'Jonas',
    'Schmedtmenn',
    2073 - 1991,
    'teacher',
    ['Micheal', 'Peter', ' Steven'],
    true
];
const types = [];
// console.log(jonas[0])
// console.log(jonas[1]) 
// .. 
// console.log(jonas[4])
// (jonas[5]) does not exist!

// Looping an array with the For loop
for (let i = 0; i < jonas.length; i++) {
    // reading form jonas array
    console.log(jonas[i], typeof jonas[i]);

    // filling type array
    // types[i] = typeof jonas[i];
    types.push(typeof jonas[i]);
}
console.log(types);

