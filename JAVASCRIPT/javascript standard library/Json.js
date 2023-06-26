// JSON singkatan daari javascript object nation
// merupakan data string yang bentuknya mirip dengan javascript objek yang digunakan untuk komunikasi server dan client
// javascript mendukung konversi data dari String json ke Object ataupun sebaliknya
// JSON.stringfy() digunakan untuk melakukan konversi dari Object ke string
// JSON.parse() digunakan untuk melakukan konversi dari String ke Object

const person = {
    firstName: "eko",
    lastName: "khannedy",
    address: {
        country: "indonesia",
        city: "subang"
    },
    hobies:[
        "coding", "game", "journey"
    ]

};

const json = JSON.stringify(person); // mengconversi dari objectt ke string json
const json2 = JSON.stringify([person]);
console.log(json2);
const personAgain = JSON.parse(json);// mengonversi dari string json ke objek

console.log(json);
console.log(personAgain);