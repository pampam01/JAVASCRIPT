// ternary  op adalah operator sederhana dari if statement
//ternary operator terdiri dari kondisi yang dievaluasi, jika menghasilkan true maka nilai pertama dia,bil
// jika false, maka nilai kedua diambil

const nilai =  70
let ucapan;

nilai >= 75 ? ucapan = "selamat anda lulus": ucapan = "silahkan coba lagi";
console.log(ucapan);

const nilai2 = 80;
const ucap = nilai2 < 70 ? "anda tidak lulus": "selamat anda lulus";
console.log(ucap);