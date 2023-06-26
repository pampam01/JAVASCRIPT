// nested function atau function bersarng
// tidak ada batasan dimana kita bisa membuat function
// kita bisa membuat function didalam function
// function didalam function disebut inner function
// inner function hanya bisa diakses didalam local scope dan tidak bisa diakses lewat global  scope
function outer(){
    function inner(){
        console.log("inner");
    }

    inner();
    inner();
}

outer();
//inner(); hasilnya eror

function nama(){
    let nama = 'pampam';

    function tampilNama(){
        console.log(nama);


    }
    return tampilNama();
}
nama();

// fektori function

function keadaan(waktu){
    return function(nama){
        console.log(`halo ${nama} selamat ${waktu}`);
    }


}

let selamatPagi = keadaan('pagi');
let selamatsiang = keadaan('siang');
let selamatMalam = keadaan('malam');

selamatPagi('pampam');
selamatsiang('prayitno');
selamatMalam('joko');
console.dir(selamatPagi);