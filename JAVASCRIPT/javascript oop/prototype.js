// saat kita membuat objek daari konstructor function, objek tersebut disebut instance, semua property(value dan method) akan berada di instance objeknya
//setiap kita membuaat sebuah constructor function, maka scara otomatis akan dibuatka prototypenya
// saat kita membuata sebuah objek instance, secara otomatis objek tersebut adalah turunan dari constructor.prototypenya
// untuk mengakses prototype memilih sebuah instance, kita bisa menggunakan__proto_

function Person(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
    this.say = function(name){
        console.log(` halo ${name} my name is ${this.firstName} ${this.lastName}`);
    }
}

// cara menambahkan property ke prototype ada 2
// mengisinya kedalam function utama(disini Person)
// atau menggunakan .ptototype
Person.prototype.sayBye = () => console.log('goof bye');
Person.prototype.run = function(){
    console.log(`${this.firstName} iss runing`);
}

const eko = new Person('eko', 'khanedy');
console.log(eko);

const budi = new Person('budi', 'gunawan');
console.log(budi);
budi.sayBye();
budi.run();
