// scpe merupakan akses dari sebuah data
// ada dua jenis scope. local scope dan global scope
//setiap kita membuat function, maka kita akan membuat local scope untuk function tersebut
// data global scope bisa diakses lewat local scope, 
// namun data local scope hanya bisa diakses oleh local scope tersebut atau local scope dibawah nya(kasus function dalam function) 

let counter = 0; //global scope

function hitMe(){
    // local scope hitMe
    counter++; // kita bisa mengaksesnya
}

function other(){
    // local scope other
    // disini bisa akses htMe
    hitMe();
    // namun tidak bisa mengakses code yng ad didlam local scope hitMe();
}

hitMe();
hitMe();
hitMe();

console.log(counter);

// kode local scope

function first(){
    let far1 = 'first';
}

function second(){
    let var2 = 'second';
}

//console.log(far1) // error
//console.log(far2) // error


// nested function
function nested(){
    let nest = 'the nest';

     function newNested(){
        console.log(nest);
    }
    newNested();
}

nested();
