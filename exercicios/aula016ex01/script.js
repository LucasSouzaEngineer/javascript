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
    txtnum.value = ''
    txtnum.focus()
}

function finalizar(){
    if(listanum.length == 0){
        window.alert('Adicione valores para serem analisados')
    }else{
        var res = window.document.getElementById('res')
        var tamanho = listanum.length
        var maior = Math.max.apply(null, listanum)
        var menor = Math.min.apply(null, listanum)
        var soma = 0

        for(var i = 0; i < tamanho; i++){
            soma += listanum[i]
        }

        estatistica.innerHTML += `<p>Array ${listanum}</p>`
        estatistica.innerHTML += `<p>Ao todo, temos ${tamanho} números cadastrados</p>`
        estatistica.innerHTML += `<p>O maior valor informado foi: ${maior}</p>`
        estatistica.innerHTML += `<p>O menor valor informado foi: ${menor}</p>`
        estatistica.innerHTML += `<p>Somando todos os valores temos: ${soma}</p>`
        estatistica.innerHTML += `<p>A media dos valores digitados é: ${soma/listanum.length}</p>`
        res.appendChild(estatistica)
    }
}