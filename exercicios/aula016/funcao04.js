function fatorial(n){
    let fat =1
    for(var c = n; c > 1; c--){
        fat = c * fat
    }
    return fat
}

console.log(fatorial(5))