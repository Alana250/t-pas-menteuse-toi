let n = 0
while (!(input.buttonIsPressed(Button.B))) {
    if (input.buttonIsPressed(Button.A)) {
        n += 1
        if (n > 3) {
            n = 1
        }
        if (n == 1) {
            basic.showIcon(IconNames.Happy)
        } else {
            if (n == 2) {
                basic.showIcon(IconNames.Asleep)
            } else {
                basic.showIcon(IconNames.Sad)
            }
        }
    }
}
basic.showString("votre humeur")
basic.showNumber(n)
