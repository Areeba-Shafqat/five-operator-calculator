#! /usr/bin/env node
// import inquirer package to my file
import inquirer from "inquirer";
// import inquirer.prompt() function to take input from end user
const answer = await inquirer.prompt([
    { message: "Enter First Number", type: "number", name: "firstNumber" },
    { message: "Enter Second Number", type: "number", name: "secondNumber" },
    {
        message: "Select One Of The Operators To Perform Operation",
        type: "list",
        name: "operators",
        choices: ["Addition", "Subtraction", "Multiplication", "Division", "Power"],
    },
]);
// Aplly Condition to check equality of operators
if (answer.operators === "Addition") {
    console.log(answer.firstNumber + answer.secondNumber);
}
else if (answer.operators === "Subtraction") {
    console.log(answer.firstNumber - answer.secondNumber);
}
else if (answer.operators === "Multiplication") {
    console.log(answer.firstNumber * answer.secondNumber);
}
else if (answer.operators === "Division") {
    console.log(answer.firstNumber / answer.secondNumber);
}
else if (answer.operators === "Power") {
    console.log(Math.pow(answer.firstNumber, answer.secondNumber));
}
else {
    console.log("Please Select Valid Operator");
}
