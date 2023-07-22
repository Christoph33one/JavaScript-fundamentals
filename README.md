# JavaScript-fundamentals

Here I am taking JavaScritp back the basics so I can master the language.


// JAVASCRIPT CHALLENGE 1
// Use formular to work out BMI's

const massMark = 78;

const heightMark = 1.69;

const massJohn = 92;

const heightJonh = 1.95;

const BMIMark = massMark / heightMark ** 2;

const BMIJohn = massJohn / (massJohn * heightMark);

// Compare if mark is higher than John

const markHigherBMI = BMIMark > BMIJohn;

console.log(BMIMark, BMIJohn, markHigherBMI);


--------------------------------------------------------

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


// JAVASCRIPT CHALLENGE 3

const scoreDolphins = (96 + 108 + 89) / 3; // (addition sum runs first ())

const scoreKoalas = (88 + 91 + 110) / 3;

console.log(scoreDolphins, scoreKoalas);

if (scoreDolphins > scoreKoalas) {
    console.log("Dolphins win the trophy");

} else if (scoreDolphins < scoreKoalas) {
    console.log("Koalas win the trophy");

} else if (scoreDolphins === scoreKoalas) {
    console.log("Both win the trophy");
} 

Bonus 1
const scoreDolphins = (97 + 112 + 101) / 3; // 

const scoreKoalas = (109 + 95 + 123) / 3;

console.log(scoreDolphins, scoreKoalas);

if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
    console.log("Dolphins win the trophy");

} else if (scoreDolphins < scoreKoalas) {
    console.log("Koalas win the trophy");

} else if (scoreDolphins === scoreKoalas) {
    console.log("Both win the trophy");
} 

// Bonus 2
const scoreDolphins = (97 + 112 + 80) / 3;

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

