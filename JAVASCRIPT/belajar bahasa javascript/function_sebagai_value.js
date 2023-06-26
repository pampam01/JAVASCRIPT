// function tgidak hanya bisa digunakan sebagai kode program yang dieksekuasi tapi bisa juga sbagai value
// artinya function bisa disimpan divariabel, bisa juga dikirim melalui parameter function lainyya

function sayHelo(name){
    console.log(` halo ${name}`);
}

let say = sayHelo;
say("joko");

// function sebagai parameter
function giveMeName(callback){
    callback("prayitno")// sayHelo("prayitno")
}

giveMeName(sayHelo);
giveMeName(say); // giveMeName(sayHelo);

function age(umur){
    console.log(`umur anda adalah ${umur}`);
}

let umur = age;
umur(30);

function umurPamap(callback){
    callback(90);// age(umur)
}
umurPamap(age);
umurPamap(umur);


function hari(nilaiHari){
    console.log(`hari ini hari ${nilaiHari}`);
}

let day = hari;
day("sabtu");

function kamis(callback){
    callback("kamis")
}
kamis(day);
