
function carregar() {
    var text = document.getElementById("text")
    var picture = document.getElementById("picture")
    var data = new Date()
    var hora = data.getHours()
    text.innerHTML = `Agora são ${hora} horas.`
    var dia = document.getElementById("title");

    if (hora < 13 && hora >= 0) {
        dia.innerHTML = `Bom dia`
        picture.src = './imagens/Dia.png'
        document.body.style.backgroundColor = 'gold';
    } else if (hora >= 13 && hora < 18) {
        dia.innerHTML = `Boa tarde`
        picture.src = './imagens/Tarde.png'
        document.body.style.backgroundColor = 'blue';
    } else {
        dia.innerHTML = `Boa noite`
        picture.src = './imagens/noite.png'
        document.body.style.backgroundColor = 'purple';
    }
}

