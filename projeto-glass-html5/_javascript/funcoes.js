let icone = document.getElementById('icone')
let btnHome = document.getElementById('btnHome')
let btnSpec = document.getElementById('btnSpec')
let btnFotos = document.getElementById('btnFotos')
let btnMultimidia = document.getElementById('btnMultimidia')
let btnFaleConosco = document.getElementById('btnFaleConosco')

/*btnHome.addEventListener('mouseout', restaurarIcone)
btnSpec.addEventListener('mouseout', restaurarIcone)
btnFotos.addEventListener('mouseout', restaurarIcone)
btnMultimidia.addEventListener('mouseout', restaurarIcone)

btnHome.addEventListener('mouseenter', trocarIcone('_imagens/home.png'))
btnSpec.addEventListener('mouseenter', trocarIcone('_imagens/especificacoes-02.png'))

btnFaleConosco.addEventListener('mouseout', restaurarIcone)

*/

function restaurarIcone() {
    icone.src = "_imagens//glass-oculos-preto-peq.png"
}

function trocarIcone(path) {
    icone.src = path
}