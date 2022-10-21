led.plot(0, 0)
let number = 0
let y = 0
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        basic.clearScreen()
        led.plot(number, y)
        basic.pause(500)
        number += 1
    }
    if (number > 4) {
        number = 0
    }
    if (input.buttonIsPressed(Button.B)) {
        basic.clearScreen()
        led.plot(number, y)
        basic.pause(500)
        y += 1
    }
    if (y > 4) {
        y = 0
    }
})
