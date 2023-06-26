// undifined addalah sebuah tipe data yang belum didefinikan 
let name ;
if(name === undefined){
    console.log("UNDIFINED");
} else{
    console.log(" DIFINED");
}

// array
const names = ["pampam", "prayitno"];

if(names[2] === undefined){
    console.log(" aarray undifined");
} else{
    console.log(" array DEFINED");
}

// objek properti
const person = {
    name: "pampam"
};
if(person.name === undefined){
    console.log(` objek ${person.name}`);
} else{
    console.log(` objek DIFINED`);
}