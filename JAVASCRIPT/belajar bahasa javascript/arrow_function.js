// arrow function adalah pembuatan function yang paling sederhana dari function biasanya
// namun arrow function memiliki limitasi
// kekurangan arrow function/ limitasi
/* 1. tidak memiliki arguments objek
   2. tidak bisa menggunakan function generator
   3. tidak bisa mengakses this
   4. tidak bisa mengakses super*/

   const sayHello = (name)=> {
    console.log(`halo ${name}`);
   }

   sayHello('pampam');

   // cara yang lebih sederhana dari arro function
   // dengan syarat parameter harus satu dan kode didalam blok kode yang sederhana/ satu baris kode
   const helo = name => console.log(`halo ${name}`);
   helo('prayitno');

   // arrow function bisa menggembalikan value sama seperti function biasanya
   // jka mengunakan blok {} maka kita perlu menggunakan kata kunci return
   // jika tidak menggunnakan  blok, kita tidak perlu menggunakan return

   // pake block kode 
   let sum = (first, second) => console.log(first + second);
   sum(1,4);

    sum = (first, second)=> {
        return console.log(first + second);
    }

    sum(2,2);

    //arrow function sebagai parameter

    function giveMeName(callback){
        callback('kucing');
    }

    giveMeName(name => console.log(`halo ${name}`));

    