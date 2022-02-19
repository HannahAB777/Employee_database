const inquirer = require("inquirer");
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/engineer");
const renderHtml = require("./lib/create-htlm");
const employees = [];

function acquireEmployeeInfo(){

}

prompt.inquirer([
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
        when:(answers) => answers.role === "manager",
    },
    {
        type: 'input',
        message: 'please type team members github link',
        name: 'github',
        when:(answers) => answers.role === "engineer",
    },
    {
        type: 'input',
        message: 'please type team members school name',
        name: 'school',
        when:(answers) => answers.role === "Intern",
    },
    {
        type: 'confirm',
        message: 'would you like to add another team member?',
        name: 'addNew'
    },

]).then((answers)=>{
    switch(answers.role) {
        case "engineer":
          employees.push(new Engineer(answes.name, answers.id, answers.email, answers.github));
          break;
        case "manager":
            employees.push(new Manager(answes.name, answers.id, answers.email, answers.github));
          break;
          case "intern":
            employees.push(new Intern(answes.name, answers.id, answers.email, answers.github));
    }
    
});






function createCard(){

}

function init(){
    acquireEmployeeInfo();
}

init();

//refractor qs
//tests for emplyee then do for all
//make cards for each 
//create html
//video creation and tests
//finish readme



////├── __tests__/             //jest tests
//│   ├── Employee.test.js
//│   ├── Engineer.test.js
//│   ├── Intern.test.js
//│   └── Manager.test.js
//├── dist/                  // rendered output (HTML) and CSS style sheet
//├── lib/                   // classes
//├── src/                   // template helper code
//├── .gitignore             // indicates which folders and files Git should ignore
//├── index.js               // runs the application
//└── package.json   



