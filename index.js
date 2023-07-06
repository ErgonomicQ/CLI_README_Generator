// required modules + the generateMarkdown.js file that draws upon these answers

const inquirer = require('inquirer');
const fs = require("fs");
const generateMarkdown  = require('./utils/generateMarkdown');

// Questions asked by the app for the user to answer
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Enter the title of your project:',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter the description of your project:',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'How do you install this app(if applicable):',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How do you use this app:',
    },
    {
        type: 'input',
        name: 'contributions',
        message: 'Who helped in the creation of this app:',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a licence for your project:',
        choices: ['MIT', 'Apache-2.0', 'GPL-3.0', 'ISC', 'None'],
        default: 'MIT',
    },
    {
        type: 'input',
        name: 'githubUser',
        message: 'Enter your GitHub username',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address',
    },
];

// Function will collect answers, then write to a readme.md
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.error("error generating README.md", err);
        } else {
            console.log("README successfully generated!");
        }
    });
}

// this function will first run the inquirer, collect the users input then call the writeToFile function. 
function init() {
    inquirer.prompt(questions)
    .then((data) => {
        const markdownCreation = generateMarkdown(data);
        writeToFile('README.md', markdownCreation);
    });
}

// function call
init();
