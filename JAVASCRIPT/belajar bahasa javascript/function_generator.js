// function generator adalah function yang digunakan untuk membuat data generator
// generator adalah data yang bisa di iterasi seperti array
//untuk membuat function generator, kita perlu menggunakan tanda *(bintang) setelah kata function
// dan untuk mengembalikan data di tiap iterasi, kita bisa gunakan kata kunci yield diikuti oleh datanya

function* createNames(){
    yield "pampam";
    yield  "prayitno";
    yield "s.kom";
}
console.log(createNames());

for(let name of createNames()){
    console.log(name);
}

// generator itu sifatnya lazy
// artinya jikan data nbelum kita ambil daari generator, maka yield selanjutnya tidak akan dieksekusi
function* buatGanjil(value){
    for(let i = 1; i <= value; i++){
        if(i % 2 === 1){
            console.log(`yield ${i}`);
            yield i;
        }
    }
}

for(const ganjil of buatGanjil(30)){
    console.log(ganjil);
}

let madeGanjil = buatGanjil(30);
console.log(madeGanjil.next().value);
console.log(madeGanjil.next().value);
console.log(madeGanjil.next().value);
console.log(madeGanjil.next().value);



//eager, dibuat dulu semua baru dicetak
function buatGanjilArray(value){
    let result = [];
    for(let i = 1; i<= value; i++){
        console.log(`yield ${i}`);
        result.push(i);
    }
    return result;
}

let numbers = buatGanjilArray(30);

for(const number of numbers){
    console.log(number);
}


