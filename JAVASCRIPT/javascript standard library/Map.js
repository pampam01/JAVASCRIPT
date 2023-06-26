// Map merupakan representasi dari struktur data key-value
// Map mirip tipe data object, hanya saja pada Map, semua method untuk manipulasi data sudah disediakan
// map mengikuti kontrak iterable, sehingga bisa diiterasi secara default

//PERBEDAAN MAP DAN OBJECT

// MAP INSTANCE METHOD & PROPPERTY
// size | panjang Map
// clear() | menghapus semua isi Map
// delete(key) | menghapus data Map berdasarkan key
// get(key): value | mendapatkan data Map berdasarkan key
// has(key) : boolean | mengecek apakah Map berisi data key
// set(key, value) | mengubah data Map dengan key = value
// forEach((key, value) => ) | melakukan iterasi Map

const map = new Map();
map.set("name", "pampam prayitno");
map.set("addres", "indonesia");

console.log(map);
console.log(map.get("name"));
console.log(map.get("addres"));
console.log(map.has("name"));
for(const element of map){
    console.log(`${element[0]}: ${element[1]}`);
}

map.forEach((value, key) => console.log(`${key} : ${value}`));