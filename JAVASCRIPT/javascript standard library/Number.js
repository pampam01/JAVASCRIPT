// Number merupakan function yang digunakan untuk melakukan konveri ke tipe data number
// jika data tidak bisa dikonversi kenumber, secara otomatis hasilnya adalah NAN

const input = "12345";
const number = Number(input);

console.log(typeof input);
console.log(typeof number);
console.log(number);

console.log(Number("salah"));


// Number static property
console.log(Number.MIN_VALUE);
console.log(Number.MAX_VALUE);
console.log(Number.MIN_SAFE_INTEGER);
console.log(Number.MAX_SAFE_INTEGER);

// Number static method
const data = Number("12345");
const pampam = Number("pampam");

console.log(Number.isInteger(data));
console.log(Number.isNaN(data));

console.log(Number.isInteger(pampam));
console.log(Number.isNaN(pampam));

// Number instance method
const nomor = Number(123459);
console.log(nomor.toString(2)); //. bil biner
console.log(nomor.toString(10)); // desimal
console.log(nomor.toString(8)); // oktal
console.log(nomor.toString(16)); //  hexadesimal

console.log(nomor.toLocaleString("id-ID"));
console.log(nomor.toLocaleString("en-US"));





