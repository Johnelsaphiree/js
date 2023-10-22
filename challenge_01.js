//This is a js challenge from freecodecamp.

const myBoolean = true; //1

const myString = "Hello World"; //2

const firstNumber = 20; //3

let secondNumber = 40; //4. i used let because i want to re-assign the variable to another number

secondNumber = 80; //5

const myArray = [myBoolean, myString]; //6

const myObject = {
    firstProperty: myArray, sumProperty: firstNumber + secondNumber
}; //7

console.log(myObject); //8

console.log(myObject.sumProperty) //9

console.log(myObject.firstProperty[1]); //i failed this one thoo, means i had a 9/10


