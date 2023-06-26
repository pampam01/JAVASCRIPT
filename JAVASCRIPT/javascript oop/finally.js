// kata kunci finally melakukansesuatu entah itu terjadi error ataupun tidak
// dalam try catch, kita bisa menambahkan block finally
// block finally ini akan selalu dieksekusi setelah try catcth selesai, emtah terjadi error atau tidak.
//  block finally akan selalu dieksekusi

class  MathUtil{
    static sum(...numbers){
        if(numbers.length === 0){
            throw new Error('nilai tidak boleh kosong atau kurang dari nol'); 
        }

        let result =0;
        for(const number of numbers){
            result += number;
        }

        return result;
    }
}


try {
    console.log(MathUtil.sum());
    console.log(' kode block try akan terhenti');
} catch (error) {
    console.error(` Terjadi error : ${error.message}`);
} finally{
    console.log('kode program selesai');
}

console.log('kode tetap berjalan');


// kita juga bisa menggunaka try finally unntuk khasus tertentu

class Counter{
    #counter = 0;

    next(){
        try{
            return this.#counter;
        }finally{
            this.#counter++;
        }
    }
}

const counter = new Counter();
console.log(counter.next());
console.log(counter.next());
console.log(counter.next());
console.log(counter.next());
console.log(counter.next());
console.log(counter.next());
console.log(counter.next());
