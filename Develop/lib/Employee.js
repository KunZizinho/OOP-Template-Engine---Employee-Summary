// TODO: Write code to define and export the Employee class

class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email
    }

    getName() {
        if (this.name !== "") {
            return this.name;
        } else {
            console.log("You should type a name");
        }
    };
    getId() {
        if (this.id !== "") {
            return this.id;
        } else {
            console.log("you should type an id")
        }
    };
    getEmail() {
        if (checkEmail(this.email) === true) {
            return this.email;
        } else {
            console.log("this is not an email")
        }
    };
    getRole() {
        if (this.name !== "" && this.id !== "" && this.email !== "") {
            return "Employee"
        }
    };
}


function checkEmail(email) {
    let re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}
// const name = "Alice";
// const testValue = 100;
// const testEmail = "test@test.com";
// const e = new Employee(name,testValue,testEmail);
// console.log(e);
// console.log(e.getName());
// console.log(e.getId());
// console.log(e.getRole());

module.exports = Employee;