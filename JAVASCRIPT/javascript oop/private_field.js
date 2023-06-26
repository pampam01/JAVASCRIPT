// jika kita ingin membuat field yang bersifat private(hanya bisa diakses didalam class), kita bisa menggunakan tanda # debelum fieldnya
// ini dinamakan private class field, hanya bisa diakses dari dalam class saja

class Counter{
    #counter = 0;

    increament(){
        this.#counter++;
    }
    decrement(){
        this.#counter--;
    }

    get(){
        return this.#counter;
    }
}

let counter = new Counter();
//counter.#counter = 100;
counter.increament();
counter.increament();
counter.increament();
counter.increament();
counter.increament();
console.log(counter.get());

console.log(counter);