// date merupakan tipe data untuk representasi waktu dan tanggal. yaitu DATE
// date merupakan representasi milisecond sejak tanggal 1 jauari 1970, atau dikenal dengan epoch & unix timestamp
// new Date | membuat date saat ini
// new Date(year, month, date) | membuat date dengan tanggal
// new Date(year, month, date?, hour?, minute?, second?, milisecond?) | membuat date dengan parameter sampai milisecond. ( tanda tanya merupakan opsional( bisa diisi bisa engga))
{
    const date1 = new Date();
    console.log(date1);

    const date2 = new Date(2004, 4, 7);
    console.log(date2);

    const date3 = new Date(2003, 12, 4, 14, 30, 40, 100);
    console.log(date3);

    const date4 = new Date(1623167419514);
    console.log(date4 + "\n");
}
// epoch dan timestamp adalah  hitungan milisecond sejak tanggal 1 januari 1970
// untuk mendapatkan waktu saat ini  dalam epoch dan timestamp, kita bisa menggunakan function Date.now();
// untuk mengubah dari object date ke epoch & unix stamp, kita bisa menggunakan function getTime();
{
    const date1 = new Date();
    console.log(date1.getTime());

    const date2 = new Date(2004, 4, 7);
    console.log(date2.getTime());

    const date3 = new Date(2003, 12, 4, 14, 30, 40, 100);
    console.log(date3.getTime());

    const date4 = new Date(1623167419514);
    console.log(date4.getTime());

    const timestamp = Date.now();
    console.log(timestamp);

}

{
    // PARSING DATE
    // kita juga bisa melakukan parsing membuat date dari string menggunakan method Date.parse(value)
    // format string harus YYYY-MM-DDTHH:mm:ss.sssZ
    // jika kita hanya ingin membuat date berisi tanggal saja, cukup YYYY-MM-DD
    // jika date dengan tanggal dan waktu, gunakan YYYY-MM-DDTHH:mm:ss.sss
    // jika date dengan tanggal dan waktu serta timezone, gunakan YYYY-MM-DDTHH:mm:ss.sssZ
    // hasil parsing adalah unix timestamp. bukan onject date

    const dateParsing = Date.parse("2022-10-10T08:45:45.123+07:00");
    console.log(dateParsing);

    const date = new Date(dateParsing);
    console.log(date);



}

{
    // INSTANCE OBJECT
    const date = new Date();
    //date.setFullYear(2020);

    console.log(date.getFullYear());
    console.log(date.getMonth());
    console.log(date.getDate());
    console.log(date.getHours());
    console.log(date.getMinutes());
    console.log(date.getSeconds());
    console.log(date.getMilliseconds());
    console.log(date.getTimezoneOffset());

}