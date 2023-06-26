// kata kunci this adalah referensi keobjek milik siapa
// tiapn lokasi kata kunci this, bisa berbeda-beda referensi pemiliknya
// dalam objek method, this merupakan referensi ke object pemillik functionnya
// di global scope , this merupakan referensi ke global objek (browser biasanya window)
// dalam function this merupakan referensi ke global objek
// difunction strict mode, this adalah undefined
// dalam event, this merupakan referensi ke element yang menerima event

console.log(this);

function sampel() {
    console.info(this);

    function inner() {
        console.log(this);
    }
    inner();
}
sampel();

const person ={
    name: 'pampam',
    sayHalo: function (name){
        console.log(this);
        console.log(`halo ${name} nama saya ${this.name} `);
    }
}

person.sayHalo('onad');