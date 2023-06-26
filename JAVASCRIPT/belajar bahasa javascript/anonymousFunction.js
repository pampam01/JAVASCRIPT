//function tanpa nama disebut anonymous function
// kita bisa membuat anonymous function didalam variabel dan didalam parameter

// bust snonymous function dengan memasukkannya kedalam variabel
let say = function (name) {
  console.log(`halo ${name}`);
}
say(`pampam`);
say('budy');

//anonymous function didalam parameter

function sum(callback) {
  let i = callback(1, 6);
  console.log(i);// 
}

sum(function (...numbers) {
  let result = 0;
  for (const number of numbers) {
    result += number;
  }
  return result;
})




function kurang(callback) {
  let saved = callback(1,2,3,4); // kurang(1,2,3,4)
  console.log(saved);
}


kurang(function (...numbers) {
  return numbers.reduce((accumulator, currentValue) => accumulator - currentValue);

});








