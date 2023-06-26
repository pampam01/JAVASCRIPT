// sams seperti field,terdapat juga fitur private method di ecmascript
// caranya dengan menambahkan tanda # diawal method, maka secara otomatis method tersebut adalah private

class Person{

  say(name){
    if(name){
      this.#sayWithName(name);
    }else{
      this.#sayWithoutName();
    }
  }

  #sayWithName(name){
    console.log(`hallo ${name}`);
  }
  #sayWithoutName(){
    console.log(`hallo`);
  }
}


let pm = new Person();
pm.say();
pm.say('hanzo');