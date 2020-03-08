// When the operation and value are received:
//
// -Calculate Answer and send it
radio.onReceivedValue(function (name, value) {
    calculateAnswer(name, value)
    radio.sendString("" + (answer))
})
// Set the question to the received string
radio.onReceivedString(function (receivedString) {
    question = receivedString
})
// When B is pressed show the answer (for debugging
// purposes)
input.onButtonPressed(Button.B, function () {
    basic.showString("" + (answer))
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
// When button A is pressed show the question (for
// debugging purposes)
input.onButtonPressed(Button.A, function () {
    basic.showString(question)
})
let question = ""
let answer = 0
radio.setGroup(50)
