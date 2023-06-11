//Destructuring Variable / Assigment

//1.Destrucing Array

const perkenalan = ["halo", "nama", "saya", "Rayhan"];

// const [salam, satu, dua, nama] = perkenalan;

//skip item
// const [salam, , , nama] = perkenalan;

//swap item
// let a = 1;
// let b = 2;

// [a, b] = [b, a];
// console.log(a);
// console.log(b);

//return value pada function
// function coba() {
//   return [1, 2];
// }

// const [a,b] = coba();
// console.log(a);

//rest parameter
// const [a, ...values] = [1, 2, 3, 4, 5, 6];
// console.log(a);
// console.log(values);

//Destructing Object
// const mhs = {
//   nama: "rayhan",
//   umur: 20,
// };

// const { nama, umur } = mhs;
// console.log(umur);

//Assigment tanpa deklarasi object

// ( { nama, umur } )= {nama: "rayhan",umur: 20,};
// console.log(umur);

//Assigment ke variable baru

// const mhs = {
//        nama: "rayhan",
//        umur: 20,
//      };

//      const { nama:a, umur:u } = mhs;
//      console.log(a);

//memberikan default value

// const mhs = {
//   nama: "rayhan",
//   umur: 20,

// };

// const { nama, umur, email = "reyh@gmail.com" } = mhs;
// console.log(email);

//Memberikan nilai default + assigment ke variable baru

// const mhs = {
//     nama: "rayhan",
//     umur: 20,

//   };

//   const { nama:n, umur:u, email:e = "reyh@gmail.com" } = mhs;
//   console.log(e);

//Rest Parameter
// const mhs = {
//     nama: "rayhan",
//     umur: 20,
//     email:'reyhanalsauqi12@gmail.com'

//   };

//   const { nama, ...value } = mhs;
//   console.log(value);

//Mengambil field pada object, setelah dikirim sebagai parameter untuk function

const mhs = {
  id: 123,
  nama: "rayhan",
  umur: 20,
  email: "reyhanalsauqi12@gmail.com",
};

function getIdMhs({id}) {
  return id;
}

console.log(getIdMhs(mhs));
