// default parameter
// di dalam parameter function kita bisa memberi nilai didalam parameternya

function register(name, age, live="unknown"){
    return `halo nama saya ${name} saya berumur ${age} tahun, alamat ${live} `;
}

let re = register("pampam", 18);
console.log(re);
re = register("pampam", 18, "jakarta, indoneisa");
console.log(re);
