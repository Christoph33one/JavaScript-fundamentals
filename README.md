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

