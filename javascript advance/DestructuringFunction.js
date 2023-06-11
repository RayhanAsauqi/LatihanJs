//Destructuring



//destructuring return value
// function kalkulasi(a, b) {
//   return [a + b, a - b, a * b];
// }

//nama function yang digunakan yaitu penjumlahanPerkalian
// const jumlah = penjumlahanPerkalian(2, 3)[0];
// const kali = penjumlahanPerkalian(2, 3)[1];
// console.log(kali);

// const [jumlah, kali] = penjumlahanPerkalian(2, 3);
// console.log(jumlah);
// console.log(kali);

//didalam penulisan destructuring penulisan harus tepat tidak boleh tertukar karena urutan sangat berpengaruh

// const [tambah, kurang, kali, bagi = "tidak ada pembagian"] = kalkulasi(2, 3);
// console.log(bagi);


//ketika mau urutanya tidak berurutan atau tidak sesuai di dalam destructuring nya bisa menggunakamn object biar di dalamnya ter asosiasi untuk return value


// function kalkulasi(a, b) {
//   return {
//     tambah: a + b,
//     kurang: a - b,
//     kali: a * b,
//     bagi: a / b,
//   };
// }

// const { bagi, tambah, kali, kurang } = kalkulasi(2, 3);
// console.log(bagi);



//Destructuring function arguments

const mhs = {
  nama: "rayhan alsauqi",
  umur: 20,
  email: "reyhanalsauqi12@gmail.com",
  nilai : {
    tugas : 80,
    uts : 95,
    uas : 90,

  }
}

// function cetakMhs(mhs) {
//   return `halo, nama saya ${mhs.nama}, umur saya ${mhs.umur} `;
// }

// console.log(cetakMhs(mhs));



//memecah object langsung pada parameter


function cetakMhs({nama, umur,nilai:{tugas,uts,uas}}) {
    return `halo, nama saya ${nama}, umur saya ${umur}, dan nilai uas saya adalah ${uas}`;
}

console.log(cetakMhs(mhs));
//menggunakan Destructuring bisa di gunakan ketika kasusnya sangat kompleks di dalam sebuah object dan objectnya bersarang
