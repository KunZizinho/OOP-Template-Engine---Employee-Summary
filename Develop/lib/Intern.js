// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.

const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email)
        this.school = school
    }

    getRole() {
        if (this.name !== "" && this.id !== "" && this.email !== "" && this.school !== "") {
            return "Intern"
        }
    }
    getSchool() {
        if (this.school !== "") {
            return this.school;
        }
    }
}
// const testValue = "GitHubUser";
// const testRole = "Engineer";
//   const e = new Engineer("Foo", 1, "test@test.com", testValue);
//   console.log("return: ",e.getGithub());
//   console.log("getRole: ",e.getRole());
//   console.log("github Name: ",e.github);
//   console.log(e)

module.exports = Intern;