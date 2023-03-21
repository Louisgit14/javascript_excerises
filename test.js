// writing my first js file

// Write a function called "checkAge". 
//Given a person's name and age, "checkAge" returns one of two messages: "Go home, {insert_name_here}!", 
//if they are younger than 21. 
//"Welcome, {insert_name_here}!", if they are 21 or older. 
//Naturally, replace "{insert_name_here}" with the given name. :)
// Output

// var output = checkAge('Adrian', 22);
// console.log(output); // --> 'Welcome, Adrian!'

//create a function signature
function checkAge(name, age) {
    if (age < 21) {
        return "Welcome," + name + "!"

    }
    return "Go Home," + name + "!"
}
console.log(checkAge("Louis", 33));
console.log(checkAge("Ajay", 20)); 