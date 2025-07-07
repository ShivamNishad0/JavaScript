// This is example of the string when only pass the number as a string

let score = "324";

console.log(typeof score); //one type of checking the type of the variable
console.log(typeof(score)); //another type of checking the type of the variable

// Now converting the string into number

let scoreNumber = Number(score);
console.log(typeof(scoreNumber));

//----------------------------------------------------------------------------------------------------------------

// This is example of the the string when pass the number with characters as a string

let digit = "324av";

console.log(typeof digit); //one type of checking the type of the variable
console.log(typeof(digit)); //another type of checking the type of the variable

// Now converting the string into number

let digitNumber = Number(digit);
console.log(typeof(digitNumber));
console.log(digitNumber); // This will print NaN because the string "324csjag" cannot be converted to a number

//----------------------------------------------------------------------------------------------------------------

let score1= true;
