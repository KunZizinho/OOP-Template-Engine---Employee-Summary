const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const jest = require("jest");
// const OUTPUT_DIR = path.resolve(__dirname, "output");
// const outputPath = path.join(OUTPUT_DIR, "team.html");
const render = require("./lib/htmlRenderer");
const output = path.resolve(__dirname, "output", "team.html");
​
​
// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
let employees = [];

function createMngr() {
    inquirer.prompt([{
        type: "input",
        name: "managerName",
        message: "What is your manager's name?",
        validate: answer => {
            if (answer !== "") {
                return true;
            }
            return "Please enter at least one character.";
        }
        // o liniji 24 arrow funkcijom provjeravamo korisnikov input 
        // IF izjavom uvijetujemo da korisnikov input  nesmije biti jednak praznom stringu
    }, {
        type: "input",
        name: "managerId",
        message: "What is your manager's id?",
        validate: answer => {
            const pass = answer.match(
                /^[1-9]\d*$/
            );
            if (pass) {
                return true;
            }
            return "Please enter a positive number greater than zero.";
        }
    }, {
        type: "input",
        name: "managerEmail",
        message: "What is your manager's email?",
        validate: answer => {
            const pass = answer.match(
                /\S+@\S+\.\S+/
            );
            if (pass) {
                return true;
            }
            return "Please enter a valid email address.";
        }
    }, {
        type: "input",
        name: "managerOfficeNumber",
        message: "What is your manager's office number?",
        validate: answer => {
            const pass = answer.match(
                /^[1-9]\d*$/
            );
            if (pass) {
                return true;
            }
            return "Please enter a positive number greater than zero.";
        }
    }]).then(answers => {
        //  console.log(answers)
        const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber);
        console.log(manager)
        employees.push(manager)
        createTeam();
    })


}
// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!
// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.
function createTeam() {
    inquirer.prompt([{
        type: "list",
        name: "memberChoice",
        message: "Which type of team member would you like to add?",
        choices: [
            "Engineer",
            "Intern",
            "I don't want to add any more team members"
        ]
    }]).then(res => {
        console.log(res)
        switch (res.memberChoice) {
            case "Intern":
                // code block
                createIntern();
                break;
            case "Engineer":
                // code block
                createEngineer();
                break;
            default:
                // code block
                buildTeam();
        }
    })
}
function createIntern() {
    console.log("intern")
    inquirer.prompt([{
            type: "input",
            name: "internName",
            message: "What is your intern's name?",
            validate: answer => {
                if (answer !== "") {
                    return true;
                }
                return "Please enter at least one character.";
            }
        },
        {
            type: "input",
            name: "internId",
            message: "What is your intern's id?",
            validate: answer => {
                const pass = answer.match(
                    /^[1-9]\d*$/
                );
                if (pass) {
                    // if (idArray.includes(answer)) {
                    //     return "This ID is already taken. Please enter a different number.";
                    // } else {
                    //     return true;
                    // }

                }
                // return "Please enter a positive number greater than zero.";
                return true;
            }
        },
        {
            type: "input",
            name: "internEmail",
            message: "What is your intern's email?",
            validate: answer => {
                const pass = answer.match(
                    /\S+@\S+\.\S+/
                );
                if (pass) {
                    return true;
                }
                return "Please enter a valid email address.";
            }
        },
        {
            type: "input",
            name: "internSchool",
            message: "What is your intern's school?",
            validate: answer => {
                if (answer !== "") {
                    return true;
                }
                return "Please enter at least one character.";
            }
        }
    ]).then(answers => {
        //  console.log(answers)
        const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);

        employees.push(intern)
        createTeam();
    })
}
​
// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.
​
// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an 
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work!```

