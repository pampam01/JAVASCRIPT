// alasan var tidak direkomendasikan laagi adalah karena var tidak memiliki block scope
// artinya dia tidak mengikat ke local scope karena masalah ini isi var tidak dapat diprediksi

//global scope
var i = 20;

for(var i =0 ; i < 10; i++){
    //local scope
    console.log(`local ${i}`);
}

console.log(`global : ${i}`);

