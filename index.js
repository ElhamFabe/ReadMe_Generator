//  fs is a Node standard library package and writing files
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");



//  generate READMe

function promptUser() {
    return inquirer.prompt([
        {
            type: "input",
            message: "Enter the title of your application:",
            name: "title"
        },
        {
            type: "input",
            message: "Give your applicaiton a description",
            name: "description"

        }, {

            type: "input",
            message: "List the technologies you used for this application:",
            name: "technologies"

        },
        {
            type: "input",
            message: "What are the required steps for installation?",
            name: "installation"

        },
        {
          type: "input",
          message:
            "Provide instructions and examples for use of your application:",
          name: "usage",

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
            name: "license"
        },
        {
            type: "input",
            message:
              "List any of the collaborators, if any, with links to their GitHub profiles (including your own): ",
            name: "contributors",
          },
          {
            type: "input",
            message:
              "Provide any examples for tests for your project or how to run them: ",
            name: "tests",
          },
          {
            type: "input",
            message:
              "Any questions or concerns, please contact me via email: ",
            name: "questions",
          },
    ])
}
 async function writeToFile(data) {
    const markDown = await generateMarkdown(data);
    console.log(markDown);
    fs.writeFileSync("readMe.md", markDown, function (err) {
        if (err) {
            return console.log(err);
        }
        console.log("Success")
    })
}
promptUser()
    .then((answers) => {
     writeToFile (answers)
    })
