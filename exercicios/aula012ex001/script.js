function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')   
    var data = new Date()
    var hora = data.getHours()
    
    hora = 19
    msg.innerHTML = (`Agora são ${hora} horas`)

    if(hora >=0 && hora < 12){
        img.src = 'manha-circular.png'
        msg.innerHTML += ', Bom dia!'
        document.body.style.background = '#938C7E'
    }else if(hora >=12 && hora < 18){
        img.src = 'tarde-circular.png'
        msg.innerHTML += ', Boa tarde!'
        document.body.style.background = '#9D6870'
    }else {
        img.src = 'noite-circular.png'
        msg.innerHTML += ', Boa noite!'
        document.body.style.background = '#101034'
    }
}