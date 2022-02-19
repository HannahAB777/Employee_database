const Engineer = require('../lib/engineer');

describe("to test the engineer class", () =>{

    it("can used to create a new object", () =>{
        //testing a functional class
        const engineer = new Engineer('Hannah','764', 'Hannah.AllisonBatt@gmail.com','githubbyhub@github');
        expect(engineer).toBeInstanceOf(Engineer); 

    });

    it('can accept a new name and return that value', () => {
        //testing getName() 
        const newName = "Josh";
        const engineer = new Engineer(newName, "678", "user123@gmail.com", "githubbyhub@github");
        expect(engineer.name).toBe(newName);

    });

    it('can accept a new id and return that value', () => {
        //testing getID()
        const ID = "701";
        const engineer = new Engineer("Kate", ID, "mremail@email.com", "githubbyhub@github");
        expect(engineer.id).toBe(ID);
    });

    it('can accept a new email and return that value', () => {
        //testing getEmail()
        const email = "supermail.mail.au";
        const engineer = new Engineer("Jenny", "345", email, "githubbyhub@github");
        expect(engineer.email).toBe(email);
    });

    it('can return the role of the engineer', () => {
        //testing getRole()
        const role = "Manager";
        const engineer = new Engineer("Aalia", "654", "mail@email.com", "githubbyhub@github");
        const result = engineer.getRole();
        expect(result).toBe(role);
        
    });

    it('can accept a new office number and return that value', ()=>{
       //testing getGithub()
        const truth = "githubbyhub@github";
        const engineer = new Engineer("Tom", "382", "com@mail.email", truth);
        expect(engineer.getOfficeNumber).toBe(truth);
    });

});
