function carregar() {
    var msg = document.getElementById('msg')
    var foto = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    //var hora = 14
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 0 && hora < 12) {
        //BOM DIA!!
        foto.src = 'imagens/ftmanha.png'
        document.body.style.background = '#fdd276'
    } else if (hora >= 12 && hora <= 18) {
        //BOA TARDE!!
        foto.src = 'imagens/fttarde.png'
            document.body.style.background = '#e2845f'
    } else {
        //BOA NOITE!!
        foto.src = 'imagens/ftnoite.png'
            document.body.style.background = '#0c0027'
    }
}