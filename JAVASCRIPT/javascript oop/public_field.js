// public class field 
// ecmascript mendukung acccess modifier public dan private
// public artinya bisa diakses dari luar class, private hanya bisa diakses dari dalam class saja
// untuk membuat public field, kita bisa langsung buat nama field dengan value nya selevel dngan method

//contoh public field
class Costumer{
    firstName;
    lastName;
    balance = 0;

    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    sayHai(){

    }
}

const eko = new Costumer('pampam', 'prayitno');
console.log(eko);