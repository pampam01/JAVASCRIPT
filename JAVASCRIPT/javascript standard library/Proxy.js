// proxy merupakan fitur yang bisa digunakan sebagai wakil se buah data
// dengan menggunakan proxy , semua interaksi ke data akan selalu melalui Proxy terlebih dahulu
// dengan ini, kita bisa melakukan apapun sebelum interaksi dilakukan ke data yang dituju

//PROXY HANDLER
//pembuatan nproxy perlu menggunakan handler, dimana dalam handler, kita bisa membuat frunction
//yang dinamakan interceptor yang digunakan ketikamengambil data atau menubah data ke target 

// untukk mengubah proxy, kita bisa menggunakan new Proxy(targrt, handler)

const target = {};

const handler = {
    get: function(target, property){
        console.log(`access property  ${property}`);
        return target[property];
    },
    set: (target, property, values) => {
        if (values === null || values == "") {
            console.log(" data tidak boleh kosong ");
        }
        else {
            console.log(` change property ${property} : ${values}`);
            target[property] = values;
        }
    } 
}

const proxy = new Proxy(target,handler);
proxy.firstName = "pampam";
proxy.lastName = " prayitno";
proxy.middleName = "";


console.log(proxy.firstName);
console.log(proxy.lastName);
console.log(proxy.middleName);
console.log(target);

// saat kita mengubah data proxy, secara otomatis data akan dikirim ke target melalui handler 


