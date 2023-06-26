// kadamg ada kasus kita ingin mengecek apakah sebuah objek merupakan instance dari class tertentu atau bukan
// kita tidak akan bisa menggunakan operator typeof, karena ojek dari class, jika kita gunakan operator typeof maka hasilnya akan object
// operator instanceof akan menghasilkan boolean, true jika benar itu terdapat di instance object

class Employe{

}

class Manager{

}

const budi = new Employe();
const eko = new Manager();

console.log( typeof budi);
console.log( typeof eko);

console.log( budi instanceof Employe); //true
console.log( eko instanceof Employe);// false
console.log( budi instanceof Manager);//false
console.log( eko instanceof Manager);//true

console.log(`\n`);
// operator instanceof juga mendukung 

class Bos {

}
class Pegawai extends Bos{

}

const kiboy = new Bos();
const jonathan = new Pegawai();

console.log(kiboy instanceof Bos);
console.log(jonathan instanceof Bos);
console.log(kiboy instanceof Pegawai);
console.log(jonathan instanceof Pegawai);








