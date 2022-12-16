// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown')
const path = require('path')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is your project title?",

    },
    {
        type: "input",
        name: "description",
        message: "Please enter a brief project description:",
    },
    {
        type: "input",
        name: "install",
        message: "Please enter in any necessary instructions for installation:",
    },
    {
        type: "input",
        name: "useage",
        message: "Please enter in information on useage:",
    },
    {
        type: "input",
        name: "contributions",
        message: "Please enter in information on contributions:",

    },
    {
        type: "input",
        name: "test",
        message: "Please enter in information on tests:",
    },
    {
        type: "list",
        name: "license",
        message: "Please pick a license option from the list below:",
        choices: [
            "None",
            "Apache",
            "ISC",
            "GNU",
            "Eclipse",
            "MIT",
            "Mozilla",
        ]
    },
    {
        type: "list",
        name: "color",
        message: "What color should the license badge be?",
        choices: [
            "n/a",
            "brightgreen",
            "green",
            "yellowgreen",
            "yellow",
            "orange",
            "red",
            "blue",
            "lightgrey",
        ],
    },
    {
        type: "input",
        name: "username",
        message: "What is your Github username?",
    },
    {
        type: "input",
        name: "email",
        message: "What is your e-mail address?",
    }
];


// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((inquirerResponse, data) => {
            console.log(inquirerResponse);

            const fileName = path.join(__dirname, "output", "README.MD");

            // TODO: Create a function to write README file
            fs.writeFile(fileName, generateMarkdown(inquirerResponse), (err) => {
                err ? console.log(err)
                    : console.log("Success! Your README has been generated.")
            })
        })
        .catch((err) => {
            console.log(err);
        })
}

// Function call to initialize app
init();
