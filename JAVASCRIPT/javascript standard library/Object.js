// secara default objeet bisa diuubah atau dihapus propertinya
// jka kita ingin mengubah sebuah object menjadi object yang tidak bisa diubah atau dihapus, kita bisa menggunakan beberapa static method
// Object.freeze() digunakan untuk mengubah object menjadi object yang tidak bisa diubah atau dihapus atributnya
// Object.seal() digunakan untuk mengubah object menjadi object yang tidak bisa dihapus atributenya 

const person = {
    firstName: "pampam",
    lastName: "prayitno"
}

Object.freeze(person);

person.firstName = "joko";
delete person.lastName;

console.log(person);
// -------------------------------------------------------------------------------
const person2 = {
    firstName: "budi",
    lastName: "khannedy"
}

Object.seal(person2);
person2.firstName = "joko";
person2.middleName = " yogi";
delete person2.lastName;
console.log(person2);
{
    // OBJECT ASSIGN
    // kadang kita ada kasus menggabungkan semua attribute dari sebuah object ke object lain
    // hal ini bisa kita lakukan dengan menggunakan Object.assign(target, source)
    const target = {firstName: 'sriwijaya'};
    const source = {lastName: 'balikpapan'};

    Object.assign(target, source);
    console.log(target);
    console.log(source);

}

{
    //OBJECT PROPERTY NAME DAN VALUE
    // object juga memiliki static method untuk digunakan mengambil semua properties names and values
    // Object.values() digunakan untuk mengambil semua property value
    //Object.getOwmPropertyNames() digunakan untuk mengambil semua properti names

    const person ={
        firstName: "jakawi",
        lastName: "sujarto"
    }

    console.log(Object.values(person));
    console.log(Object.getOwnPropertyNames(person));
}