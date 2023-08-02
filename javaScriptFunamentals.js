// ----- JAVASCRIPT FUNDAMENTALS PART 1 ------
// Varibales
// let js = "amazing";
// console.log(40 + 8 + 23 - 10);
// console.log("Jones");
// console.log(23)

/*let firstName = "Jones";
console.log(firstName);

let chris_brown = "singer";
let $function = 27;
let person = "Chris Brown"

Data types Interger, number & string
let javascritpIsFun = true;
console.log(typeof true);
console.log(typeof javascritpIsFun);
console.log(typeof 23);
console.log(typeof 'Jones');

javascritpIsFun = 'YES!';
console.log(typeof javascritpIsFun);

// Undefined
let year;
console.log(year)
console.log(typeof year);
// Dynamtic typing to update year as a number
year = 1991;
console.log(year);
console.log(null);



// Declare varibales
// Mutate a varibal use LET
let age = 30;
age = 31;

// Can not mutate COSNT varibales
const birthYear = 1991;
birthYear = 1990;

// Never use VAR, it's old school!
var job = "programmer";
job = "teacher"



// Basic operators
// Math operators
const ageChris = 2027 - 1991;
const ageVika = 2027 - 2018;
console.log(ageChris, ageVika);

const now = 2027
const ageMike = now - 1991;
const agePeter = now - 2018;
console.log(ageMike, agePeter);
console.log(ageMike * 2, agePeter / 10, 2 ** 3)

const firstName = 'Chris';
const lastName = 'Brown';
console.log(firstName + ' ' + lastName);
let x = 10 + 5;
console.log(x);



// Assingment operators
z += 10; // z = x + 10 = 25
z *= 4; // z = z * 4 = 100
z++; // z = z = 1
z--;
z--;
console.log(z);


// Comparison operators
const ageChris = 2027 - 1991;
const ageVika = 2027 - 2018;
console.log(ageChris, ageVika);

console.log(ageChris > ageVika); // >, <, >=, <=
console.log(ageChris >= 18);



// Operator procedance
const now = 2027
const ageChris = 2027 - 1991;
const ageVika = 2027 - 2018;
console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10
console.log(x, y);


// JAVASCRIPT CHALLENGE 1
// Use formular to work out BMI's

const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJonh = 1.95;

const massMark = 95;
const heightMark = 1.88;
const massJohn = 85;
const heightJohn = 1.76;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);

// Compare if mark is higher than John
const markHigherBMI = BMIMark > BMIJohn;
console.log(BMIMark, BMIJohn, markHigherBMI);



// Strings & tempate literals
const firstName = "Chris";
const job = 'Student';
const birthYear = 1988;
const year = 2037;

const chris = "I'm " + firstName + ', a  ' + (year - birthYear) + 'years old' + job + '!';
console.log(chris);

// Tempate literals ES6
const chrisNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(chrisNew);

// Use back ticks in logs
console.log(`Just a regular string....`)

// Multiple lines in logs
console.log('String with \n\
multiple \n\
lines');

// Use back ticks in logs ES6 for multiple lines
console.log(`string
multiple
lines`);



// if statements
const age = 19;
const isOldEnough = age >= 18;

if (isOldEnough) {
    console.log('chris can start driving ');
}

const ages = 15;
const isMuchOldEnough = ages >= 18;

if (ages >= 18) {
    console.log('chris can start driving ');
} else {
    const yearsLeft = 18 - ages;
    console.log(`chris is to young, wait ${yearsLeft} more years :`)
}

const birthYear = 2012;
// Delcare centry varible outside the code block.
let cenrty
if (birthYear <= 2000) {
    cenrty = 20;
} else {
    cenrty = 21;
}
console.log(cenrty);



// JAVASCRIPT CHALLENGE 2
// Use if statment to log who's BMI is higher
// Use template literals to log BMI data
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

// const massMark = 95;
// const heightMark = 1.88;
// const massJohn = 85;
// const heightJohn = 1.76;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);

if (BMIMark > BMIJohn) {
    console.log(`Mark's BMI (${BMIMark}) is higher than John's!`)
} else {
    console.log(`Jonh's BMI ${BMIJohn}) is higher than Mark's!`)
}


// Typle Conversion
// Converting strings to numbers
const inputYEAR = '1991';
console.log(Number(inputYEAR), inputYEAR);
console.log(Number(inputYEAR) + 18);

console.log(String(23));
console.log(String(23), 23);

// Typle Coercion
console.log('I am  ' + 23 + ' years old');
console.log('I am  ' + '23' + ' years old');
console.log('23' + '10' - 3);
console.log('23' * '2');

let n = '1' + 1; // string of '1' = 10
n = n - 1;
console.log(n);


// Truthy and falsy values
// 5 falsty values: 0, '', undefined, null, NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('chris'));
console.log(Boolean({}));

const money = 0;
if (money) {
    console.log("Don't spend it all");
} else {
    console.log("You should get a job!")
}

let height = 0;
if (height) {
    console.log('Yay height is defined');
} else {
    console.log('Height is Undefined');
}


// Equality operators
const age = 18;
if (age === 18) console.log('You just became an adult (strict)');

if (age == 18) console.log('You just became an adult (loose)');

const favourite = Number(prompt("What's youer favorite number?"));
console.log(favourite)
console.log(typeof favourite);

if (favourite === 23) {
    console.log('Cool! 23 is an amazing number!')
} else if (favourite === 7) {
    console.log('7 is also a cool number')
} else if (favourite === 9) {
    console.log('9 is also a cool number');
} else {
    console.log('Number is not 23 or 7 or 9');
}
if (favourite !== 23) console.log('Why not 23?');



// BOOLEAN LOGIC
const hasDriversLicense = true;
const hasGoodVision = false;

console.log(hasDriversLicense && hasGoodVision); // AND
console.log(hasDriversLicense || hasGoodVision); // OR
console.log(!hasDriversLicense); // NOT

// if (hasDriversLicense && hasGoodVision) {
//     console.log(' Sarah is able to drive!') // True & True
// } else {
//     console.log(' Someone else should drive!') // True
// }

const isTired = true;
console.log(hasDriversLicense || hasGoodVision || isTired);

// Not tired is False so code logs Someone else should drive!
if (hasDriversLicense && hasGoodVision && !isTired) { // NOT tired
    console.log(' Sarah is able to drive!') // True & True
} else {
    console.log(' Someone else should drive!') // True
}



// JAVASCRIPT CHALLENGE 3
// const scoreDolphins = (96 + 108 + 89) / 3; // (addition sum runs first ())
// const scoreKoalas = (88 + 91 + 110) / 3;

// console.log(scoreDolphins, scoreKoalas);

// if (scoreDolphins > scoreKoalas) {
//     console.log("Dolphins win the trophy");
// } else if (scoreDolphins < scoreKoalas) {
//     console.log("Koalas win the trophy");
// } else if (scoreDolphins === scoreKoalas) {
//     console.log("Both win the trophy");
// }

// Bonus 1
// const scoreDolphins = (97 + 112 + 101) / 3; //
// const scoreKoalas = (109 + 95 + 123) / 3;

// console.log(scoreDolphins, scoreKoalas);

// if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
//     console.log("Dolphins win the trophy");
// } else if (scoreDolphins < scoreKoalas) {
//     console.log("Koalas win the trophy");
// } else if (scoreDolphins === scoreKoalas) {
//     console.log("Both win the trophy");
// }

// Bonus 2
const scoreDolphins = (97 + 112 + 80) / 3; //
const scoreKoalas = (109 + 95 + 50) / 3;

console.log(scoreDolphins, scoreKoalas);

if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
    console.log("Dolphins win the trophy");
} else if (scoreDolphins > scoreKoalas && scoreKoalas >= 100) {
    console.log("Koalas win the trophy");
} else if (scoreDolphins === scoreKoalas && scoreDolphins >= 100 && scoreKoalas >= 100) {
    console.log("Both win the trophy");
} else {
    console.log("No one wins!")
}



// SWITCH STATEMENTS
// executes the value given to day
// more readable code woth switch statment
const day = 'friday';

switch (day) {
    case 'monday': // day == 'monday'
        console.log('Plan course structure');
        console.log('Go to coding meetup');
        break;
    case 'tuesday':
        console.log('Prepare theory vidoes');
        break;
    case 'wednesday':
    case 'thursday':
        console.log('Write code examples');
    case 'friday':
        console.log('Record videos');
        break;
    case 'saturday':
    case 'sunday':
        console.log('Enjoy the weekend')
        break;
    default:
        console.log('Not a valid day!');
}

if (day === 'monday') {
    console.log('Plan course structure');
    console.log('Go to coding meetup');
} else if (day === 'tuesday') {
    console.log('Go to coding meetup');
} else if (day === 'wednesday' || day === 'thursday') {
    console.log('Go to coding meetup');
} else if (day === 'friday') {
    console.log('Record videos');
} else if (day === 'staurday' || day === 'sunday') {
    console.log('Enjoy the weekend')
} else {
    console.log('Not a valid day!');
}




// STATEMENTS & EXPRESSIONS
// EXPRESSIONS
// 3 + 4
// 1991
// true && false && !false

// STATEMENTS
// if (23 > 10) {
//     const str = '23 is bigger';
// }

// me is the expression
const me = 'Chris'
console.log(`I'm ${2037 - 1991} years old ${me}`)




// CONDITIONAL OPERATORS
// ? ( if statment : else)
const age = 23;
// age >= 18 ? console.log('I like to drink wine') :
//     console.log('I like to code and learn new things');

// Refractored code with ternary operators!
const drink = age >= 18 ? 'wine' : 'water';
console.log(drink);

console.log(`I like to drink ${age >= 18 ? 'wine'
    : 'water'}`);

// longer version
let drink2;
if (age >= 18) {
    drink2 = 'wine';
} else {
    drink2
}
console.log(drink2);
*/

