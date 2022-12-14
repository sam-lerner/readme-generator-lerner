// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "projectTitle",
        message: "What is your project title?",

    },
    {
        type: "input",
        name: "projectDescription",
        message: "Please enter a brief project description:",
    },
    {
        type: "input",
        name: "projectInstall",
        message: "Please enter in any necessary instructions for installation:",
    },
    {
        type: "input",
        name: "projectUseage",
        message: "Please enter in information on useage:",
    },
    {
        type: "input",
        name: "projectContributions",
        message: "Please enter in information on contributions:",

    },
    {
        type: "input",
        name: "projectTest",
        message: "Please enter in information on tests:",
    },
    {
        type: "list",
        name: "projectLicense",
        message: "Please pick a license option from the list below:",
        choices: [
            "None",
            "Apache",
            "Boost",
            "GNU",
            "Creative Commons",
            "Eclipse",
            "MIT",
            "Mozilla",
            "The Unlicense",
        ]
    },
    {
        type: "input",
        name: "userName",
        message: "What is your Githup username?",
    },
    {
        type: "input",
        name: "eMail",
        message: "What is your e-mail address?",
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeToFile('./generatedreadme.md', data, err => {
        if (err) {
            return console.log(err)
        }
        console.log("Success! Your README has been generated.")
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((inquirerResponse, data) => {
            console.log(inquirerResponse);

        })
        .catch((err) => {
            console.log(err);
        })
}

// Function call to initialize app
init();
