let tangan = 0
input.onButtonPressed(Button.A, function () {
    tangan = randint(0, 2)
    if (tangan == 0) {
        basic.showIcon(IconNames.SmallSquare)
    } else if (tangan == 1) {
        basic.showIcon(IconNames.Scissors)
    } else {
        basic.showIcon(IconNames.Square)
    }
    basic.pause(500)
    basic.clearScreen()
})
