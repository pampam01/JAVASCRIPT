// array loop
// method forEach juga bisa untuk looping data

const array = ['pampam', 'prayitno', 's,kom'];


array.forEach((value, index) => console.log(`${index} ${value}`));

//ARRAY QUEQUE
// dalam struktur data, terdapat tipe struktur data bernama QUEUE(antrian) 
// dimana data masuk akan diposisikan diurutan paling belakang
// sedangkan data keluar akan diposisikan dari urutan paling depan
// mirip sekali dengan antrian, istilahnya first in first out
// kita bisa menggunakan Array dengan bantuan function push() untuk menambah data dibelakang
// dan shift() untuk mengambil dan menghapus data paling depan

const queue = [];

queue.push("eko");
queue.push("kurniawan");
queue.push("khannedy");
console.log(queue)

queue.shift();
//queue.shift();


console.log(queue);


// ARRAY STACK
//struktur daa stack(tumpukan) kebalikan dari queue, dimana aturannya mirip dengan tumpukan kartu
// saat kita memasukan data, kita akan memasukkan diurutan paling belakang( atau atas)
// saat kita mengambil data, kita akan mengambil data dari paling belakang(atau atas)
// untuk menambah diurutan belakang, kita bisa menggunakan function push()
// untuk mengambil dan menghapus paling belakang, kita bisa menggunakan function pop()

const stack =[];
stack.push("eko");
stack.push("kurniawan");
stack.push("khannedy");
console.log(stack);

stack.pop();
//stack.pop();

console.log(stack);

// ARRAY SEARCH
// memiliki banyak function untuk melakukan pencarian
// function find( value => boolean): value| untuk mencari data sesuai dengan kondisi
// function findIndex(value = boolean): number | mencari data index sesuai dengan kondisi
// function includes(value): boolean| untuk mengecek apakah terdapat data
// indexOf(value): number| mengecek posisi index data
//lastIndexOf(value):number| mengecek posisi index data terakhir

const source = [1,2,3,4,5,1,2,3,4,5];
console.log(source.find(value => value > 3)); // 4
console.log(source.findIndex(value => value > 3));  // 3
console.log(source.includes(5)); //ttrue
console.log(source.indexOf(5));//4
console.log(source.lastIndexOf(5)); //9

{
    //function filter() melakukan penyaringan data yang kondisinya bernilai true
    const array = [1,2,3,4,5,6,7,8,9,10];

   console.log(array.filter(value => value % 2 === 0));
   console.log(array.filter(function(value ){ return value % 2 === 1}));

    
}


{
    //ARRAY TRANSFORM
    //map( value => result);: Array<result>| melakukan transform tiap value dan menghasilkan array result
    // reduce(resultBefore, value => result): result| melakukan transform dengan menggunakan value array dan value selanjutnya, 
    //                                                lalu hasilnya dilanjuutkan ke iterasi berikutnya
    // reduceRight(resultBefore, value => result) sama seperti reduce(), namun dilakukan dari belakang

    const names = "pampam prayitno s.Kom".split(" ");
    console.log(names.map(value => value.toLocaleUpperCase("id-ID")));

    const pam = ['pampam', 'prayitno', 'khennedyy'];

    const numbers = [1,2,3,4,5,6,7,8,9,10];
    console.log(numbers.reduce((accumulator, currentValue) => accumulator + currentValue));
    console.log(numbers.reduceRight((accumulator, currentValue) => accumulator + currentValue));
    console.log(names.reduceRight((before, value) => before + " " + value));


}



