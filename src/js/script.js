function clean() {
    document.getElementById('operacaoAtual').innerHTML = ""
}

function del() {
    var resultado = document.getElementById('operacaoAtual').innerHTML
    document.getElementById('operacaoAtual').innerHTML = resultado.substring(0, resultado.length -1)
}


function insert(number) {
    var numeros = document.getElementById('operacaoAtual').innerHTML
    document.getElementById('operacaoAtual').innerHTML = numeros + number
}


function calcular() {
    var resultado = document.getElementById('operacaoAtual').innerHTML
    if(resultado) {
        document.getElementById('operacaoAtual').innerHTML = eval(resultado)
    }
    document.getElementById('operacaoAnterior').innerHTML = resultado
}

function ce() {
    document.getElementById('operacaoAnterior').innerHTML = ""
    document.getElementById('operacaoAtual').innerHTML = ""

}












// const operacaoAnteriortext = document.querySelector('#operacaoAnterior')
// const operacaoAtualtext = document.querySelector('#operacaoAtual')
// const buttons = document.querySelectorAll('#buttons-container button')

// class calculadora {

//     constructor(operacaoAnteriortext,operacaoAtualtext) {
//         this.operacaoAnteriortext = operacaoAnteriortext
//         this.operacaoAtualtext = operacaoAtualtext
//         this.operacaoAtual = ''
//     }

//     addDigito(digito) {

//         if(digito ==='.' && this.operacaoAtualtext.innerText.includes('.')){
//             return 
//         }
//         this.operacaoAtual = digito
//         this.updateScreen()

//     }

//     updateScreen() {
//         this.operacaoAtualtext.innerText += this.operacaoAtual
//     }

// }

// const calc = new calculadora(operacaoAnterior,operacaoAtual)

// buttons.forEach((btn) => {
//     btn.addEventListener('click', (e)=>{
//         const value = e.target.innerText

//         if(+value>=0 || value =='.'){
//             calc.addDigito(value)
//         } else {
//             console.log(`Op: ${value}`)
//         }
//     })
// })