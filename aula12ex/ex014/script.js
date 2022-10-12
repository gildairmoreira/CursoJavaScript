function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        //Bom dia
        img.src = 'fotomanha.png'
        document.body.style.background = '#d7e654c0'
    } else if(hora >= 12 && hora < 18){
        //Boa tarde
        img.src = 'fototarde.png'
        document.body.style.background = '#D2640E'
    } else{
        //Boa noite
        img.src = 'fotonoite.png'
        document.body.style.background = '#afafaf'
    }
}