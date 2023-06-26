// set merupakan implementasi dari struktur data yang berisikan data-data unique
// Set mirip seperti array, hanya saja isi datanya selalu unique
// jika kita menambahkan data yang sama, maka data hanya akan ditrima satu saja
// Set mengimplementasikan kontrak iterable, sehingga bisa diiterasi secara default

//METHOD DAN PROPERTY SET
// size | panjang Set
// add(value)  | menambahkan data ke Set
// has(value)  | mengecek apakah Set memiliki value
// delete(value) | menghapus value dari Set
// forEach( value => )  | melakukan iterasi Set

const set = new Set();
set.add('eko');
set.add('eko');
set.add('eko');
set.add("khannedy");
set.add("kurniawan");

console.log(set);
set.forEach( value => console.log(value));