input.onButtonPressed(Button.A, function () {
    tempo = 0
    iniciar = true
    basic.clearScreen()
})
input.onGesture(Gesture.Shake, function () {
    basic.showString("Acertos:" + convertToText(acertos))
})
input.onButtonPressed(Button.AB, function () {
    alvo = randint(6, 14)
    acertos = 0
    tempo = 0
    iniciar = false
    basic.showString("[A] Iniciar")
    basic.showString("[B] Parar")
    basic.showString("[AB] Reinicia")
    basic.showString("alvo:" + convertToText(alvo))
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    iniciar = false
    if (tempo == alvo) {
        acertos += 1
        basic.showIcon(IconNames.Heart)
    } else {
        basic.showIcon(IconNames.Duck)
        basic.showString("seu tempo:" + convertToText(tempo))
    }
    alvo = randint(6, 14)
    basic.showString("novo alvo:" + convertToText(alvo))
})
let iniciar = false
let tempo = 0
let acertos = 0
let alvo = 0
alvo = randint(6, 14)
acertos = 0
tempo = 0
iniciar = false
basic.showString("[A] Iniciar")
basic.showString("[B] Parar")
basic.showString("[AB] Reinicia")
basic.showString("alvo:" + convertToText(alvo))
basic.clearScreen()
basic.forever(function () {
    if (iniciar) {
        tempo += 1
        basic.pause(1000)
    }
})
