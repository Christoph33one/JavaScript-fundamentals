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
*/


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

