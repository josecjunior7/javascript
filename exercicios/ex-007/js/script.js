function verificar() {
    var data = new Date()
    var ano  = data.getFullYear()
    var form = document.getElementById('txtyer')
    var res = document.getElementById('result')
    if (form.value.length == 0 || form > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(form.value)
        var gen = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gen = 'Homem'
            if (idade >=0 && idade < 10) {
                //CRIANÇA
                img.setAttribute('src', 'imagens/0-9homem.jpg')
            } else if (idade < 21) {
                //JOVEM
                img.setAttribute('src','imagens/10-16homem.jpg')
            } else if (idade < 50) {
                //ADULTO
                img.setAttribute('src', 'imagens/26-38homem.jpg')
            } else {
                //IDOSO
                img.setAttribute('src', 'imagens/51-64homem.jpg')
            }
        } else if (fsex[1].checked) {
            gen = 'Mulher'
            if (idade >=0 && idade < 10) {
                //CRIANÇA
                img.setAttribute('src', 'imagens/0-9mulher.jpg')
            } else if (idade < 21) {
                //JOVEM
                img.setAttribute('src', 'imagens/10-16mulher.jpg')
            } else if (idade < 59) {
                //ADULTO
                img.setAttribute('src', 'imagens/26-38mulher.jpg')
            } else {
                //IDOSO
                img.setAttribute('src', 'imagens/51-64mulher.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos que você é um(a) ${gen} com ${idade} anos.`
        res.appendChild(img)
    }
}