// debugger digunakan untuk melakukan proses debugging
// debugging adalah proses mencari bug(masalah) yang bisa terjadi dikode program kita
// dengan debugger kita bisa menghentikan kode program diposisi yang kita inginkan (breakpoint)
// lalu melihat semua isi variabel yang ada pada saat kodeprogram sedang berhenti

function createFullName(firstName, middleName, lastName){
    debugger;
    let fullName = `${firstName} ${lastName} ${lastName}`;
    return fullName;
    
}

let p = createFullName('pampam','prayitno', 's.kom');
console.log(p);

function sum(...numbers){
    debugger;
    let total =0;
    for (const iterator of numbers) {
        total += iterator;
    }
    return total;
}

console.log(sum(1,1,1,1));