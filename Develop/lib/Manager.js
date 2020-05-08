// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.

const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email)
        this.officeNumber = officeNumber
    }

    getRole() {
        if (this.name !== "" && this.id !== "" && this.email !== "" && this.officeNumber !== "") {
            return "Manager"
        }
    }
    getOfficeNumber() {
        if (this.officeNumber !== "") {
            return this.officeNumber;
        }
    }
}
// const testValue = "GitHubUser";
// const testRole = "Engineer";
//   console.log("return: ",e.getGithub());
//   console.log("getRole: ",e.getRole());
//   console.log("github Name: ",e.github);
//   console.log(e)

module.exports = Manager;