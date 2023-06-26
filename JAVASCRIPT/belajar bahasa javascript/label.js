//label merupakan penanda yang bisa digunakan dengan kata kunci break dan continue
//dengan menggunakan label, kita bisa melakukan break dan continue terhadap perulangan dimana kode bresk dan continue itu digunakan
// untuk membuat label, kita bisa gunakan nama label kemudian diikuti dengan :(titik dua)

/*loopi:
for(let i = 0; i < 100; i++){
    loopj:
    for(let j = 0; j <10; j++){
        console.log(`${i} - ${j}`);
    }
}*/


loopi:
for(let i = 0; i < 10; i++){
    loopj:
    for(let j = 0; j <100; j++){
        if(j > 10){
            continue loopi;
        }
        console.log(`${i} - ${j}`);
    }
}