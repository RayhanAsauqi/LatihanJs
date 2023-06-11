//spread Operators
//Memecah iterables menjadi single element

// console.log(...mhs[0]);

//menggunakan spread operator ketika ingin menggabugkan 2 array atau lebih

// const mhs = ["rayhan", "zidan", " balqis"];
// const dosen = ["retno", "sari", "andi"];
// const orang = [...mhs, "aji", ...dosen];

//menggabungkan array menggunakan concat
// const orang = mhs.concat(dosen);

//tetapi ketika kita menggunakan spread operator kita bisa lebih fleksibel
// console.log(orang);

//bisa juga melakukan copy terhadap array

// const mhs = ["rayhan", "zidan", " balqis"];
// const mhs1 = mhs;

// const mhs1 = [...mhs];
// mhs1[0] = "Fajar";
// console.log(mhs);

// const liMhs = document.querySelectorAll("li");
// const mhs = [];
// for (let i = 0; i < liMhs.length; i++) {
//   mhs.push(liMhs[i].textContent);
// }
// console.log(mhs);
// const mhs = [...liMhs].map((m) => m.textContent);
// console.log(mhs);

const nama = document.querySelector(".nama");
const huruf = [...nama.textContent].map((h) => `<span>${h}</span>`).join("");

nama.innerHTML = huruf;
