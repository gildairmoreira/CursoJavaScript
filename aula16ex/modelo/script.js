let num = document.getElementById('fnum')
let lista = document.getElementById('flista')
let res = document.getElementById('res')
let valores = []

function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100){          //vê se os numeros estão entre os que precisso
        return true
    } else{
        return false
    }
}

function inlista(n, l) {
    if(l.indexOf(Number(n)) != -1) {          //vê se o num ja tá na lista
        return true
} else{
    return false
    }
}


function adicionar(){
    if (isNumero(num.value) && !inlista(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        lista.appendChild(item)
        res.innerHTML = ''
    } else{
        window.alert('[ERRO] Numero invalido ou já encontrado')
    }
    num.value = ''
    num.focus()
    
 }

 function finalizar(){
    if(valores.length == 0){
        window.alert('Adicione valores antes de Finalizar!')
    } else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for(let pos in valores){
            soma += valores[pos]
            if (valores[pos] > maior)
                maior = valores[pos]
            if (valores[pos] < menor)
                menor = valores[pos]
        }
        media = soma / tot
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados`
        res.innerHTML += `<p>O maior valor informado foi ${maior}</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}</p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
        res.innerHTML += `<p>A média dos valores digitados ${media}.</p>`
    }
}