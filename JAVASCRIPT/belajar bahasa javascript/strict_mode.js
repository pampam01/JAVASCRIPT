// saat kita menjalankan kode program javascript secara default kode program kita berjalan dalam mode tidak stirct
// atau istilahnya sloppyy mode
// pada echmascript 5 diperkenalkan mode stirct, dimana ketika strict mode dijalankan, maka akan merubah beberapa cara kerja javascript
// 1. merubah beberapa javascipt error dari yang tadinya silent error, menjadi throw error(terlihat)
// 2. memperbaiki beberapa kesalahan engine javascript untuk optimalisasi
// 3. menolak beberapa kode perinntah yang kedepannya akan digunakan di echmascript

// CARA MENYALAKAN STRICT MODE
// kita bisa menambahkan 'use strict ' pada baris awal file javascript kita
// atau bisa ditambahkan diawal function kita

function useStrictMode(){
    'use strict'; // strict mode nyala

    const person={
        name:'eko'
    }
    // error
    /*with(person){
        console.log(name);
    }*/
}

useStrictMode();