led.plot(0, 0)
let number = 0
let y = 0
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        while (number < 4) {
            basic.clearScreen()
            number += 1
            led.plot(number, y)
            basic.pause(500)
        }
        while (number < 0) {
            basic.clearScreen()
            number += -1
            led.plot(number, y)
            basic.pause(500)
        }
    }
    if (input.buttonIsPressed(Button.B)) {
        if (y < 4) {
            basic.clearScreen()
            y += 1
            led.plot(number, y)
            basic.pause(500)
        } else {
            while (input.buttonIsPressed(Button.B)) {
                while (y != 0) {
                    basic.clearScreen()
                    y += -1
                    led.plot(number, y)
                    basic.pause(500)
                }
            }
        }
    }
})
