#! /usr/bin/env node
import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 5 + 1);
const answers = await inquirer.prompt([
    {
        name: "UserGuessedNumber",
        type: "number",
        message: " Please guess a number between 1 to 5: ",
    },
]);
if (answers.UserGuessedNumber === randomNumber) {
    console.log("\n Congratulations! You guess a right number");
}
else {
    console.log("\n OOps ! You guess a wrong number");
}
