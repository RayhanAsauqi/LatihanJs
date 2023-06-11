//rest parameter

// function myFunction(...myArgs) {
//   return `a = ${a}, b = ${b}, myArgs = ${myArgs} `;
//   return myArgs;
//   return arguments;
//   return myArgs;
//cara lain menampilkan isi array tanpa menggunakan rest parameter
//   return Array.from(arguments);
//menampilkan isi array juga menggunakan spreed operator
//   return [...arguments];
// }

// console.log(myFunction(1, 2, 3, 4, 5));

// function jumlahKan(...angka) {
//   let total = 0;
//   for (const m of angka) {
//     total += m;
//   }

//   return total;
//menjumlahkan isi array menggunakan reduce
//   return angka.reduce((a, b) => a + b);
// }

// console.log(jumlahKan(1, 2, 3, 4, 5))

//array destructuring
// const kelompok1 = ["rayhan", "alsauqi", "balqis", "zidan", "piter"];
// const [ketua, wakil, ...anggota] = kelompok1;
// console.log(wakil);

//Object Destructuring
// const team = {
//   pm: "Rayhan ",
//   frontEnd1: "alsauqi",
//   frontEnd2: "zidan",
//   backend: "balqis",
//   ux: "Piter",
//   devOps: "daud",
// };

// const { pm, ...myTeam } = team;
// console.log(pm);

//filtering
function filterBy(type, ...values) {
  return values.filter((v) => typeof v === type);
}

console.log(filterBy("boolean", 1, 2, "rayhan", false, 10, true, "doddy"));