// const bill = 21;
// const tip = 15;
// if (bill >= tip) {
//     console.log(`please tip at ${tip >= 20 ? tip : 'Spend more'}`)
// }

// JAVASCRIPT CHALLENGE 4
// const bill = 430;
// const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2
// console.log(`The bill was ${bill}, the tip was ${tip},
//     and the total value ${bill + tip}`);

// ------ JAVASCRIPT FUNDAMENTALS PART TWO -------

// // JAVASCRIPT FUNDAMENTALS PART 2
// // Activate strict mode
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

// COUNTER - let rep = 1 = to print the value
// CONDITION - rep <= 10 = when to stop the loop
// INCREASE THE COUNTER rep++ = loop one after another!
// For loops keeps running while condition is true!

for (let rep = 1; rep <= 10; rep++) {
    // console.log(`Lifting weights repetition 1');
    console.log(`Lifting weights repetition ${rep}`);
}



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
    // reading from jonas array
    console.log(jonas[i], typeof jonas[i]);

    // filling type array
    // types[i] = typeof jonas[i];
    types.push(typeof jonas[i]);
}
console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

// 2037 - each years array value, then passed the value to the empty ages array
for (let i = 0; i < years.length; i++) {
    ages.push(2037 - years[i]);
}
console.log(ages);

