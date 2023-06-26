// function adalah block kode program yang akan berjalan saat kita panggil
//  untuk membuat function kita harus menggunakan kata function diikuti tanda () dan {}
// dalam bahasa pemrograman lain function disebut juga method
function sayHeloWord() {
	console.log('helo word');
}

// cara manggil function 
sayHeloWord();

console.log(console.info);

// function parameter
// kita bisa mengirim informasi yang kita panggil
// untuk melakukan hal tersebut, kita perlu menambahkan parameter atau argument yang yang ada di tanda ()
function hai(firstName, lastName) {
	console.log(`hai ${firstName} ${lastName}`);
}
hai('pampam', 'prayitno');


// function return value
//  secara default, function tidak menghasilkan value apapun
// untuk membuat data/ mengembalikan suatu value kita bisa menggunakan keyword return
function halo(firstName, lastName) {
	const result = `holaa ${firstName} ${lastName}`;
	return result; // mengembalikan data string 
}
const say = halo('pampam', 'prayitnoooo');
console.log(`woi ${say}`);

function getFinalValue(value) {
	if (value > 90) {
		return 'A';
	} else if (value > 80) {
		return 'B';
	} else if (value > 70) {
		return 'C';
	} else if (value > 60) {
		return 'D';
	} else {
		return 'E';
	}
}

const nilaiUjian = getFinalValue(60);
console.log(nilaiUjian);

// menghentikan sebuah function menggunakan return
// ketika sebuah data ketemu keyword rturn maka data tersebut akan langsung berhenti dieksekusi
// termasuk array dan looping

function isContains(array, searchValue) {
	for (const element of array) {
		console.log(`iterasi element ${element}`);
		if (element === searchValue) {
			return `nilai ${searchValue} ternyata ada dan bernilai ${true}`;
		}
	}
	return false;
}
const arr = [1,2,3,4,5,6,7,8,9,0,11,12,13,14,15];
const search =1;
const henshin = isContains(arr, search);
console.log(henshin);

// optional parameter
// secara default parameter function itu undefined
 function bilangHaloDong(firstName, middleName, lastName){
	console.log(firstName);
	console.log(middleName);
	console.log(lastName);

 }

 bilangHaloDong();
 bilangHaloDong("eko");
 bilangHaloDong("eko", "kurniawan");
 bilangHaloDong("eko", "kurniawan", "khannedy");
 bilangHaloDong("eko", "kurniawan", "khannedy", "joko");

 // default parameter
 // kita bisa membuat default parameter sendiri
 function register(name, gender = "UNKNOWN"){
	console.log(name);
	console.log(gender);
 }

 register();
 register("joshua");
 register("joshua", "MALE");
 register("joshua", null);
 register("joshua", undefined);


 

 

