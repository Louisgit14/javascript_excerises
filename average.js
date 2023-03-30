// Write a function called "computeAverageLengthOfWords".
// Given two words, "computeAverageLengthOfWords" returns the average of their lengths.
// var output = computeAverageLengthOfWords('code', 'programs');
// console.log(output);

function computeAverageLengthOfWords(word1, word2) {
    if (typeof word1 === "string" && typeof word2 === "string") {
        let totalLength = word1.length + word2.length;
        return totalLength / 2
    }
    return 0
}

var output = computeAverageLengthOfWords("code", 'program')
console.log(output);
var output1 = computeAverageLengthOfWords(1, 2)
console.log(output1);
