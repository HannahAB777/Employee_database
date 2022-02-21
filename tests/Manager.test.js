const Manager = require('../lib/manager');

describe("to test the manager class", () =>{

    it("can used to create a new object", () =>{
        //testing a functional class
        const manager = new Manager('Hannah','764', 'Hannah.AllisonBatt@gmail.com','700');
        expect(manager).toBeInstanceOf(Manager); 

    });

    it('can accept a new name and return that value', () => {
        //testing getName() 
        const newName = "Josh";
        const manager = new Manager(newName, "678", "user123@gmail.com", "500");
        expect(manager.name).toBe(newName);

    });

    it('can accept a new id and return that value', () => {
        //testing getID()
        const ID = "701";
        const manager = new Manager("Kate", ID, "mremail@email.com", "348");
        expect(manager.id).toBe(ID);
    });

    it('can accept a new email and return that value', () => {
        //testing getEmail()
        const email = "supermail.mail.au";
        const manager = new Manager("Jenny", "345", email, "654");
        expect(manager.email).toBe(email);
    });

    it('can return the role of the manager', () => {
        //testing getRole()
        const role = "Manager";
        const manager = new Manager("Aalia", "654", "mail@email.com", "647");
        const result = manager.getRole();
        expect(result).toBe(role);
        
    });

    it('can accept a new office number and return that value', ()=>{
       //testing getOfficeNumber()
        const truth = "234";
        const manager = new Manager("Tom", "382", "com@mail.email", truth);
        const result = manager.getOfficeNumber();
        expect(result).toBe(truth);
    });

});
