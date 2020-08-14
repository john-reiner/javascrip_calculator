window.addEventListener('DOMContentLoaded', (event) => {

    const buttonContainer = document.getElementById('buttons')
    const display = document.getElementById('display')

    const calculator = {
        buttons: ['AC','+/-', '%', '÷', 7,8,9,'x',4,5,6,'-',1,2,3,'+',0,'.','='],
    }

    const createButton = (button) => {
        div = document.createElement('div')
        div.className = 'button'
        div.innerText = button
        buttonContainer.appendChild(div)
    }

    const renderButtons = () => {
        
        calculator.buttons.map(button => {
            if (button === 0) {
                div = document.createElement('div')
                div.className = 'button'
                div.style.paddingRight = '58px'
                div.innerText = button
                buttonContainer.appendChild(div)
            } else if (button === "÷" || button === "x" || button === "-" || button === "+" || button === "=") {
                div = document.createElement('div')
                div.className = 'button'
                div.style.backgroundColor = 'royalBlue'
                div.innerText = button
                buttonContainer.appendChild(div)
            } else if (button === '+/-' || button === '%' || button === 'AC') {
                div = document.createElement('div')
                div.className = 'button'
                div.style.backgroundColor = 'cornflowerBlue'
                div.innerText = button
                buttonContainer.appendChild(div)
            } else {
                createButton(button)
            }
        })
    }

    let enteredNums = []
    let numsToCalc = []
    let opperation = ''

    const calculate = () => {
        
        if (enteredNums.length === 0) {
            return
        } else {
            let num = +enteredNums.join('')
            numsToCalc.push(num)
            enteredNums = []
            if (numsToCalc.length === 2) {
                switch (opperation) {
                    case '+':
                        returnedNum = numsToCalc[0] + numsToCalc[1]
                        display.innerText = returnedNum
                        numsToCalc = [returnedNum]
                        // enteredNums = [returnedNum]
                        break;
                    case '-':
                        returnedNum = numsToCalc[0] - numsToCalc[1]
                        display.innerText = returnedNum 
                        numsToCalc = [returnedNum]
                        break;
                    case 'x': 
                        returnedNum = numsToCalc[0] * numsToCalc[1]
                        display.innerText = returnedNum 
                        numsToCalc = [returnedNum]
                        break;
                    case '÷':
                        returnedNum = numsToCalc[0] / numsToCalc[1]
                        if (returnedNum.toString().length > 8) {
                            display.style.fontSize = "20px"
                            display.innerText = returnedNum
                        }
                        display.innerText = returnedNum

                        numsToCalc = [returnedNum]
                        break;
                    default:
                        numsToCalc = [num]
                        break;
                }
            }
        }
    }

    const updateDisplay = () => {
        if (enteredNums.length === 0) {
            display.style.fontSize = "40px"
            display.innerText = 0
        } else {
            displayNum = enteredNums.join('')
            console.log(displayNum)
            if (displayNum.length > 8) {
                display.style.fontSize = "20px"
                display.innerText = displayNum
            } else {
                display.style.fontSize = "40px"
            }
            display.innerText = displayNum
        }
    }

    const signedNumber = () => {
        let num = +enteredNums.join('')
        let negNum = ~num + 1
        enteredNums = [negNum]
        updateDisplay()
        
    }

    const precentNumb = () => {
        let num = +enteredNums.join('')
        let percentNumber = num / 100
        enteredNums = [percentNumber]
        console.log(enteredNums)
        updateDisplay()
    }
    

    buttonContainer.addEventListener('click', (event) => {
        if (event.target.className === 'button') {
            let button = event.target.innerText
            switch (button) {
                case '=':
                    calculate()
                    opperation = button                 
                    break;
                case 'AC':
                    numsToCalc = []
                    enteredNums = []
                    opperation = ''
                    updateDisplay()
                    break;
                case '+':
                    calculate()
                    opperation = button
                case '-':
                    calculate()
                    opperation = button
                case 'x':
                    calculate()
                    opperation = button
                case '÷':
                    calculate()
                    opperation = button
                    break
                case '+/-':
                    signedNumber()
                    break
                case '%':
                    precentNumb()
                    break
                case '.':
                    enteredNums.push(button)
                    updateDisplay()
                    break 
                default:
                    enteredNums.push(+button)
                    updateDisplay()
                    break;
            }
        }
    })

    renderButtons()
    updateDisplay()

})