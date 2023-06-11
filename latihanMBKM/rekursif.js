
//deret angka menggunakan rekursif

function deretAngka(n){
    if(n == 3){
        console.log(n)   //base case
    }else{
        deretAngka(n - 3)   // rekursif
        console.log(n);
    }
}

console.log(deretAngka(9))




// faktorial

function faktorial(n){
    if(n === 1){
        return 1;
    }else{
        return n * faktorial(n-1);
    };
};

// console.log(faktorial(4))