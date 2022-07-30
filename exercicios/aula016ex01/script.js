var listanum =[]
var estatistica = window.document.createElement('p')

function adicionar(){
    var txtnum = window.document.getElementById('txtnum')
    var numero = Number(txtnum.value)
    

    var lista = window.document.getElementById('lista')
    var itemlista = window.document.createElement('option')

    if(numero < 0 || numero > 100 || txtnum.value.length == 0){
        window.alert('Digite um número válido para o intervalo informado!!!')
    }else{
        listanum.push(numero)
        itemlista.text = `Valor ${numero} adicionado`
        lista.appendChild(itemlista)
    }
    estatistica.innerHTML = null
}

function finalizar(){
    var res = window.document.getElementById('res')
    var tamanho = listanum.length
    var maior = Math.max.apply(null, listanum)
    var menor = Math.min.apply(null, listanum)
    var soma = 0
    var media = 0

    for(var i = 0; i < tamanho; i++){
        soma += listanum[i]
    }
    estatistica.innerHTML = `Array ${listanum}<br> tamanho: ${tamanho}<br> maior: ${maior}<br> menor: ${menor}<br> soma: ${soma}<br> media: ${soma/listanum.length}`
    //var estatistica = window.createElement('p')
    //estatistica.text = `Array digitado`
    res.appendChild(estatistica)
}