// Reflect meruppakan class untuk mengeksekusi javascript function
// Reflect tidak memiliki constructor, dan cara penggunaan reflact tidak dengan membuat object dengan new Reflacct
// penggunaan Reflect adalah dengan menggunakan banyak sekali static methodnya

const person = {};

Reflect.set(person,'firstName','pampam');
Reflect.set(person,'lastName','prayitno');

console.log(person);
console.log(Reflect.has(person, 'firstName'));
console.log(Reflect.has(person, 'middleName'));

