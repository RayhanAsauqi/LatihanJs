//DoM Selection
//document.getElementById() -> mengembalikan element
// const judul = document.getElementById('judul');
// judul.style.color = 'red';
// judul.style.backgroundColor = '#ccc';
// judul.innerHTML = 'Rayhan alsauqi';



//document.getElementsByTagName() -> Mengembalikan HTML Collection
// const P = document.getElementsByTagName('p');

// for(let i = 0; i < P.length; i++){

//     P[i].style.background = 'lightblue';
// }

// const h1 = document.getElementsByTagName('h1')[0];
// h1.style.fontSize = '50px';


//document.getElementsByClassName()-> HTML Collection;

// const p1 = document.getElementsByClassName('p1')[0];
// p1.innerHTML = 'ini di ubah dari javascript';



//document.querySelector() -> mengembalikan  element

// const p4 = document.querySelector('#b p');
// p4.style.color =  'green';
// p4.style.fontSize = '30px'


// const li2 = document.querySelector('section#b ul li:nth-child(2)')
//  li2.style.backgroundColor = 'orange';


 //document.querySlectorAll()
//  const p = document.querySelectorAll('p');
//  for(let i = 0; i < p.length; i ++){
//     p[i].style.backgroundColor = 'lightblue';
//  }

// const sectionB = document.getElementById('b');
// const p4 = sectionB.querySelector('p');

// p4.style.backgroundColor = 'orange'

// const judul = document.getElementById('judul');
// judul.innerHTML = '<em>rayhan alsauqi</em>'


// const sectionA = document.querySelector('section#a');
// sectionA.innerHTML = 'hello world';

// const judul = document.querySelector('#judul');
// judul.style.color = 'lightblue';
// judul.style.backgroundColor = "salmon";


//Manipulasi element


// const judul = document.getElementsByTagName('h1')[0];

// const a = document.querySelector('section#a a');
// a.setAttribute('id','link');

// const p2 = document.querySelector('.p2');
// p2.classList.add('label');
// p2.classList.remove('label');
// p2.classList.toggle('label')


//Dom Manipulation
//buat element baru
const pBaru = document.createElement('p');
const teksPBaru = document.createTextNode('Paragraf Baru');

//simpan tulisan ke dalam paragraf
pBaru.appendChild(teksPBaru);
//simpan pBaru di akhir section A
const sectionA = document.getElementById('a');
sectionA.appendChild(pBaru);




const liBaru = document.createElement('li');
const teksLiBaru = document.createTextNode('Item Baru');
liBaru.appendChild(teksLiBaru);

const ul = document.querySelector('section#b ul');
const li2 = ul.querySelector(' li:nth-child(2)')

ul.insertBefore(liBaru, li2);














//menghapus child


const link = document.getElementsByTagName('a')[0];

sectionA.removeChild(link);



const sectionB = document.getElementById('b');
const p4 = sectionB.querySelector('p');

const h2Baru = document.createElement('h2');
const teksH2Baru = document.createTextNode('Judul Baru!');

h2Baru.appendChild(teksH2Baru);

sectionB.replaceChild(h2Baru, p4);


pBaru.style.backgroundColor = 'lightgreen';
liBaru.style.backgroundColor = 'lightgreen';
h2Baru.style.backgroundColor = 'lightgreen';












