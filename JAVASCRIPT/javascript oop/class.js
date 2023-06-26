// class adalah fitur baru di ecmascript6 
// dengan adanya class, kita tidak perlu lagi menggunakan constructor function

class Person {

}
Person.prototype.sayHai = function (name) {
  console.log(`halo ${name}`);
}
const eko = new Person();
console.log(eko);
eko.sayHai('eko');


// CONSTRUCTOR DI CLASS
// diclass kita juga bisa menambahkan constructor, kita juga bisa menambahkan parameter didalamnya
// untuk membuat constructor diclass, kita bisa menggunakan kata kunci constructor

class Orang {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}
const pampam = new Orang('pampam', 'prayitno');
console.log(`${pampam.firstName} ${pampam.lastName}`);

// METHOD DI CLASS
// membuat method diclass sebaiknya menambahkannya di prototype bukan di instance objeknya
class People{
  constructor(name, age){
    this.name = name;
    this.age = age;
  }

  sayHai(name){
    console.log(`halo ${name} my name is ${this.name} my age is ${this.age}`);
  }
}
const hod = new People('hod', 12);
hod.sayHai('pampam');
const yaku =  new People('yaku', 90);
yaku.sayHai('joko');

