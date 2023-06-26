//operator && dan || didata nonbolean
//operator or|| membaca dari  kiri  dan kanan
//operator ini akan mengambil nilai mpertama yang truthy

console.log(" hello " || ""); //hello
console.log("" || []); // []
console.log("0" || "nol"); // "0"
console.log(0 || "nol");// "nol"
console.log(null || "nul");//"null"
console.log(undefined || "undefined"); // "undefined"
console.log(0 || -0) + "\n";

//operator and&& membaca dari  kiri  dan kanan
//operator ini akan mengambil nilai mpertama yang falsy
console.log(" hello " && ""); //""
console.log("" && []); // ""
console.log("0" && "nol"); // "nol"
console.log(0 && "nol");// 0
console.log(null && "nul");//null
console.log(undefined && "undefined"); // undefined
console.log(0 && -0);// -0