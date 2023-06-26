// jika for in digunakan untuk melakukan iterasi propwrty atau index,
//berbeda dengan for of ia digunakan untuk mellakukan iterasi dari iterable objek, seperti array, string dan lain2
//for of tidak bisa digunakan untuk melakukan iterasi data di objek, karena objek bukanlah iterable

const names = ['pampam', 'prayitno', 's.kom'];
for(const name of names){
    console.log(`${name}`);
}

const pm = 'pampam';
for(const character of pm){
    console.log(character);
}