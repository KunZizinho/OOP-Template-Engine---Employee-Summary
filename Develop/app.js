const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");


const output = path.resolve(__dirname, "output", "team.html");
// const outputPath = path.join(OUTPUT_DIR, "./output/team.html");
// const render = require("./lib/htmlRenderer");​​
const render = require("./lib/htmlRenderer");


// Write code to use inquirer to gather information about the development team members,
let employees = [];

// otvorili smo funkciju kojom cemo kreirati menadera
//inquirerom smo zatrazili korisnikov input
//zatim smo svojstvom validate i arrow funkcijom definirali da ako korisnik ne utipka nista da mu stigne poruka da 
// stavi barem 1 karakter

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

    //liniji 73 

}

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

function createEngineer() {
    console.log("engineer")
    inquirer.prompt([{
            type: "input",
            name: "engineerName",
            message: "What is your engineer's name?",
            validate: answer => {
                if (answer !== "") {
                    return true;
                }
                return "Please enter at least one character.";
            }
        },
        {
            type: "input",
            name: "engineerId",
            message: "What is your engineer's id?",
            validate: answer => {
                const pass = answer.match(
                    /^[1-9]\d*$/
                );
                if (pass) {
                    //  if (idArray.includes(answer)) {
                    //      return "This ID is already taken. Please enter a different number.";
                    //  } else {
                    //      return true;
                    //  }

                }
                //  return "Please enter a positive number greater than zero.";
                return true;
            }
        },
        {
            type: "input",
            name: "engineerEmail",
            message: "What is your engineer's email?",
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
            name: "engineerGithub",
            message: "What is your engineer's GitHub username?",
            validate: answer => {
                if (answer !== "") {
                    return true;
                }
                return "Please enter at least one character.";
            }
        }
    ]).then(answers => {
        //  console.log(answers)
        const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);

        employees.push(engineer)
        createTeam();
    })

}


function buildTeam() {
    fs.writeFileSync(output, render(employees), "utf8")
}
createMngr();