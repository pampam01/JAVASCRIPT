// Evsl merupakan function yang ddigunakan untuk mengeksekusi kode javascript dari String
// fitur ini sangat menarik, namun perlu hati-hati menggunakannya
// jika sampai salah penggunaan, maka bisa jadi malah  mengeksekusi kode program yang bisa menyebabkan masalah keamanan diwebsite kita

console.log(eval('2 + 2'));
console.log(eval(new String('2 + 2')));
console.log(eval('2 + 2') === eval('4'));
console.log(eval('2 + 2') === eval(new String('2 + 2')));