// CONTINUE AND BREAK
console.log('--- ONLY STRINGS ---')
for (let i = 0; i < jonas.length; i++) {
    if (typeof jonas[i] !== 'string') continue;
    // if element(jonas[i]) is not a string... continue loop
    console.log(jonas[i], typeof jonas[i]);
}

console.log('--- BREAK WITH NUMBER ---')
for (let i = 0; i < jonas.length; i++) {
    if (typeof jonas[i] === 'number') break;
    // if element(jonas[i]) is equal to a number... break loop
    console.log(jonas[i], typeof jonas[i]);
}



// LOOPING BACKWARDS AND LOOPS IN LOOPS
const jonas = [
    'Jonas',
    'Schmedtmenn',
    2073 - 1991,
    'teacher',
    ['Micheal', 'Peter', ' Steven']
];
// 0,1,2,3,4
// 4,3,2,1,0

// LOOPING BACKWARDS
for (let i = jonas.length - 1; i >= 0; i--) {
    console.log(jonas[i]);
}

//LOOPS IN LOOPS
for (let exercise = 1; exercise <= 3; exercise++) {
    console.log(`-------------- starting exercise ${exercise}`);

    for (let rep = 1; rep < 6; rep++) {
        console.log(`Exercise ${exercise}: Lifting weights repetition ${rep}`)
    };
}



