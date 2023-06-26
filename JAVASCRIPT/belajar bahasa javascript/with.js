// with statment merupakan fitur yang digunakan untuk menurunkan sebuah scope data
// dengan menggunakan with statment, kita bisa mengakses property dalam sebuah data tanpa harus menyebut datanya

const person ={
    firstName:'pampam',
    middleName: 'prayitno',
    lastName:'s.kom'
}
with(person){
    console.log(firstName);
    console.log(middleName);
    console.log(lastName);
}

//with statment tidak direkomendasikan karena dapat menimbulkan ambiguitas
