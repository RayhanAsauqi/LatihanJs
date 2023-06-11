//1.ketika klick button maka background dari body terganti
//2.tangkap dulu tombolnya
//3.tangkap element yang kita tuju

const tUbahWarna = document.getElementById('tUbahWarna');

//event handler

tUbahWarna.onclick = function(){
    // document.body.style.backgroundColor = 'blue';
    // document.body.setAttribute('class','biru-muda');
    document.body.classList.toggle('biru-muda');

}


//ketika di tambahkan tombol,tombol tersebut berganti warna dari warna favorite menjadi warna yang tidak favorite\


//Merangkai tombol
const tAcakWarna = document.createElement('button');
const teksTombol = document.createTextNode('acak warna');
tAcakWarna.appendChild(teksTombol);
tAcakWarna.setAttribute('type','button');
tUbahWarna.after(tAcakWarna);

//mengacak warna
tAcakWarna.addEventListener('click', function(){
    const r = Math.round(Math.random() * 255 + 1);
    const g = Math.round(Math.random() * 255 + 1);
    const b = Math.round(Math.random() * 255 + 1);
  
    document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')';
})



//menangkap slider
const sMerah = document.querySelector('input[name=sMerah]')
const sHijau = document.querySelector('input[name=sHijau]');
const sBiru = document.querySelector('input[name=sBiru]');

//membuat slider bisa menganti warna
sMerah.addEventListener('input', function(){
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;
    document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')';
})
sHijau.addEventListener('input', function(){
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;
    document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')';
})
sBiru.addEventListener('input', function(){
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;
    document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')';
})


//
document.body.addEventListener('mousemove', function(event){
    //mencari posisi mouse
    // console.log(event.clientX)
    //ukuran browser
    // console.log(window.innerWidth)
    const xPos = Math.round((event.clientX / window.innerWidth) * 255);
    const yPos = Math.round((event.clientY / window.innerHeight) * 255);
    
    document.body.style.backgroundColor = 'rgb('+ xPos +','+ yPos +',100)';
}) 