// saat membuat instance object dari class Error, tidak lantas terjadi error
// kita perlu memberi tahu program kita bahwa kita akan mentrigger sebuah error terjadi, atau istilahnya melempar  error(throw error)
// untuk melempar error,  kita bisa gunakan kata knci throw, diikuti denganinstaance objectnya, 
// jika terjadi error, maka otomatis  kode program kita akan terhenti, dan kita bisa melihat detail error nya diconsole aplikasi browser kita

class MathUtil{
    static sum(...numbers){
        if(numbers.length === 0){
            throw new Error("total parameter haruss lebih dari nol");
        }

        let result = 0;
        for(const number of numbers){
            result += number;
        }

        return result;
    }
}


console.log(MathUtil.sum(1,1,1,1,1));