// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
//const questions = [
//     "What is the title of your project?",
//     "Describe your projects purpose.",
//     "How do you install your project?",
//     "How do you use your project?",
//     "Choose a license for your project.",
//     "What commands are needed to test the project?",
//     "How can someone contribute to your project?",
//     "Provide your github username.",
//     "Provide your email address.",
// ];

// TODO: Create a function to write README file

//const fs = require('fs');

function writeToFile(fileName, data) {
  fs.writeFile(fileName, generateMarkdown(data), (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log('README file created!');
  });
}




// TODO: Create a function to initialize app
function init() {
    inquirer
  .prompt([
    {
      type: 'input',
      message: "What is the title of your project?",
      name: "title",
    },
    {
      type: "input",
      message: "Describe your projects purpose.",
      name: "purpose",
    },
    {
      type: "input",
      message: "How do you install your project?",
      name: "install",
    },
    {
        type: 'input',
        message: "How do you use your project?",
        name: "use",
      },
      {
        type: "list",
        message: "Choose a license for your project.",
        name: "license",
        choices: ["MIT", "Apache", "Boost"]
      },
      {
        type: "input",
        message: "What commands are needed to test the project?",
        name: "commands",
      },
      {
        type: 'input',
        message: "How can someone contribute to your project?",
        name: "contribute",
      },
      {
        type: "input",
        message: "Provide your github username.",
        name: "github",
      },
      {
        type: "input",
        message: "Provide your email address.",
        name: "email",
      }, 
  ])
  .then((data) => {
const fileName = "README.md";
writeToFile(fileName, data);
  }  
  );
}

// Function call to initialize app
init();
