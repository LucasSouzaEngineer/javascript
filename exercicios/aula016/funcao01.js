function parimpar(n){
    if(n % 2 == 0){
        return 'par'
    }else{
        return 'impar'
    }
}

var num = parimpar(500)
console.log(num)