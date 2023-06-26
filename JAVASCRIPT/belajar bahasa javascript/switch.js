// switch adalah statement percabangan yang dama dengan if tetapi lebih sederhana
// kondisi di switch hanya untuk perbandingan ==
let nilai = "E";
switch (nilai) {
  case"A":
    console.log(" anda lulus dengan baik");
    break;
  case"B":
  case"C":
    console.log(" anda lulus ");
    break;
  case"D":
    console.log(" anda tidak lulus");
    break;
  case"E":
    console.log(" anda mungkin salah jurusan");
    break;
  default:
    console.log(" not found");
    break;

}