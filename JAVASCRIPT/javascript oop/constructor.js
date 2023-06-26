// membuat object dengam object

const pampam = {
    firstName:'pampam',
    lastName:'prayitno'
}

const josua = {
    firstName : 'joshua',
    lastName : 'valentino',
}

// membuat cunstructor dengan  cunstructor function
function Person(firstName, lastName){
    // setelah kita membuat class, jika ingin mengakses class tersebut kita bisa menggunakan kata kunci new
    // lalu diikuti dengan nama constructornya
    this.firstName = firstName
    this.lastName = lastName
    this.fullName = function(){
        return ` halo nama saya ${this.firstName} ${this.lastName}`
    }
    
}
const sumi = new Person('sumi', 'suyanti')
const wagyo = new Person('wagio', 'm.kom');
console.log(sumi.fullName());
console.log(wagyo);