const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const jest = require("jest");

// Constructorsconst Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Employee = require('./lib/Employee');


let teamArray = [];

function initApp() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "managerName",
        message: "What's manager's name?",
        validate: (answer) => {
          if (answer !== "") {
            return true;
          }
          return "Please enter the team's manager's name.";
        }
      }
    ])
    .then((answers) => {
      const manager = new Manager(
        answers.managerName,
        answers.managerId,
        answers.managerEmail,
        answers.managerOfficeNumber       
      );
      teamArray.push(manager);
      console.log("team array ", answers);
      generateHTML();
    });
    function generateHTML() {

      // Create dist directory for index.html if it doesnt exist
      if (!fs.existsSync("./dist")) {
          fs.mkdirSync("./dist")
      }
      console.log("Generating Team Profile.... ");
      fs.writeFileSync("./dist/test.txt", JSON.stringify(teamArray))
  }
}
initApp();


