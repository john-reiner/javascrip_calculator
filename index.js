window.addEventListener('DOMContentLoaded', (event) => {

    const buttonContainer = document.getElementById('buttons')
    const display = document.getElementById('display')
    

    const calculator = {
        buttons: ['AC','+/-', '%', '÷', 7,8,9,'x',4,5,6,'-',1,2,3,'+',0,'.','='],
    }

    const createButton = (button, stretch = false, backgroundColor = '', id = false) => {
        div = document.createElement('div')
        div.className = 'button'
        id = true ? div.id = button : null
        stretch === true ? div.style.paddingRight = '58px' : null
        div.style.backgroundColor = backgroundColor
        div.innerText = button
        buttonContainer.appendChild(div)
    }

    const renderButtons = () => {
        calculator.buttons.map(button => {
            if (button === 0) {
                createButton(button, stretch = true)
            } else if (button === "÷" || button === "x" || button === "-" || button === "+" || button === "=") {
                createButton(button, stretch = false, backgroundColor = 'royalBlue')
            } else if (button === '+/-' || button === '%') {
                createButton(button, stretch = false, backgroundColor = 'cornflowerBlue')
            } else if (button === 'AC') {
                createButton(button, stretch = false, backgroundColor = 'cornflowerBlue', id = true)
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
        updateDisplay()
    }
    

    

    buttonContainer.addEventListener('click', (event) => {
        const ac = document.getElementById('AC')
        if (event.target.className === 'button') {
            let button = event.target.innerText
            switch (button) {
                case '=':
                    calculate()
                    opperation = button                 
                    break;
                case 'C':
                    numsToCalc = []
                    enteredNums = []
                    opperation = ''
                    updateDisplay()
                    ac.innerText = 'AC'
                    break;
                case 'AC':
                    null
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
                    ac.innerText = 'C'
                    break 
                default:
                    if (enteredNums.length < 17) {
                        enteredNums.push(+button)
                        updateDisplay()
                        ac.innerText = 'C'
                    }
                    break;
            }
        }
    })

    renderButtons()
    updateDisplay()

})