const person = {};
person["nama lengkap "] = "pampam prayitno";
person["nama panggilan"] = "pampam";
person["umur"] = 19;
person["jurusan"] = "ti";

console.table(person);

delete person["jurusan"];
console.table(person);

const pampam = {
  nama: 'pampam',
  nim: 8020220066,
  kelas: '07PT1'
}

console.table(pampam);
console.log(`nama : ${pampam.nama}`);
console.log(`nim : ${pampam.nim}`);
console.log(`jurusan : ${pampam.kelas}`);

