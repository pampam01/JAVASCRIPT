//ENCODE
// saat kita menulis url, kadang kita ingin menambahkan informasi tambahan seperti query parameter misalnya
// url sendiri sudah mmemiliki standard encoding penulisan url
// standard encoding ini dilakukan agar penulisan url aman ketika ditrima oleh server
// aman disini dalam artiaan informasi url tidak berubah
// contoh paling sederhana, misal walaupun kita bisa mengirim spasi dalam url, tapi disarankan untuk di encode agar nilai spasi tidak benar-benar terlihat seperti spasi pada url nya

// CONNTOH MASALAH JIKA TIDAK MENGGUNAKAN ENCODE
// midsl sds wuery parameter dengan nama data, lalu kita ingin mengirimkan nilai kesana
//misal nilainya addalah &eko=&eko, alhasil url nya sebagai berikut
//http://contoh.com?data=&eko=eko&
// url diatas terlihataaa tidak ada massalah, tapi sebenarnya ketika ditrima server, parameter data bernilai kosong, kenapa? karena & dianggap sebagai pemisah antar parameter
// artinya tanda seperti & dan lain-lain perlu di encode, agar tidak terjadi kesalahan data yang dikirim


// encodeURI(value) | melakukan encode value, namun  karakter yang dipesan di URL tidak akan berubah  ;,/?:@&=+$#
//encodeURIComponent(value)  | melakukan encode value semua carakter
// decodeURI(encoded) | melakukan decode value hasil encodeURI()
// decodeURIComponent(encoded) | melakukan decode value hasil encodeURIComponent()

const url = "http://contoh.com/?name= eko kurniawan khannedy";

console.log(url);

const encode = encodeURI(url);
console.log(encode);

const encodeUrlComponent = encodeURIComponent(url);
console.log(encodeUrlComponent);// kena encode semua, ink jadi kacau

const decode = decodeURI(encode);
console.log(decode);


{
    const value  = "eko&Kurniawan=khannedy";
    const url = "http://contoh.com/?name=";
    console.log(url + value);

    const encoded = encodeURIComponent(value);
    console.log(url + encoded);

    const decoded = decodeURIComponent(encoded);
    console.log(url + decoded);

}