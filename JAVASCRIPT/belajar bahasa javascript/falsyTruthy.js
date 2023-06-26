// data-data yang dianggap falsy
// false
//0, -0 n number 0 dan -0 dianggap false
//"", '', `` semua string kosong dianggap false
// null null dianggap false
//undefined, undefined dianggap false
//NaN, nan dianggap false

// data-data yang dianggap truth
// true
// semua number selain 0, -0
// semua string kecuali string kosong. dsb
// semua jenis array termassuk array kosong
// semua jenis objek termasuk objek kosong

let data =``;
if(data){
  console.log("TRUE");

}else{
  console.log("FALSE");
}

 data =[];
if(data){
  console.log("TRUE");

}else{
  console.log("FALSE");
}

 data ={};
if(data){
  console.log("TRUE");

}else{
  console.log("FALSE");
}


