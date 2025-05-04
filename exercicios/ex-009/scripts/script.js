function contar() {
    var ini = document.getElementById('ini')
    var fim = document.getElementById('fim')
    var pass = document.getElementById('pass')
    var res = document.getElementById('result')

    if (ini.value.length == 0 || fim.value.length == 0 || pass.value.length == 0) {
        res.innerHTML = 'Impossível contar!'
        //alert('[ERRO] Selecione um valor para iniarmos a contagem')
    } else {
        res.innerHTML = 'Contando: <br>'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(pass.value)
        if (p <= 0) {
            alert('Passo inválido! Consirar como passo 1')
            p = 1
        }
        if (i < f) {
            //CONTAGEM CRESCENTE
            for(let c = i; c <= f; c+= p) {
                res.innerHTML += `${c} \u{1F449}`
            }
            
        } else {
            //CONTAGEM DECRESCENTE
            for (let c = i; c >= f; c -= p) {
                res.innerHTML += `${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}