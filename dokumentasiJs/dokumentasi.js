//manipulasi array

//menambah elemen pada array dan menghapus
//var arr = [];
//arr[0] = "Rayhan";
//arr[1] = undefined;
//arr[2] = "nofa";
//arr[3] = "doddy";
//console.log(arr)

//menampilkan isi array tanpa menggunakan object
// var arr = ["Rayhan","Alsauqi","nofa",1,2,3,4,5,6,7,];
// for(var i = 0; i < arr.length; i++){
//     console.log('mahasiswa ke - ' + (i +1)+ ':' + arr[i])
// }

//method pada array
//1.join
// var arr = ['rayhan','alsauqi','nofa'];
// console.log(arr.join())

//2.push & pop
// arr.push('cita-cita jadi programer')
// arr.pop()
// arr.pop()
//console.log(arr.join())

//3.unshift & shift
// arr.unshift('aku')
// arr.shift()
// console.log(arr.join())

//splice dan slice
//(splice)
//rumusnya : splice(index awal,mau di hapus berapa,elemenBaru1,elmenBaru2,.... )
// arr.splice(2,0,'yoi')
// console.log(arr.join())
// var arr = ['rayhan','alsauqi','nofa','memet','yoman'];
 //slice
 //rumusunya : slice(awal,akhir)
// var arr2 = arr.slice(1,3);
// console.log(arr2.join()); 
// console.log(arr.join());


//forEach
// var arr = [1,2,3,4,5,6,7,8];
// var nama = ["Rayhan","Alsauqi","nofa"];
// arr.forEach(function(e){
//     console.log(e)
// })

// nama.forEach(function(e,i){
//     console.log('mahasiswa ke- '+(i + 1) + ' adalah ' + e  );
// })


//map
// var angka = [1,3,4,5,6,7,8,9,7]
// var angka2 = angka.map(function(e){
//     return e * 2;
// })
// console.log(angka2.join())

//sort
// var angka = [1,3,20,4,5,6,10,7,8,9,7]
// angka.sort(function(a,b){
//     return a-b;
// });
// console.log(angka.join());










//cara membuat object pada java script
//Object Literal
var mhs1 = {
    nama : 'rayhan alsauqi',
    nrp : 120103041,
    email: 'reyhanalsauqi@gmail.com',
    jurusan:'Teknik Informatika'
}

//function declaration
function buatObjectMahasiswa(nama,nrp,email,jurusan){
    var mhs = {};

    mhs.nama = nama;
    mhs.nrp = nrp;
    mhs.email = email;
    mhs.jurusan = jurusan;
    return mhs;
}
var mhs2 = buatObjectMahasiswa('rayhan',12345,'reyhan@gmail.com','teknik informatika');


//constructur function
function Mahasiswa(nama,nrp,email,jurusan,){
    this.nama = nama;
    this.nrp = nrp;
    this.email = email;
    this.jurusan = jurusan;
}

var mhs3 = new Mahasiswa('alex',123456,'alex12@gmail.com','Teknik Informatika');

function Halo(){
    console.log('woiiii');
}
 new Halo();