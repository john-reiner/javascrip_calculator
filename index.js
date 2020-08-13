window.addEventListener('DOMContentLoaded', (event) => {

    const buttonContainer = document.getElementById('buttons')
    const display = document.getElementById('display')

    const calculator = {
        buttons: ['AC','+/-', '%', '÷', 7,8,9,'x',4,5,6,'-',1,2,3,'+',0,'.','='],
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
                div = document.createElement('div')
                div.className = 'button'
                div.innerText = button
                buttonContainer.appendChild(div)                
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
                console.log("Calculating: ",opperation, numsToCalc)
                switch (opperation) {
                    
                    case '+':
                        returnedNum = numsToCalc[0] + numsToCalc[1]
                        display.innerText = returnedNum
                        numsToCalc = [returnedNum]
                        console.log(numsToCalc)
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
                        display.innerText = returnedNum 
                        numsToCalc = [returnedNum]
                        break;
                    default:
                        numsToCalc = [num]
                        console.log("DEFAULT! numsToCalc: ", numsToCalc)
                        break;
                }
            }  else {
                console.log('less than 2 numbers are logged', numsToCalc)                
            }

        }
    }

    const updateDisplay = () => {
        if (enteredNums.length === 0) {
            display.innerText = 0
        } else {
            display.innerText = +enteredNums.join('')
        }
    }

    buttonContainer.addEventListener('click', (event) => {
        if (event.target.className === 'button') {
            let button = event.target.innerText
            if (button === '=') {
                calculate()
                opperation = button
            } else if (button === 'AC') {
                numsToCalc = []
                enteredNums = []
                opperation = ''
                updateDisplay()
            } else if (button === '+' || button === '-' || button === 'x' || button === '÷'){
                calculate()
                opperation = button
            } else if (button === '+/-' || button === '%') {
                if (button === '+/-' && enteredNums.length > 0) {
                    let numString = enteredNums.join('')
                    let num = +numString
                    num = ~num + 1
                    display.innerText = num
                    numsToCalc = [num]
                }
            } else  {
                enteredNums.push(+button)
                updateDisplay()
            }
        }
    })

    renderButtons()
    updateDisplay()

})