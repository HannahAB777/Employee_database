const inquirer = require("inquirer");
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const renderHtml = require("./lib/create-html");
const managers = [];
const interns = [];
const engineers = [];
const fs = require('fs');
const renderManagerCard = require("./lib/createManagerCard");
const renderInternCard = require("./lib/createInternCard");
const renderEngineerCard = require("./lib/createEngineerCard");
const employeeCards = [];


function acquireEmployeeInfo() {

    inquirer.prompt([
        {
            type: 'list',
            message: 'please select team members role',
            choices: ['manager', 'engineer', 'intern'],
            name: 'role',
        },
        {
            type: 'input',
            message: 'please type team members full name',
            name: 'name',
        },
        {
            type: 'input',
            message: 'please type team members ID number',
            name: 'id',
        },
        {
            type: 'input',
            message: 'please type team members email address',
            name: 'email',
        },
        {
            type: 'input',
            message: 'please type team members office number',
            name: 'officeNumber',
            when: (answers) => answers.role === "manager",
        },
        {
            type: 'input',
            message: 'please type team members github link',
            name: 'github',
            when: (answers) => answers.role === "engineer",
        },
        {
            type: 'input',
            message: 'please type team members school name',
            name: 'school',
            when: (answers) => answers.role === "intern",
        },
        {
            type: 'confirm',
            message: 'would you like to add another team member?',
            name: 'addNew'
        }

    ]).then((answers) => {
        if (answers.role === "engineer") {

            engineers.push(new Engineer(answers.name, answers.id, answers.email, answers.github));

        }
        if (answers.role === "manager") {
            managers.push(new Manager(answers.name, answers.id, answers.email, answers.officeNumber));
        }
        if (answers.role === "intern") {
            interns.push(new Intern(answers.name, answers.id, answers.email, answers.school));
        }
        if (answers.addNew == true) {
            acquireEmployeeInfo();
        }
        if (answers.addNew == false) {

            for (let i = 0; i < engineers.length; i++) {
                const newEngineer = engineers[i];

                employeeCards.push(renderEngineerCard(newEngineer));
            }
            for (let i = 0; i < managers.length; i++) {
                const newManager = managers[i];

                employeeCards.push(renderManagerCard(newManager));
            }
            for (let i = 0; i < interns.length; i++) {
                const newIntern = interns[i];

                employeeCards.push(renderInternCard(newIntern));
            }

            fs.writeFile("./dist/index.html", renderHtml(employeeCards), (err) => err ? console.log(err) : console.log("new employee register created!"));


        }


    });

}

function init() {
    acquireEmployeeInfo();
}

init();