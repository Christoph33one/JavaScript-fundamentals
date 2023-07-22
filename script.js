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



// Boolean logic
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
*/