// kita bisa menggunakan getter dan setter di class
class Person{
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    get fullName(){
        return ` ${this.firstName} ${this.lastName}`
    }

    set fullName(value){
        let result = value.split(' ');
        this.firstName = result[0];
        this.lastName = result[1];
    }
}

class Personal extends Person{
    constructor(firstName, lastName){
        super(firstName, lastName);
    }
}

const pampam = new Personal('pampam', 'prayitno');
console.log(pampam.fullName);
pampam.fullName = 'joko santoso';
console.log(pampam.fullName);