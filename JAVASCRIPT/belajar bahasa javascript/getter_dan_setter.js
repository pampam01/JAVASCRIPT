// getter dan setter adalah kemampuan function yang berbeda
// getter untuk mengambil data, setter untuk mengubah data pada sebuah property object
/* dengan menggunakan getter dan setter, kita bisa lakukan hal apapun dalam function 
  sebelum sebuah property diakses atau diubah, misal menambah validasi dan lain-lain*/ 

const person = {
    firstName : 'pampam',
    lastName: 'prayitno',
    age: 19,
    get fullName(){
        return `halo nama saya ${this.firstName} ${this.lastName}`;
    },
    get umur(){
        return `umur saya adalah ${this.age}`;
    },
    get biodata(){
        return ` nama : ${this.fullName} \n umur : ${this.age}`;
    },

    set fullName(values){
        const array = values.split(' ');
        this.firstName = array[0];
        this.lastName = array[1];
    },
    set umur(value){
        this.age = value;
    },

    set biodata(values){
        const array2 = values.split(' ');
        this.firstName = array2[0];
        this.lastName = array2[1];
        this.age = parseInt(array2[2]);
    }
};


console.log(person);
console.log(person.biodata);

person.umur = 30;
console.log(person.umur);


person.fullName = 'andika eko';
console.log(person.fullName);


person.biodata = 'joko widodo 48';
console.log(person.biodata);