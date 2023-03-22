//Write a function called "isOddLength".
//Given a word, "isOddLength" returns whether the length of the given word is odd.
//var output = isOddLength('special');
//console.log(output); // --> true
//Problem 1:
function isOddLength(word) {
    return word.length % 2 === 1;
}

console.log("Result - ", isOddLength('special'));
console.log("Result1 - ", isOddLength('Raja'));
console.log("Result2 - ", isOddLength(''));

//Problem: 2

//Write a function called "average".
//Given two numbers, "average" returns their average.
//var output = average(4, 6);
//console.log(output); // --> 5

function average(num1, num2) {
    return (num1 + num2) / 2
}

console.log("Result- ", average(4, 6));
console.log("Result - ", average(10, 65));

