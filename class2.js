//Write a function called "isOddLength".
//Given a word, "isOddLength" returns whether the length of the given word is odd.
//var output = isOddLength('special');
//console.log(output); // --> true
//Problem 1:
function isOddLength(word) {
    return word.length % 2 !== 0;
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
    return (num1 + num2) / 2;
}

console.log("Result- ", average(4, 7));
console.log("Result - ", average(10, 66));

//Problem 3:

//Write a function called "computeAreaOfATriangle".
//Given the base and height of a triangle, "computeAreaOfATriangle" returns its area.
//var output = computeAreaOfATriangle(4, 6);
//console.log(output); // --> 12

function computeAreaOfATriangle(base, height) {
    if (typeof base !== 'number' && typeof height !== 'number') {
        return 'Error: Both arguments must be numbers';
    }
    return (base * height) / 2;
}

console.log("Area of triange", computeAreaOfATriangle(4, 6));
console.log("Area of triangle", computeAreaOfATriangle("one", 1));
console.log("Area of triangle", computeAreaOfATriangle("One", "Two"));
console.log("Area of triangle", computeAreaOfATriangle(-1, -5));


