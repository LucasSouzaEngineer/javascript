function contar(){
    var inicioTxt = window.document.getElementById('inicio')
    var fimTxt = window.document.getElementById('fim')
    var passoTxt = window.document.getElementById('passo')
    var res = window.document.getElementById('res')
    var inicio = Number(inicioTxt.value)
    var fim = Number(fimTxt.value)
    var passo = Number(passoTxt.value)

    res.innerHTML = null

    if(inicioTxt.value.length == 0 || fimTxt.value.length == 0 || passoTxt.value.length == 0){
        window.alert('[Erro] Faltam dados!!!')
    }else{
        res.innerHTML = 'Contando: <br>'
        if(passo <= 0){
            window.alert('Passo não pode ser 0, considerando passo 1')
            passo = 1
        }
    
        if(inicio < fim){                              // contagem crescente
            for(var i = inicio; i <= fim; i += passo){
                res.innerHTML += `${i} &#x1F449 `
                }
            }else if(inicio > fim){                    // contagem decrescente
                for(var i = inicio; i >= fim; i -= passo){
                    res.innerHTML += `${i} &#x1F449 `
                    }
            }
        res.innerHTML += `&#x1F3C1`
    }
}