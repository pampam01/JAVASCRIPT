// sebuah class juga bisa melakukan pewarisan dari class lainnya dengan kata kunci extends
class Employe {
    sayHai(name) {
        console.log(` halo ${name} my name is emplyoye ${this.name}`);
    }
}

class Manager extends Employe {
    //sayHai(name) {
       // console.log(` halo ${name} my name is Manager ${this.name}`);
//  }
}

const budi = new Employe();
budi.name = 'budi';
budi.sayHai('joko')

const joko = new Manager();
joko.name = 'joko';
joko.sayHai('budi');

console.log(budi);
console.log(joko);
