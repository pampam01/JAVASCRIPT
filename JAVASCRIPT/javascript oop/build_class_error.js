// MEMBUAT ERROR MANUAL
// alaupun javascript sudah memiliki standard class error
// ualangkah baiknya kita membedakan tiap jenis error
// untuk membuat error sendiri secara manual, cukup membuat class turunnan dari class Error
// dan tambahkan parameter message, agar bisa dikirimkkan ke parameter di cnonsturctor class Error




class ValidationError extends Error{
    'use strict';
    constructor(message, field){
        
        super(message);
        this.field = field;
    }
}

class MarthUtil{
    static sum(...numbers){
        if(numbers.length === 0){
            throw new ValidationError(" total parameter harus lebih dari 0", "numbers");
        }

        let result = 0;
        for(const number of numbers){
            result += number;
        }
        return result;
    }

  

}

try {
    console.log(MarthUtil.sum(3,8,9,56,1,8,8,8));
    console.log(" program berhenti disini");
} catch(error) {
    if(error instanceof ValidationError){
        console.log(` program eror  : ${error.message} error di : ${error.field}`);
    }
    else{
        console.log(` program error: ${error.message}`);
    }
}