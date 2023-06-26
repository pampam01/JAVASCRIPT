// callback merupakan mekanisme untuk memanggil kembali kode yang ada diprogram dari proses async
// callback biasanya dibuat dalam bentuk function as parameter, dan parameter function tersebut akan dieksekusi saat proses async selesai
// dengan menggunakan callback, program bisa menerima informasi yang dibutuhkan dari proses yang berjalan secara async

// ASYNC METHOD
//setTimeout(callback, timeMilis) digunakan untuk menjalankan proses async hanya SEKALI dalam waktu tertentu
//setInterval(callback,timeInMilis) digunakan untuk menjalankan proses async secara PERIODIK dalam waktu tertentu
const addElement = ()=> {
    const header = document.createElement('h1');
    header.textContent = "programmer zaman now";
    document.body.appendChild(header);
}

setTimeout(addElement, 5000);
document.writeln('<p> program selesai </p>')

