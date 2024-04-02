function contar() {
    let inicio = document.getElementById('txti')
    let fim = window.document.getElementById('txtf')
    let passo = window.document.getElementById('txtp')
    let res = window.document.getElentById('res')
    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert('[ERRO] Faltam dados!')
    } else {
        res.innerHTML = 'Contando...'
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (i < f) { // crescente
            for(let c = i; c <= i; c += p) {
                res.innerHTML += `${c} \u{1F609}`
            } 
        } else { // decrescente
            for(let c = i; c >= i; c += p) {
                res.innerHTML += `${c} \u{1F609}`
            } 
        }
        res.innerHTML += `\u{1F3C1}`
    }
}