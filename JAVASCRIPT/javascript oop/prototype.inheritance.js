// sekarang kita tahu, bahwa prototype selalu memililiki parent, artinya dia adalah turunan, parent tertinggi adalah object prototype
//  melakukan inheritance ke prototype lain bisa dilakukan
// nnamun sedikit tricky, hal ini disebabkan karena javascript modern tidak direkomendasilkan lagi praktek oop menggunakan prototype karena sudah ada class



{
    // kode prototype inheritance yang salah
function Employe(name){
    this.name = name;
}
function Manager(name){
    this.name = name;
}
Manager.prototype = Employe.prototype;
Manager.prototype.sayHai = function(name){
    console.log(`halo ${name} my nname is Manager ${this.name} `);
}
Employe.prototype.sayHai = function(name){
    console.log(`halo ${name} my name is Employe ${this.name} `);
}

const employe = new Employe('pampam');
employe.sayHai('joko');

const manager = new Manager('prayitno');
manager.sayHai('joko ');

}

console.log(`\n`);
{
    // kode prototype inheritance yang benar
function Employe(name){
    this.name = name;
}
function Manager(name){
    this.name = name;
}
Manager.prototype = Object.create(Employe.prototype);
Manager.prototype.sayHai = function(name){
    console.log(`halo ${name} my nname is Manager ${this.name} `);
}
Employe.prototype.sayHai = function(name){
    console.log(`halo ${name} my name is Employe ${this.name}`);
}

const employe = new Employe('pampam');
employe.sayHai('joko');

const manager = new Manager('prayitno');
manager.sayHai('joko');

}


