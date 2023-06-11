//callback

//synchronous CallBack
// function hallo(nama) {
//   alert(`Halo, ${nama}`);
// }

// function tampilkanPesan(callback) {
//   const nama = prompt("masukkan nama : ");
//   callback(nama);
// }

// tampilkanPesan((nama) => alert(`Halo, ${nama}`));

// const mhs = [
//   {
//     nama: "Rayhan Alsauqi",
//     nrp: "12345678",
//     email: "reyhanalsauqi12@gmail.com",
//     jurusan: "Teknik Informatika",
//     idDosenWali: 1,
//   },
//   {
//     nama: "Balqis",
//     nrp: "7654322",
//     email: "balqis@gmail.com",
//     jurusan: "Teknik Informatika",
//     idDosenWali: 2,
//   },
//   {
//     nama: "zidan",
//     nrp: "7567575756",
//     email: "zidan@gmail.com",
//     jurusan: "Teknik Informatika",
//     idDosenWali: 3,
//   },
// ];
// console.log("mulai");
// mhs.forEach((m) => {
//   for (let i = 0; i < 10000000; i++) {
//     let date = new Date();
//   }
//   console.log(m.nama);
// });

// console.log("selsai");

//Asynchronous callback
// function getDataMahasiswa(url, success, error) {
//   let xhr = new XMLHttpRequest();

//   xhr.onreadystatechange = function () {
//     if (xhr.readyState === 4) {
//       if (xhr.status === 200) {
//         success(xhr.response);
//       } else if (xhr.status === 404) {
//         error();
//       }
//     }
//   };

//   xhr.open("get", url);
//   xhr.send();
// }

// console.log("mulai");
// getDataMahasiswa(
//   "data/mahasiswa.json",
//   (results) => {
//     const mhs = JSON.parse(results);
//     mhs.forEach((m) => console.log(m.nama)), () => {};
//   },
//   () => {}
// );
// console.log("selsai");

//jquery
// console.log("mulai");
// $.ajax({
//   url: "data/mahasiswa.json",
//   success: (mhs) => {
//     mhs.forEach((m) => console.log(m.nama));
//   },
//   error: (e) => {
//     console.log(e.responText);
//   },
// });
// console.log("selsai");
