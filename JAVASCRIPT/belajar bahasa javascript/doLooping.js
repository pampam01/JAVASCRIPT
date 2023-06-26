// do while loop adalah perulangan yang mirip dengan while
// bedanya hanya pada pengecekan kondisi'
// pada pengecekan kondisi di while loop dilakukan diawal sebelum perulangan dilakukan,sedangkan do while loop dilakukan setelah perulangan dilakukann
//oleh karena itu dalam do while loop,minimal pasti sekali perulangan dilakukan walaupun kondisi tidak bernilai true

let counter = 100; // kalo di while loop ini akan dieksekusi dulu baru masuk  while
do{
    console.log(` perulangan do ke ${counter}`);
    counter++;
} while(counter <= 5);