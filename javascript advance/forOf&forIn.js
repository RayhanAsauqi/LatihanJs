//for ..of

// const mhs = ["Rayhan", "zidan", "balqis"];

//cara biasanya
// for (let i = 0; i < mhs.length; i++) {
//   console.log(mhs[i]);
// }

//forEach tidak bisa digunakan untuk melooping string,karena forEach khusus untuk array
// mhs.forEach((em) => console.log(em));

// menggunakan for..of pada array
// for (const m of mhs) {
//   console.log(m);
// }

//looping string menggunakan for..of
// const nama = "rayhan";
// for (const n of nama) {
//   console.log(n);
// }

//menambahkan string menggunakan forEach
// const mhs = ["Rayhan", "zidan", "balqis"];
// mhs.forEach((m, i) => {
//   console.log(`${m} adalah mahasiswa paramadina ke, ${i + 1}`);
// });

//mendapatakan index menggunakan for.. of
// for (const [i, m] of mhs.entries()) {
//   console.log(`${m} adalah mahasiswa paramadina ke, ${i + 1}`);
// }

//NodeList
// const liNama = document.querySelectorAll(".nama");

//forEach pada DOM
// liNama.forEach((n) => console.log(n.innerHTML));

//mengambil elemnt dan buat perulangan menggunakan for ..of
// for (n of liNama) {
//   console.log(n.innerHTML);
// }

//Arguments

// function jumlahkanAngka() {
//melooping arguments menggunakan for..of
//   let jumlah = 0;
//   for( a of arguments ){
//     jumlah += a
//   }
//   return jumlah;
// }

// console.log(jumlahkanAngka(1, 2, 3, 4, 5));

//for..in
//looping menggunakan for..in untuk melooping object
const mhs = {
  nama: "rayhan",
  umur: 20,
  email: "reyhanalsauqi12@gmail.com",
};

for (m in mhs) {
  //digunakan ketika mau mengambil valuenya bukan nama property nya
    console.log(mhs[m]);
  //digunakan ketika cuma mau mengambil nama property nya
//   console.log(m);
}
