//Write a function called "cube".
// Given a number, "cube" returns the cube of that number.
// var output = cube(3);
// console.log(output); // --> 27

function cube(num) {
    if (typeof num === 'number') {
        return num * num * num;
    }
    return 0;
}
var output = cube("vinod");
var output1 = cube(3);
console.log(output);
console.log(output1);