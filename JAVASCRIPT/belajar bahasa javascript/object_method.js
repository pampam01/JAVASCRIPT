// pada tipe data objek kita sering membahas tentang property di objek
// karna sebenarnya function juga mmerupakan salah satu tipe data,
// jadi function pun sebenar ya bisa ditambahkan sebagai property di object
//cara pembuatannya pun sama dengan function sebagai value
//function diobjek kadang disebut juga sebagai object method

// contoh

let person = {
    name:"pampam",
    halo: name => console.log(` halo ${name}`)
}

console.log(person.name);
person.halo();
person.halo('prayitno');


function hai(hari){
    console.log(`hari ini hari ${hari}`);
}

const people = {
    name:'joko',
    hai: hai
}
people.hai('kamis');

// menambahkan method ke objek
const pampam = {
    name:'pampam'
};

pampam.umur = function(umr){
    console.log(` nama ${this.name} umur : ${umr}`);
};

pampam.umur(80);