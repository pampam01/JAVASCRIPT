// pada switch statment, kita sudah mengenal kata kunci break, yaitu untuk  menghentikan seluruh perulangan
// kata kunci continue digunnakan untuk menghentikan perulangan saat ini, lalu melanjutkan keperulangan selanjutnya


// kegunaan kode break
// counter bernilai 1;
// jika benar print kalimat 'ini perulangan ke sekian'
//tapi jika counter bernilai 10, hentikan perulangan
let counter = 0;
while(true){
    console.log(`perulangan ke ${counter}`);
    counter++

    if(counter >= 10){
        break;
    }
}

// kasus continue membuat perulangan bilangan ganjil
//buat for loop,  int i = 1 <50; i++
// jika i hasil bagi 2 sama dengan 0, maka lewatkan
// jika tidak maka cetak ke konsole

for(let i = 0; i < 20; i++)
{
    if( i % 2 == 0)
    {
        continue;
    }

    console.log(` bilangan ganjil : ${i}`);
}
    
