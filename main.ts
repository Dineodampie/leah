input.onButtonPressed(Button.A, function () {
    basic.showNumber(20)
    basic.showIcon(IconNames.TShirt)
    input.setAccelerometerRange(AcceleratorRange.OneG)
    basic.showArrow(ArrowNames.East)
})
basic.pause(100)
basic.forever(function () {
    basic.pause(100)
})
