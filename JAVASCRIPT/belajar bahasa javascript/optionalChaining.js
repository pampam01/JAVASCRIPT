const person = {
    address:{
        country: "indonesia"
    }
}
let country = person?.address?.country;
console.log(country);