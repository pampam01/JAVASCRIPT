// alah satu fitur terbaru diES6 adalah iterable
// iterable adalah spesial objek yang memiliki standarisasi
// dengan mengikuti standarisasi iterable, secara otomatis kita bisa melakukan iterasi pada data tersebut dengan perulangan fof of
// contoh yang sudah mengikuti standarisasi iterable adalah string, Array, Object dan lain-lain


class CounterIteratorResult{
    constructor(value, done){
        this.value = value;
        this.done =done;
    }
}

class CounterIterator{
    constructor(value, max){
        this.value =value;
        this.max = max;
    }

    next(){
        try{
            if(this.value > this.max){
                return new CounterIteratorResult(this.value, true);
            }
            else{
                return new CounterIteratorResult(this.value, false);
            }
        }finally{
            this.value++;
        }
    }

}


class Counter{
    constructor(value, max){
        this.value = value;
        this.max = max;
    }
    [Symbol.iterator](){
        return new CounterIterator(this.value, this.max);
    }
}

const counter = new Counter(1, 15);

for(const value of counter){
    console.log(value);
}