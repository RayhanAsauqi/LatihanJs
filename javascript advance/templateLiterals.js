//Template Literals / Template String

// const nama = 'rayhan ';
// const umur = 20;

// console.log(`Halo, Nama saya ${nama}, Umur Saya ${umur} tahun.`)

//Embedded Expresion
// console.log(`${alert('halo!')}`)

// const x = 11;
// console.log(`${(x % 2 == 0) ? 'genap' : 'ganjil'}`);

//html fragments
// const mhs = {
//     nama : 'rayhan alsauqi',
//     umur : 33,
//     nim : '120103041',
//     email : 'reyhanalsauqi12@gmail.com'
// };

// const el = `<div class="mhs>
// <h2>${mhs.nama}</h2>
// <span class="nim">${mhs.nim}</span>
// </div>;`

// console.log(el)

//  const mhs = {
//          nama :'rayhan alsauqi',
//          umur : 33,
//          nim : '120103041',
//          email : 'reyhanalsauqi12@gmail.com'
//      };

//  const el = `<div class ="mhs">
//  <h2>${mhs.nama}</h2>
//  <span class="nim">${mhs.nim}</span>
//  </div>`;

//2.Looping

// const mhs = [
// {
//     nama : 'Rayhan Alsauqi',
//     email : 'reyhanalsauqi12@gmail.com'
// },

// {
//     nama : 'Doddy Firmansya',
//     email : 'doddy@gmail.com'
// },

// {
//     nama : 'Erik',
//     email : 'erik@gmail.com'
// }

// ];

// const el = `<div class="mhs">
//     ${mhs.map(m => `<ul>
//     <li>${m.nama}</li>
//     <li>${m.email}</li>

//     </ul>`).join('')}
// </div>`

//3. Conditional
//ternary
// const lagu = {
//     judul : 'Kau Adalah',
//     penyanyi : 'Isyana Sarasvati',
//     feat : 'Rayi Putra'
// }

// const el =`<div class="lagu">
// <ul>
//     <li>${lagu.penyanyi}</li>
//     <li>${lagu.judul} ${lagu.feat ? `(feat. ${lagu.feat})` : ''}</li>
// </ul>
// </div>`

//4. Nested
//HTML Fragments bersarang

const mhs = {
  nama: "Rayhan alsauqi",
  semester: 6,
  mataKuliah: [
    "Rekayasa Perangkat Lunak",
    "Pemrograman Web",
    "Kecerdasan Buatan",
    "Perancangan Web",
  ],
};

function cetakMataKuliah(mataKuliah) {
  return `
        <ol>
            ${mataKuliah.map((mk) => `<li>${mk}</li>`)}
        </ol>
    `;
}

const el = `<div class = "mhs">
    <h2>${mhs.nama}</h2>
    <span class="semester">Semester : ${mhs.semester}</span>
    <h4>Mata Kuliah</h4>
    ${cetakMataKuliah(mhs.mataKuliah)}
</div>`;

document.body.innerHTML = el;
