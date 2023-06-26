//  REGULAR EXSPRESION

// regular ekspresion atau regex meerupakan fitur untuk mencari text dengan pola
// membuat regular expression dijavascript bisa dilakukan dengan dua cara, yaitu menggunakan literal notation atau membuat object RegExp


// RegExp instance method
//exec(value):resukt | eksekusi regex, jika menemukan data sesuai pola, maka kembalikan resultnya,jika tidak maka null
//test(value):boolean | eksekusi regex, jika menemukan data sesuai pola, maka return true, jika tidak maka false

{
    const name = "eko kurniawan khannedy";
    const regex = /eko/;

    let result = regex.exec(name);
    console.log(result); // result nya array
    console.log(regex.exec("pampam"));


    const test = regex.test(name);
    console.log(test);
    console.log(regex.test("pamam"));
}


{
    const example = /[a]/i;
    const example2 = new RegExp("a");
    const example3 = new RegExp(/[pampam]/);
    const names = " PAMPAM HERLAMBANG";



    console.log(example);
    console.log(example2);
    console.log(example3);
    console.log(example3.exec(names)); // NULL karena regex sangat sensitif terhadap hurus besar dan kecil
    console.log('=========================================================================');
}


{

    // RexExp modifier

    // i | regex menjadi incase sensitive/ tidak sensitif lagi soal huruf besar dan kecil
    // g | pencarian dilakukan secara global, secara default setelah menemukan data, pencarian akan berhenti
    // m | multiline, pencarian dilakukan di tiap baris (enter)

    const names = "eko kurniawan\nEko khannedy\nEdi KURNIAWAN\nEdi khannedy";
    const regex1 = /eko/g
    const regex2 = /kurniawan/ig
    const regex3 = /edi/i

    let result;
    console.log(regex3.exec(names));
    while((result = regex1.exec(names)) !== null){
        console.log(result);
    }
    while((result = regex2.exec(names)) !== null){
        console.log(result);
    }

    console.log("======================================== batasss 2 ====");
}

{
    // dijavascript, tipe data String memiliki instance method yang dapat memanfaatkan RegExp untuk melakukan pencarian
    //match(regex): Array  | mencari semua data yang sesuai dengan regex
    //search(regex):index  | mwncari index data yang sesua dengan regex
    //replace(regex, value):  | mengubah data ydengan value yang sesua regex(tapi cuman satu)
    //replaceAll(regex, value) | mengubah semua data dengan value yang sesuai regex
    // split(regex):Array  | memotong string dengan regex


    const string = "EKO \neko ado eki eka ejo emi elo eke";
    const regex0 = /^eko/igm;
    const regex4 = /e.o/ig;
    while((result = regex0.exec(string)) !== null){
        console.log(result);
    }
    while((result = regex4.exec(string)) !== null){
        console.log(result);
    }
    console.log(regex0.exec(string));
    console.log(string.match(/ek[aiueo]/ig));// ["EKO", "eka", "eki", "eko", "eke" ];
    console.log(string.search(/ek[aiueo]/ig));//0
    console.log(string.replace(/ek[aiueo]/ig, "keren")); // keren keren ado keren keren ajo emi elo keren
    //console.log(string.replaceAll(/ek[aiueo]/ig, "keren")); // keren keren ado keren keren ajo emi elo keren
    //console.log(string.replaceAll());;
    console.log(string.split(/e/ig)); //['', 'KO', 'ko ado'. 'ki', 'ka', 'jo', 'mi', 'lo', 'k'];

}

{
    const re = /bar/g;
   console.log( re[Symbol.match] =false);
    console.log("/bar/g".endsWith(re));
    console.log(re.exec("bar"));
   console.log("bar & bar".replace(re, "foo"));

}

{
    const text = "the Caterpilar and Alice Looked at each other";
    const regexWithOutE = /\b[a-df-z]+\b/ig;
    console.log(text.match(regexWithOutE));

    const size = " this image has a resolution of 1440x900 pixels";
    const regExpSize = /([0-9]+)x([0-9]+)/;
    const match = size.match(regExpSize);
    console.log(match);
    console.log(`  width and height : ${match[0]}  / width ${match[1]}  / height : ${match[2]}`);
}


{
    // hapus huruf dan angka pada @gmalil
    const email = "Pampams211@gmail.com"
    const regex = /\w/g; // arti \w adalah ambil semua angka dan huruf, arti dari g adalah ambil secara global
    const result = email.replace(regex, "");
    console.log(result)
}