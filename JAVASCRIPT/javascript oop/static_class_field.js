//KATA KUNCI STATIC
// staic adalah kata kunci yang bisa kita tambahkan sebekun=m field atau mrthod. bisanya ketika kita membuat
// field atau method, maka secara otomatis field akan menjadi property di instance object, dan method akan menjadi function diprototype
// jiks kits tsmbshksn static msks hsl itu tidak terjadi
// jika kita tambahkan static dalam class field, ssecara otomatis field tersebut bukaan lagi milik instance object, melaikan milik
//  classnyaa sendiri
// biasanya static digunakan jika kita ingin mrmbuat utility field atau function
// cara amengakses static class field pun tidak lagi lewat object, melainkan lewat classnya
// static class field bisa diartikan sifatnya global, tidak peduli diakses dimana atau siapa yang mengaksesnya. hasilnya sama

class Config{
    static name='belajar javascript';
    static version = 1.0;
    static author = 'eko khannedy'
}

config = new Config();
console.log(config);

//  cara mengakses static class field
console.log(Config.name);
console.log(Config.version);
console.log(Config.author);
