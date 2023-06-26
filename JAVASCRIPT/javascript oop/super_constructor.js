// kata kunci super digunakan untuk memanggil constructor super class
// artinya kata kunci super ini untuk mewarisi objek inheritance dari parent sebelunya
// jika di child class kita membuat constructor, maka kita wajib memanggil parent constuctor, walaupun diparent tidak ada constructor
// super digunakan ketika kita inggin mewarisi sebuah class, kita wajib mengguankan super untuk mewarisi constructor meskipun constructor di parent class gak ada


{
  class Employe {
    constructor(name) {
      this.name = name;
    }

    sayHelo(name) {
      console.log(`halo ${name} my name is employe ${this.name}`);
    }
  }

  class Manager extends Employe {
    constructor(name) {
      super(name);
    }
    sayHelo(name) {
      console.log(`halo ${name} my name is manager ${this.name}`);
    }
  }

  const eko = new Employe('eko');
  console.log(eko.name);
  eko.sayHelo('joko');
  const joko = new Manager('joko');
  console.log(joko.name);
  joko.sayHelo('budi');
}

{
  class Biasa {
    kurang(...values) {
      let result = values.reduce((accumulator, currentValue) => accumulator - currentValue);
      return result;
    }
  }

  class Cabang extends Biasa {
    constructor(plus) {
      super();
      this.plus = plus;
    }

    tambah(...values) {
      let result = values.reduce((accumulator, currentValue) => accumulator + currentValue);
      return result + this.plus;
    }

  }

  let tam = new Cabang(70);
  console.log(tam.tambah(10, 10, 10));

  let kur = new Biasa();
  console.log(kur.kurang(10,3,4));
}


