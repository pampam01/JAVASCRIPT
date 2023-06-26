// didalam constructor kita biasanya membuat property baik itu berisi value ataupun function
// didalam constructor, kita bisa memanggil constructor lain, dengan begitu kita bisa mewarisi semua property yang dibuat diconstructor lain tersebut
// untuk memanggil constructor lain kita bisa menggunakan nama Constructor.call(this, parameter)

function Cabang(firstName){
    this.firstName = firstName;
    this.say = function(name){
        console.log(`halo ${name} my firstName is ${this.firstName}`);
    }
}

function Utama(firstName, lastName){
    Cabang.call(this, firstName)
    this.lastName = lastName;
}

const pmpm = new Utama('pampam', 'prayitno');
console.log(pmpm);