// closure adalah kombinasi function dan bundel referensi ke data disekitarnya
// kita sudah tau bahwa local scope tidak bisa diakses diluar scope nya
// dengan kemampuan closure, kita bisa membuat sebuah function dilokal scope dan referensi data disekitar local scope tersebut keluar scopenya


function creadeAdder(value){
    const owner = 'prayitno';

   return function add(parameter){
        console.log(owner);
        return value + parameter;
    }
    
}

const addTwo = creadeAdder(5);
console.log(addTwo(10));
console.log(addTwo(20));

