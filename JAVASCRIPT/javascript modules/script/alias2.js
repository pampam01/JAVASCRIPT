//ALIAS
// saat membua apk javascript, semakin lama kemungkinan module akan semakin banyak
// dan bisa saja akan ada nama variabel atau nama function atau nama class yang sama ntar module
// hal ini akan menyulitkan ketika ada module yang menggunakan beberapa module, namun ternyata variabel, function dan class nya memililiki nama yang berbeda
// unungnya module memiliki fitur class alias, dimana kita bisa mengubah nama variabel, funtion atau classnya
// cara membuatanya bisa di export dan ada di import


const company = "programmer zaman now";

function sum(first, second){
    return first + second;
}

class Company{
    constructor(name, date){
        this.name = name;
        this.date = date;
    }

    data(){
        console.log(` perusahaan ini bernama ${this.name} berdiri sejak tahun ${this.date}`);
    }
}

export {company, sum, Company}