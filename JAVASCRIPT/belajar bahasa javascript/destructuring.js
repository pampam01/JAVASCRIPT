// destructuring adalah fitur yang bisa figunakan untuk membongkar value-value diarray atau objek kedalam variabel2
// fitur ini sangat mempermudah kita ketika ingin mengambil data dari array atau object tanpa harus melakukan pengambilan data satu persatu

// tanpa destructuring
/*const names = ['eko', 'kurniawan','pampam'];
let firstName = names[0];
let middleName = names[1];
let lastName = names[2];

console.log(firstName);
console.log(middleName);
console.log(lastName);*/
// cape kalo manggil satu2 ges

// pake destructuring
{
  const names2 = ['pampam', 'prayitno', 'S.Kom', 'vania', 'joshua'];
  const [firstName, middleName, lastName, ...others] = names2;

  console.log(firstName);
  console.log(middleName);
  console.log(lastName);
  for (const other of others) {
    console.log(other);
  }
}

{
  const pampam = {
    firstName: 'pampam',
    lastName: 'prayitno',
    address: {
      street: 'jalan guruh baru',
      city: 'jambi',
      country: 'indonesia'
    },
    hobby: 'programming',
    channel: 'programmer zaman now'
  };
  const { firstName, lastName, address: { street, city, country }, ...others } = pampam;
  console.log(street);
  console.log(city);
  console.log(country);
  console.log(others);
  //console.log(address);
}

{
  // destructuring tidak hanya bisa dilakukan divariabel, tapi juga dilakukan difunction parameter
  // hal ini membuat kita mudah ketika ingin mengambil nested data dalam array atau object dalam function

  function getNames({ firstName, middleName, lastName }) {
    console.log(firstName);
    console.log(middleName);
    console.log(lastName);

  }

  const names = {
    firstName: 'pampam',
    middleName: 'prayitno',
    lastName: 'm.kom'

  }

  getNames(names);


  function kali([first, second]) {
    return first * second;
  };

  console.log(kali([2, 3]));

  let array = [true, false, 3.4, null];

  let [benar, salah, pecahan, kosong, ...sisa] = array;

  for (const i of array) {
    console.log(i);
  }
}


{
  // yang menarik didestructuring adalah kita bisa menambahkan default value
  //jadi misal kita melakukan destructuring teerhadap array, ternyata tidak ada datanya
  // maka kita bisa meanambahkan default value
  // begitu juga pada object, jika ternyata property tidak ada, maka kita bisa meanambahkan default value 
  {
    const nama2 = ['eko', 'kurniawan'];
    const [firstName, middleName, lastName = 'khaneddy'] = nama2;
    console.log(`${firstName} ${middleName} ${lastName}`);

  }


  // bentuk objek
  const josua = {
    firstName: 'joshua',
    lastName: 'munthe',
    // middleName:'yohan'
  }

  const { firstName, middleName = 'valentino', lastName } = josua;

  console.log(` ${firstName} ${middleName} ${lastName}`);

}

{
  // saat melakukan destructuring array, kita bisa dengan mudah membuat nama variabel sesuka kita
  // namun pada saat melakukan destructuring, kita harus membuat nama variabel sama dengan nama property
  // kita juga bisa menggunakan nama variabel lain saat melakukan destructuring objek jika kita mau

  const josua = {
    firstName: 'johndok',
    lastName: 'agung',
    //middleName:'yohan'
  }
  let { firstName: namaDepan,
    middleName: namaTengah = 'valentino',
    lastName: namaTerakhir } = josua;

  try {
    //console.log(firstName); 
    console.log(namaDepan);
    console.log(namaTengah);
    console.log(namaTerakhir);
  }
  catch (error) {
    console.log(error);
  }


}