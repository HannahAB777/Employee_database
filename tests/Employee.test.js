const Employee = require('../lib/employee');

describe("to test the employee class", () =>{

    it("can used to create a new object", () =>{
        //testing a functional class
        const employee = new Employee('Hannah','764', 'Hannah.AllisonBatt@gmail.com');
        expect(employee).toBeInstanceOf(Employee); 

    });

    it('can accept a new name and return that value', () => {
        //testing getName() 
        const newName = "Josh";
        const employee = new Employee(newName, "678", "user123@gmail.com");
        expect(employee.name).toBe(newName);

    });

    it('can accept a new id and return that value', () => {
        //testing getID()
        const ID = "701";
        const employee = new Employee("Kate", ID, "mremail@email.com");
        expect(employee.id).toBe(ID);
    });

    it('can accept a new email and return that value', () => {
        //testing getEmail()
        const email = "supermail.mail.au";
        const employee = new Employee("Jenny", "345", email);
        expect(employee.email).toBe(email);
    });

    it('can return the role of the employee', () => {
        //testing getRole()
        const role = "Employee";
        const employee = new Employee("Aalia", "654", "mail@email.com");
        const result = employee.getRole();
        expect(result).toBe(role);
        
    });

});
