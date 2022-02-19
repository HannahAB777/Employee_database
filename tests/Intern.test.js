const Intern = require('../lib/intern');


describe("to test the intern class", () =>{

    it("can used to create a new object", () =>{
        //testing a functional class
        const intern = new Intern('Hannah','764', 'Hannah.AllisonBatt@gmail.com', 'aSchool');
        expect(intern).toBeInstanceOf(Intern); 

    });

    it('can accept a new name and return that value', () => {
        //testing getName() 
        const newName = "Josh";
        const intern = new Intern(newName, "678", "user123@gmail.com", "aSchool");
        expect(intern.name).toBe(newName);

    });

    it('can accept a new id and return that value', () => {
        //testing getID()
        const ID = "701";
        const intern = new Intern("Kate", ID, "mremail@email.com", "aSchool");
        expect(intern.id).toBe(ID);
    });

    it('can accept a new email and return that value', () => {
        //testing getEmail()
        const email = "supermail.mail.au";
        const intern = new Intern("Jenny", "345", email, "aSchool");
        expect(intern.email).toBe(email);
    });

    it('can return the role of the intern', () => {
        //testing getRole()
        const role = "Intern";
        const intern = new Intern("Aalia", "654", "mail@email.com", "aSchool");
        const result = intern.getRole();
        expect(result).toBe(role);
        
    });

    it('can accept a new office number and return that value', ()=>{
       //testing getSchool()
        const truth = "aSchool";
        const intern = new Intern("Tom", "382", "com@mail.email", truth);
        expect(intern.getOfficeNumber).toBe(truth);
    });

});
