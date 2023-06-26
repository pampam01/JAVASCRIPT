// rest parameter adalah fitur dimana kita bisa mengirim data sebanyak banyaknya pada satu parameter dan secara otomatis
//akan dikonversi menjadi array
//rest parameter hanya boleh ada satu didalam function
function sum(value, ...datas){
    let total = 0;
    console.log(datas);
    for(const data of datas){
        total += data;
    }
    console.log(`total ${value} adalah ${total}`);
}

sum('jeruk', 1,4,3);
sum('mangga',2,3,54,6);

// jika kita terlajur mempunnyai data array dan ingin memasukkannya ke dalam rest parameter, akan terjadi kekacauan
//contoh salah
sum("apple", [2.1,2,1,4]);
// cara menangani kasus ini adalah menggunakan sebuah spread operator yaitu ... didepan aray
sum('potato', ...[3,4,5,1]); //contoh bener


// arguments
//sebelum ada fitur rest parameter, dulu ada fitur yang bernama arguments
// ia bisa mendapatkan semua jenis data
// tapi kelemahannya ia harus berdiri sendiri, tidak boleh didahului oleh parameter lain

function oldSum(){
    let total = 0;
    for(item of arguments){
        total += item;
    }

    console.log(`totalnya adalah ${total} `);
}

oldSum(3,34,5,6,6,12,7,3,9.0);
oldSum(3,34,5,6,6,12,7,3,9.0, -80);


