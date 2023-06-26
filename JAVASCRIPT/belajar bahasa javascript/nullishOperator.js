// nulis value adalah null dan undefined
// nullish coalescing operator (??) adalah operator yang mirip dengan ternary operator, yang membedakannya adalah pada kondisi
//jika berrnilai null atau undefined , baru value nya diambil

// tanpa nulish coalescing operator
let parameter;

let data = parameter;
if (data === undefined || data === null) {
    data = 'nilai default';
}
console.info(data);

// dengan nulish coalescing operator
data = parameter ?? "nilai default";
console.info(data);