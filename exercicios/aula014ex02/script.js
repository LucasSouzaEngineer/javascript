function tabuada(){
    var txtnum = window.document.getElementById('txtnumero')
    var tab = window.document.getElementById('seltab')
    

    if(txtnum.value.length == 0){
        window.alert('Preencha o número!!!')
    }else{
        var num = Number(txtnum.value)
        tab.innerHTML = null
        for(var i = 0; i <= 10; i++){
            var item = document.createElement('option')
            item.text = `${num} x ${i} = ${num*i}`
            item.value = `tab${i}`
            tab.appendChild(item)
        }
    } 
}