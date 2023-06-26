// arrow function juga bisa kita gunakan sebagai objek method
// namun arrow function tidak bisa mengakses arguments object, function generator, this dan super
// jadi pastikan gunakan arrow function hsnys memsng ketiks kita tidak butuh fitur2 diatas

const person = {
    name: 'pampam',
    halo: name => {
        console.log(this); // mengarah ke window, bukan ke objeknya
        console.log(`halo ${name}`)
    }
};
// jika ingin mengakses this didalam objek, selalu gunakan function biasa/ anoymous function
person.halo('budi');