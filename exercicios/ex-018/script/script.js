function buscarCEP() {
    let input= document.getElementById('cep').value

    const ajax = new XMLHttpRequest()
    ajax.open('GET', 'https://viacep.com.br/ws/' + input + '/json/')
    ajax.send()

    ajax.onload = function () {
        //document.getElementById('texto').innerHTML = this.responseText

        //TRANSFORMEI O TEXTO EM OBJETO
        let obj = JSON.parse(this.responseText)

        //PEGUEI OS VALORES
        let logradouro = obj.logradouro
        let bairro = obj.bairro
        let cidade = obj.localidade
        let sigla = obj.uf
        let estado = obj.estado

        document.getElementById('texto').innerHTML = "Endereço: " +logradouro+ "<br> Bairro: "+bairro+"<br> Cidade: "+cidade+"<br> Estado: "+estado+"<br> UF: "+sigla
    }
}