// WHILE LOOP
// can only specify a condition only!
// You can use a while loop when you do not know the counter
// for (let rep = 1; rep <= 10; rep++) {
//     console.log(`Lifting weights repetition ${rep}`);
// }

let rep = 1;
while (rep <= 10) {
    // console.log(`Lifting weights repetition ${rep}`);
    rep++
};

for (let rep = 1; rep <= 10; rep++) {
    console.log(`WHILE: Lifting weights repetition ${rep}`);
}

// To get a random number - Math.trunc(Math.random()
let dice = Math.trunc(Math.random() * 6) + 1;


while (dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) console.log('Loop is about to end!')
}
*/

// LOOPS CHALLENGE 4
/*
1. Create an array called bills containing all 10 test bill values.
TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86, and 52.

2. Create empty arrays for the tips and the totals (tips and totals)

3. Use the calcTip function we wrote before (included in the starter code)
to calculate tips and total values (bill + tip) for every bill value in the bills array.
Use a for loop to perform the 10 calculations!

*/
// const calcTip = function (bill) {
//     return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// }

// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// const tips = [];
// const totals = [];

// for (let i = 0; i < bills.length; i++) {
//     const tip = calcTip(bills[i]);
//     tips.push(tip);
//     totals.push(tip + bills[i]);
// }
// console.log(bills, tips, totals);

//BOUNS CHALLENGE
/*

// Write a function calcAverage which takes an array called arr as an argument.
// This function calculates the average of all numbers in the given array. 
// This is a DIFFICULT challenge (we haven't done this before)! 
// Here is how to solve it if you feel like it:

// 1. 
// First, you will need to add up all values in the array. 
// To do the addition, start by creating a variable sum that starts at 0. 
// Then loop over the array using a for loop. In each iteration, add the current value to the sum variable. 
// This way, by the end of the loop, you have all values added together.

// 2. To calculate the average, divide the sum you calculated before by the 
// length of the array (because that's the number of elements).

// 3. Call the function with the totals array.

// const calcTip = function (bill) {
//   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// };

// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// const tips = [];
// const totals = [];

// for (let i = 0; i < bills.length; i++) {
//   const tip = calcTip(bills[i]);
//   tips.push(tip);
//   totals.push(tip + bills[i]);
// }
// console.log(bills, tips, totals);

// const calcAverage = function (arr) {
//   let sum = 0; // 1.
//   for (let i = 0; i < arr.length; i++) {
//     // sum = sum + arr[i]; // 2.
//     sum += arr[i]; // short hand version
//   }
//   return sum / arr.length;
// };
// console.log(calcAverage([2, 3, 7]));
// console.log(calcAverage(totals));
// console.log(calcAverage(tips));

*/
const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i]);
  tips.push(tip);
  totals.push(tip + bills[i]);
}
console.log(bills, tips, totals);

const calcAverage = function (arr) {
  let sum = 0; // 1.
  for (let i = 0; i < arr.length; i++) {
    // sum = sum + arr[i]; // 2.
    sum += arr[i]; // short hand version
  }
  return sum / arr.length;
};
console.log(calcAverage([2, 3, 7]));
console.log(calcAverage(totals));
console.log(calcAverage(tips));
