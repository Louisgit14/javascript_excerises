//Write a function called "isOddLength".
//Given a word, "isOddLength" returns whether the length of the given word is odd.
//var output = isOddLength('special');
//console.log(output); // --> true

function isOddLength(word) {
    return word.length % 2 === 1;
}

console.log("Result - ", isOddLength('special'));
console.log("Result1 - ", isOddLength('Raja'));
console.log("Result2 - ", isOddLength(''));

