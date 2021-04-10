const tubo1 = document.querySelector('.tubo1')
const tubo2 = document.querySelector('.tubo2')
const tubo3 = document.querySelector('.tubo3')
const tubo4 = document.querySelector('.tubo4')

let posicao1 = -644
let posicao2 = -572
let posicao3 = -572
let posicao4 = -572

let quantidade1 = 0
let quantidade2 = 0
let quantidade3 = 0

let marginTopAberturaSuperior1 = document.querySelector('.tubo1 .abertura-superior')
let paddingTopPassagem1 = document.querySelector('.tubo1 .passagem')

let marginTopAberturaSuperior2 = document.querySelector('.tubo2 .abertura-superior')
let paddingTopPassagem2 = document.querySelector('.tubo2 .passagem')

let marginTopAberturaSuperior3 = document.querySelector('.tubo3 .abertura-superior')
let paddingTopPassagem3 = document.querySelector('.tubo3 .passagem')

let marginTopAberturaSuperior4 = document.querySelector('.tubo4 .abertura-superior')
let paddingTopPassagem4 = document.querySelector('.tubo4 .passagem')

const passaro = document.querySelector('.passaro')
let alturaPassaro = 42

const numeroSpan = document.querySelector('span')

let leftPassaro = (((document.body.clientWidth - 644) / 2) + 232) + 'px'
numeroSpan.style.right = (((document.body.clientWidth - 644) / 2) + 8) + 'px'
passaro.style.left = leftPassaro

document.body.onresize = (e) => {
    leftPassaro = (((document.body.clientWidth - 644) / 2) + 232) + 'px'
    passaro.style.left = leftPassaro
    numeroSpan.style.right = (((document.body.clientWidth - 644) / 2) + 8) + 'px'
}

const flappyBird = document.querySelector('.flappy-bird')
let quantidadeDeSubidas = 0
let anguloPassaro = 360

let parteSuperiorTubo1Px = 0
let parteInferiorTubo1Px = 0
let parteSuperiorTubo1Porcentagem = 0
let parteInferiorTubo1Porcentagem = 0

let parteSuperiorTubo2Px = 0
let parteInferiorTubo2Px = 0
let parteSuperiorTubo2Porcentagem = 0
let parteInferiorTubo2Porcentagem = 0

let parteSuperiorTubo3Px = 0
let parteInferiorTubo3Px = 0
let parteSuperiorTubo3Porcentagem = 0
let parteInferiorTubo3Porcentagem = 0

let parteSuperiorTubo4Px = 0
let parteInferiorTubo4Px = 0
let parteSuperiorTubo4Porcentagem = 0
let parteInferiorTubo4Porcentagem = 0

let parado = false

document.body.addEventListener('keypress', (e) => {
    if (parado === false) {
        setTimeout(() => {
            alturaPassaro -= 3.5
            alturaPassaro < 15 ? alturaPassaro = 15 : alturaPassaro
            passaro.style.top = alturaPassaro + '%'

            anguloPassaro -= 40
            anguloPassaro < 270 ? anguloPassaro = 270 : anguloPassaro
            passaro.style.transform = `rotate(${anguloPassaro}deg)`
        }, 16)

        setTimeout(() => {
            alturaPassaro -= 2.5
            alturaPassaro < 15 ? alturaPassaro = 15 : alturaPassaro
            passaro.style.top = alturaPassaro + '%'

            anguloPassaro -= 30
            anguloPassaro < 270 ? anguloPassaro = 270 : anguloPassaro
            passaro.style.transform = `rotate(${anguloPassaro}deg)`
        }, 32)

        setTimeout(() => {
            alturaPassaro -= 1
            alturaPassaro < 15 ? alturaPassaro = 15 : alturaPassaro
            passaro.style.top = alturaPassaro + '%'

            anguloPassaro -= 20
            anguloPassaro < 270 ? anguloPassaro = 270 : anguloPassaro
            passaro.style.transform = `rotate(${anguloPassaro}deg)`
        }, 48)

        setTimeout(() => {
            alturaPassaro -= 1
            alturaPassaro < 15 ? alturaPassaro = 15 : alturaPassaro
            passaro.style.top = alturaPassaro + '%'

            anguloPassaro -= 10
            anguloPassaro < 270 ? anguloPassaro = 270 : anguloPassaro
            passaro.style.transform = `rotate(${anguloPassaro}deg)`
        }, 64)
    }
})

