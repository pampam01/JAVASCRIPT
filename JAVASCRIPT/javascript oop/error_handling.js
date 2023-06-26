// saat terjadi error dikode program javascript, kadang kita tidak ingin proogram kita berhenti dijvascript, kita bisa menangkap jika terjadi error
// kita bisa menggunakan try catch statment untuk menangkap error
// pada block try kita mencoba mengakses kode program yang bisa menyebabkan error
// jika terjadi error, block try akan berhenti dan otomatis masuk ke block catch
// jika tidak terjadi error, block cath tidak akan dieksekusi

class MathUtil{
    static sum(...numbers){
        if(numbers.length === 0){
            throw new Error("jumlah angka harus lebih dai noll");
        }

        let result=0;
        for(const number of numbers){
            result += number;
        }

        return result;
    }

}

try {
    console.log(MathUtil.sum());
    console.log('kode block try akan berhenti');
} catch (error) {
    console.error(`terjadi error: ${error.message}`);
}

console.log('kode program akan tetap berjalan');