// base64 merupakan binary to text encoding, representasi binary data dalam format string
//base64 mrupakan formatt text daayang aman untuk dikirim ke web
// base64 merupakan encoding yang biasanya digunakan ketika perlu mengirim data dari client ke server
// karena encoding base64 merupakan text, oleh karena itu sangat aman digunakan pada query param URL atau text body galam form

//BASE64 FUNCTION
// btoa(value)   | encode ke base64 dari value
// atob(encoded)   | decode dari base64 ke value

const original = "pampam&prayitno=unama";

const encode = btoa(original);
console.log(encode);

const decode = atob(encode);
console.log(decode);

// jalanin nya di browser

