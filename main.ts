// When the operation and value are received:
//
// -Calculate Answer and send it
radio.onReceivedValue(function (name, value) {
    calculateAnswer(name, value)
})
// When you tilt right, show the question
input.onGesture(Gesture.TiltRight, function () {
    basic.showString(question)
})
// Set the question to the received string
radio.onReceivedString(function (receivedString) {
    question = receivedString
})
// When A and B are pressed, show the string
input.onButtonPressed(Button.AB, function () {
    basic.showString("" + (answer))
})
// When B is pressed- reset
input.onButtonPressed(Button.B, function () {
    answer = 0
})
// This calculates the answer based on the received
// operation and number
function calculateAnswer (operation: string, operand: number) {
    if (operation == "DBL") {
        answer = operand * 2
    } else if (operation == "INC") {
        answer = operand + 1
    } else if (operation == "HLF") {
        answer = operand / 2
    } else if (operation == "DEC") {
        answer = operand - 1
    }
}
// When A is pressed send the string
input.onButtonPressed(Button.A, function () {
    radio.sendString("" + (answer))
})
let answer = 0
let question = ""
radio.setGroup(50)
basic.showIcon(IconNames.Yes)
