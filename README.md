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