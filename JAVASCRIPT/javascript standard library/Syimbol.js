//Syimbol merupakan tipe data yang digaransi akan selalu unique setiap kali kita membuat symbol
// Symbol kadang banyak digunakan untuk membuat key pada object


{
    const firstName = Symbol("prayitno");
    const lastName = Symbol("prayitno");
    console.log(firstName === lastName);
}
const firstName = Symbol('firstName');
const lastName = Symbol("lastName");

const person ={};
person[firstName] = "eko";
person[lastName] ="khannedy";

console.log(person);

{
    // kadang agak sulit membuat symbol harus  selalu menggunakan variabel
    //pembuatan syimbol juga bisa menggunakan static Symbol.for(value)
    // jika menggunakan key yang sama, Syimbol yang sama akan selalu dikembalikan

    //  symbol.for
    console.log(Symbol.for("firstName") === Symbol.for("firstName"));


    const orang = {};
    orang[Symbol.for("firstName")] = "eko";
    orang[Symbol.for("lastName")] = "ekhannedy";
    orang[Symbol.for("lastName")] = "ekhannedy";

    console.log(orang[Symbol.for("firstName")]);
    console.log(orang[Symbol.for("lastName")]);
    console.log(orang[Symbol.for("middleName")]);



}