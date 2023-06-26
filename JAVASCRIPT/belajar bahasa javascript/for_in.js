// for in merupakam perulangan for yang digunakan untuk mengiterasi seluruh data property diobjek ataupun diarray
// walaupun bisa digunakan di aarray, namun tidak direkomendasikan untuk arrray, karena biasanya kita jarang sekali butuh data index untuk array

const person = {
    firstName:"pampam",
    middleName: "prayitno",
    lastName: "S.KOM"
}

for(const property in person){
    console.log(`properti ${property} : ${person[property]}`);
}

const names = ['pampam', 'prayitno', 's.kom'];
for(const i in names){
    console.log(`${i} : ${names[i]}`);
}