window.addEventListener('DOMContentLoaded', (event) => {
    const buttonContainer = document.getElementById('buttons')
    const display = document.getElementById('display')

    const calculator = {
        buttons: ['ac','+/-', '%', '÷', 7,8,9,'x',4,5,6,'-',1,2,3,'+',0,'.','='],
        
    }
    const renderButtons = () => {
        
        calculator.buttons.map(button => {
            div = document.createElement('div')
            div.className = 'button'
            div.innerText = button
            buttonContainer.appendChild(div)
        })
    }

    let enteredNums = []
    let numsToCalc = []
    let opperation = ''
    let mutation = ''

    const mutateNum = () => {
        let numString = enteredNums.join('')
        let num = +numString
        if (mutation === '+/-') {
            num = ~num + 1
            display.innerText = num
            numsToCalc = [num]
            console.log(numsToCalc)
        }
        numsToCalc.push(num)
    }

    const calculate = () => {
        let numString = enteredNums.join('')
        let num = +numString
        numsToCalc.push(num)
        enteredNums = []
        let returnedNum
        if (numsToCalc.length === 2) {
            if (opperation === '+') {
                returnedNum = numsToCalc[0] + numsToCalc[1]
                display.innerText = returnedNum
                numsToCalc = [returnedNum]
            }
            if (opperation === '-') {
                returnedNum = numsToCalc[0] - numsToCalc[1]
                display.innerText = returnedNum 
                numsToCalc = [returnedNum]
            }
            if (opperation === 'x') {
                returnedNum = numsToCalc[0] * numsToCalc[1]
                display.innerText = returnedNum 
                numsToCalc = [returnedNum]
            }
            if (opperation === '÷') {
                returnedNum = numsToCalc[0] / numsToCalc[1]
                display.innerText = returnedNum 
                numsToCalc = [returnedNum]
            }
        } else {
            null
        }
        console.log(numsToCalc)
    }
// check numstocalc, ask if length is = 2, if yes: calculate two numbers




    const updateDisplay = () => {
        let displayToShow = enteredNums.join('')
        display.innerText = displayToShow
    }

    buttonContainer.addEventListener('click', (event) => {
        if (event.target.className === 'button') {
            let button = event.target.innerText
            if (button === '=') {
                calculate()
            } else if (button === 'ac') {
                numsToCalc = []
                enteredNums = []
                updateDisplay()
            
            } else if (button === '+' || button === '-' || button === 'x' || button === '÷'){
                calculate()
                opperation = button
            } else if (button === '+/-' || button === '%') {
                mutation = button
                console.log(mutation)
                mutateNum()
            } else  {
                enteredNums.push(button)
                updateDisplay()    
            }
        }
    })

    renderButtons()
})