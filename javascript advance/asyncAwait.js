// const coba = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve("selesai");
//   },2000);
// });

//menjalankan coba secara promise
// coba.then(() => console.log(coba))

function cobaPromise() {
  return new Promise((resolve, reject) => {
    const waktu = 6000;
    if (waktu < 5000) {
      setTimeout(() => {
        resolve("selesai");
      }, waktu);
    } else {
      reject("kelamaan");
    }
  });
}
// const coba = cobaPromise()
// coba
//     .then(() => console.log(coba))
//     .catch(()=> console.log(coba))


// cara menggunakan try dan catch
async function cobaAsync() {
  try {
    const coba = await cobaPromise();
    console.log(coba);
  } catch (error) {
    console.error(error);
  }
}

cobaAsync();
