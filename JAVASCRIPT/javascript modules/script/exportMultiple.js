// expor multiple

// export {class, function, variabel, dll}

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