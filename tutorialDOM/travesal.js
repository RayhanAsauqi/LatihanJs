//event handling

// const card = document.querySelectorAll('.card');
// const keluar = document.querySelectorAll(' .close');

// keluar.addEventListener('click', function(){
//    card.style.display = 'none';

// })


//DOM Travesal
// const close = document.querySelectorAll('.close');

//cara yang kurang baik
// for( let i = 0; i < close.length; i++){
//     close[i].addEventListener('click', function(e){
      // close[i].parentElement.style.display = 'none'
//         e.target.parentElement.style.display = 'none'
//     })
// }

//cara yang lebih baik untuk mencari / menelusuri sebuah element ke element yang lain
// close.forEach(el => {
//     el.addEventListener('click', e => {
//         e.target.parentElement.style.display = 'none';
          //mengatasi aksi default
//         e.preventDefault();
         //untuk menghentikan bubling
//         e.stopPropagation();
//     })
// });



 //bubling
// const cards = document.querySelectorAll('.card');
// cards.forEach(card =>{
//     card.addEventListener('click',e =>{
//         alert('ok')
//     })
// })






//event bubling efektif
const container = document.querySelector('.container');

container.addEventListener('click', e => {
    if( e.target.className == 'close' ){
        e.target.parentElement.style.display = 'none';
        e.preventDefault();
    }
});




















// const nama = document.querySelector('.nama');
// console.log(nama.nextElementSibling.nextElementSibling)




