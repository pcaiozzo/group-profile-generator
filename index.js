const inquirer = require("inquirer");
const fs = require("fs");
const generateSite = require("./src/generate-site.js");
const path = require("path");
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

let employees = [];

function createMember() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "employeeType",
        message: "Which type of employee are you going to add to the team?",
        choices: ["Manager", "Engineer", "Intern", "None"],
      },
    ])
    .then((answer) => {
      switch (answer.employeeType) {
        case "Manager":
          addManager();
          break;
        case "Engineer":
          addEngineer();
          break;
        case "Intern":
          addIntern();
          break;
        case "None":
          buildTeam();
          break;
      }
    });
};

function addManager() {
  inquirer.prompt ([
  {
    type: "input",
    name: "name",
    message: "What is the team manger's name?",
  },
  {
    type: "input",
    name: "id",
    message: "What is the team manager's ID number?",
  },
  {
    type: "input",
    name: "email",
    message: "What is the team manager's email address?",
  },
  {
    type: "input",
    name: "officeNumber",
    message: "What is the team manager's office number?",
  },
])
    .then((answers) => {
        const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
        employees.push(manager);
        createMember();
    });
};

  function addIntern() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "name",
          message: "What is the intern's name?",
        },
        {
          type: "input",
          name: "id",
          message: "What's their employee ID?",
        },
        {
          type: "input",
          name: "email",
          message: "What's the intern's email?",
        },
        {
          type: "input",
          name: "school",
          message: "What's the intern's school?",
        },
      ])
      .then((answers) => {
        const intern = new Intern(
          answers.name,
          answers.id,
          answers.email,
          answers.school
        );
        employees.push(intern);
        createMember();
      });
  };

function addEngineer()  {
  inquirer.prompt([
  {
    type: "input",
    name: "name",
    message: "What's the engineer's name?",
  },
  {
    type: "input",
    name: "id",
    message: "What's the intern's employee ID?",
  },
  {
    type: "input",
    name: "email",
    message: "What's the engineer's email?",
  },
  {
    type: "input",
    name: "github",
    message: "What's the engineer's GitHub?",
  },
])
    .then((answers) => {
        const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
        employees.push(engineer);
        createMember();
    });
};

const buildTeam = () => {
  console.log(`
    ==============
    Team is complete!
    ==============
    `);

  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR);
  }
  fs.writeFileSync(outputPath, generateSite(employees), "utf-8");
};

addManager();