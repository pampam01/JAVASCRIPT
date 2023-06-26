function sum (...value){
    return value.reduce((accumulator, currentValue) => accumulator + currentValue);

}

console.log(sum(1,2,3,4));

function genap (...value){
    let result = [];
    for (const iterator of value) {
       
        if(iterator % 2 === 0){
           
            result += iterator;
            
            
        }
        return result;
    }
}

console.log(genap(1,3,4,5,6));