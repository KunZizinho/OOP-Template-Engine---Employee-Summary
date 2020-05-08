// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.

const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email, GitHubName) {
        super(name, id, email)
        this.github = GitHubName
    }

    getRole() {
        if (this.name !== "" && this.id !== "" && this.email !== "" && this.GitHubName !== "") {
            return "Engineer"
        }
    }
    getGithub() {
        if (this.getGithub !== "") {
            return this.github;
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

module.exports = Engineer;