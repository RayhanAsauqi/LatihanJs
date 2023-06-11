//jquery
// $.ajax({
//     url:'http://www.omdbapi.com/?apikey=dca61bcc&s=avengers',
//     success: (movies)=> console.log(movies)
// })

//vanilla js respon API
// const xhr = new XMLHttpRequest();
// xhr.onreadystatechange = function () {
//   if (xhr.status === 200) {
//     if (xhr.readyState === 4) {
//       console.log(JSON.parse(xhr.response));
//     }
//   } else {
//     console / log(xhr.responseText);
//   }
// };

// xhr.open("get", "http://www.omdbapi.com/?apikey=dca61bcc&s=avengers");
// xhr.send();

//fetch
// fetch("http://www.omdbapi.com/?apikey=dca61bcc&s=avengers")
//   .then((response) => response.json())
//   .then((response) => console.log(response));

//promise
//contoh1 sederhana
// let diTepati = false;

// const janji1 = new Promise((resolve, reject) => {
//   if (diTepati) {
//     resolve("Janji telah di tepati");
//   } else {
//     reject("ingkar janji");
//   }
// });
// janji1
//   .then((response) => console.log("OK : " + response))
//   .catch((response) => console.log("NOT OK : " + response));

// contoh2
// let diTepati = false;
// const janji2 = new Promise((resolve, reject) => {
//   if (diTepati) {
//     setTimeout(() => {
//       resolve("Ditepati setelah beberapa waktu");
//     }, 5000);
//   } else {
//     setTimeout(() => {
//       resolve("tidak ditepati setelah beberapa waktu");
//     }, 5000);
//   }
// });

// console.log("mulai");
// console.log(
//   janji2.then(() => {
//     console.log(janji2);
//   })
// );

// janji2
//   .finally(() => console.log("selesai menunggu"))
//   .then((response) => console.log("OK : " + response))
//   .catch((response) => console.log("NOT OK : " + response));
// console.log("selesai");

//promise.all() ini untuk menjalanakan ketika mempunyai banyak promise yang mau di jalankan sekaligus

const film = new Promise((resolve) => {
  setTimeout(() => {
    resolve([
      {
        judul: "Kimetsu no yaiba",
        sutradara: "reyhan",
        pemeran: "rengoku",
      },
    ]);
  }, 1000);
});

const cuaca = new Promise((resolve) => {
  setTimeout(() => {
    resolve([
      {
        kota: "serui",
        temp: 26,
        kondisi: "Cerah Berawan",
      },
    ]);
  }, 500);
});

// film.then((response) => console.log(response));
// cuaca.then((response) => console.log(response));

Promise.all([film, cuaca])
  // .then((response)=>console.log(response))
  // kalau ingin array terpisah bisa menggunakan spread operator
  .then((response) => {
    const [film, cuaca] = response;
    console.log(cuaca);
    console.log(film);
  });
