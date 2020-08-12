//  fs is a Node standard library package and writing files
const inquire = require("require");
const fs = require("fs");
const utils = require("utils");
const generateMarkdown = require("./utils/generateMarkdown");
const inquirer = require("inquirer");


//  generate READMe

function promptUser() {
    return inquirer.prompt([
        {
            type: "input",
            message: "Enter the name of your application:",
            name: "title"
        },
        {
            type: "input",
             message: "Give you applicaiton a description",
             name: "description"

        },
        {
            type: "checkbox",
            message: "Select a license.",
            choices: [
                "Apache",
                "MIT",
                "ISC",
                "None"
            ],

        },
    ])
}