const flappy = setInterval(() => {
    tubo1.style.right = posicao1.toString() + 'px'

    if (posicao1 == -442) {
        quantidade1 += 1
    }

    if (quantidade1 === 1) {
        tubo2.style.display = 'flex'
    }

    if (quantidade1 > 0) {
        tubo2.style.right = posicao2.toString() + 'px'
        posicao2 += 1
    }

    if (posicao1 >= 75) {
        posicao1 = -644
        marginTopAberturaSuperior1.style.marginTop = sortearNumeroEntre(0, 200) + 'px'
        paddingTopPassagem1.style.paddingTop = sortearNumeroEntre(0, 15) + 'px'
    } else {
        posicao1 += 1
    }
    if (posicao2 >= 172) {
        if (posicao1 == -442) {
            posicao2 = -572
            marginTopAberturaSuperior2.style.marginTop = sortearNumeroEntre(0, 200) + 'px'
            paddingTopPassagem2.style.paddingTop = sortearNumeroEntre(0, 15) + 'px'
        }
    }

    if (posicao2 > 200) {
        quantidade2 = + 1
    }

    if (quantidade2 === 1) {
        tubo3.style.display = 'flex'
    }

    if (quantidade2 > 0) {
        tubo3.style.right = posicao3 + 'px'
        posicao3 += 1
    }

    if (posicao3 >= 146) {
        if (posicao2 > 200) {
            posicao3 = -572
            marginTopAberturaSuperior3.style.marginTop = sortearNumeroEntre(0, 200) + 'px'
            paddingTopPassagem3.style.paddingTop = sortearNumeroEntre(0, 15) + 'px'
        }
    }

    if (posicao3 > 200) {
        quantidade3 = + 1
    }

    if (quantidade3 === 1) {
        tubo4.style.display = 'flex'
    }

    if (quantidade3 > 0) {
        tubo4.style.right = posicao4 + 'px'
        posicao4 += 1
    }

    if (posicao4 >= 146) {
        if (posicao3 > 200) {
            posicao4 = -572
            marginTopAberturaSuperior4.style.marginTop = sortearNumeroEntre(0, 200) + 'px'
            paddingTopPassagem4.style.paddingTop = sortearNumeroEntre(0, 15) + 'px'
        }
    }

    passaro.style.top = alturaPassaro + '%'
    if ((alturaPassaro + 0.3) <= 68.2) {
        alturaPassaro += 0.2
    }

    anguloPassaro *= 1.008
    if (anguloPassaro >= 450) {
        anguloPassaro = 450
    }
    passaro.style.transform = `rotate(${anguloPassaro}deg)`

    if (posicao1 < -157 && posicao1 > -259) {
        marginTopAberturaSuperior1.style.marginTop == '' ? marginTopAberturaSuperior1.style.marginTop = 0 : marginTopAberturaSuperior1.style.marginTop
        parteSuperiorTubo1Px = parseFloat(marginTopAberturaSuperior1.style.marginTop.split('px')[0]) + 113.88

        paddingTopPassagem1.style.paddingTop == '' ? paddingTopPassagem1.style.paddingTop = 0 : paddingTopPassagem1.style.paddingTop
        parteInferiorTubo1Px = parteSuperiorTubo1Px + parseFloat(paddingTopPassagem1.style.paddingTop) + 61

        parteSuperiorTubo1Porcentagem = ((parteSuperiorTubo1Px * 100) / 628).toFixed(2) + '%'
        parteInferiorTubo1Porcentagem = ((parteInferiorTubo1Px * 100) / 628).toFixed(2) + '%'

        if ((passaro.style.top < parteSuperiorTubo1Porcentagem) || (passaro.style.top > parteInferiorTubo1Porcentagem)) {
            parado = true
            clearInterval(flappy)
        }
    }

    if (posicao2 < -84 && posicao2 > -189) {
        marginTopAberturaSuperior2.style.marginTop == '' ? marginTopAberturaSuperior2.style.marginTop = 0 : marginTopAberturaSuperior2.style.marginTop
        parteSuperiorTubo2Px = parseFloat(marginTopAberturaSuperior2.style.marginTop.split('px')[0]) + 113.88

        paddingTopPassagem2.style.paddingTop == '' ? paddingTopPassagem2.style.paddingTop = 0 : paddingTopPassagem2.style.paddingTop
        parteInferiorTubo2Px = parteSuperiorTubo2Px + parseFloat(paddingTopPassagem2.style.paddingTop) + 61

        parteSuperiorTubo2Porcentagem = ((parteSuperiorTubo2Px * 100) / 628).toFixed(2) + '%'
        parteInferiorTubo2Porcentagem = ((parteInferiorTubo2Px * 100) / 628).toFixed(2) + '%'

        if ((passaro.style.top < parteSuperiorTubo2Porcentagem) || (passaro.style.top > parteInferiorTubo2Porcentagem)) {
            parado = true
            clearInterval(flappy)
        }
    }

    if (posicao3 < -12 && posicao3 > -116) {
        marginTopAberturaSuperior3.style.marginTop == '' ? marginTopAberturaSuperior3.style.marginTop = 0 : marginTopAberturaSuperior3.style.marginTop
        parteSuperiorTubo3Px = parseFloat(marginTopAberturaSuperior3.style.marginTop.split('px')[0]) + 113.88

        paddingTopPassagem3.style.paddingTop == '' ? paddingTopPassagem3.style.paddingTop = 0 : paddingTopPassagem3.style.paddingTop
        parteInferiorTubo3Px = parteSuperiorTubo3Px + parseFloat(paddingTopPassagem3.style.paddingTop) + 61

        parteSuperiorTubo3Porcentagem = ((parteSuperiorTubo3Px * 100) / 628).toFixed(2) + '%'
        parteInferiorTubo3Porcentagem = ((parteInferiorTubo3Px * 100) / 628).toFixed(2) + '%'

        if ((passaro.style.top < parteSuperiorTubo3Porcentagem) || (passaro.style.top > parteInferiorTubo3Porcentagem)) {
            parado = true
            clearInterval(flappy)
        }
    }

    if (posicao4 < 61 && posicao4 > -45) {
        marginTopAberturaSuperior4.style.marginTop == '' ? marginTopAberturaSuperior4.style.marginTop = 0 : marginTopAberturaSuperior4.style.marginTop
        parteSuperiorTubo4Px = parseFloat(marginTopAberturaSuperior4.style.marginTop.split('px')[0]) + 113.88

        paddingTopPassagem4.style.paddingTop == '' ? paddingTopPassagem4.style.paddingTop = 0 : paddingTopPassagem4.style.paddingTop
        parteInferiorTubo4Px = parteSuperiorTubo4Px + parseFloat(paddingTopPassagem4.style.paddingTop) + 61

        parteSuperiorTubo4Porcentagem = ((parteSuperiorTubo4Px * 100) / 628).toFixed(2) + '%'
        parteInferiorTubo4Porcentagem = ((parteInferiorTubo4Px * 100) / 628).toFixed(2) + '%'

        if ((passaro.style.top < parteSuperiorTubo4Porcentagem) || (passaro.style.top > parteInferiorTubo4Porcentagem)) {
            parado = true
            clearInterval(flappy)
        }
    }

    if (posicao1 === -154 || posicao2 === -81 || posicao3 === -9 || posicao4 === 58) {
        numeroSpan.innerText = parseInt(numeroSpan.innerText) + 1
    }
}, 10)

function sortearNumeroEntre(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    const numero = Math.floor(Math.random() * (max - min + 1)) + min
    return numero
}

flappyBird.onclick = e => {
    if (parado === true) { location.reload() }
}