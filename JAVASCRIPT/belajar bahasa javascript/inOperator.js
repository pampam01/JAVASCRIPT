// in operator digunakan untuk mengecek apakah sebuah properti ada didalam objek  atau tidak
// return nya berupa boolean
// selain itu in operator jufa bisa digunakan untuk mengecek array

const person = {
  firstName: "pammpam",
  lastName: "prayitno"
}


if("firstName" in person){
  console.log("firstName" in person);
  console.log(` halo ${person.firstName}`);
}
// peringatan
// in operator js akan mengecek apakah sebuah property atau indeks ada atau tidak
//jadi walaupun nilai properti atau indeksnya undefined atau null, maka tetap dianggap ada. hati2x
const orang = {
  nama: undefined
} 
const result = "nama" in orang;
console.log(result);

const names = [null, "pampam", null];
const namesResult = 0 in names;
console.log(namesResult);