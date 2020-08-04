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

    const calculate = () => {
        let number = 
        displayArray.forEach(value => {

            if (value === '+/-' || value === '%' || value === '÷' || value === 'x' || value === '-' || value === '+') {
                console.log('found: ', value)
            } 
        })
    }



    let displayArray = []

    const updateDisplay = () => {
        let displayToShow = displayArray.join('')
        display.innerText = displayToShow
    }

    buttonContainer.addEventListener('click', (event) => {
        if (event.target.className === 'button') {
            let button = event.target.innerText
            if (button === '=') {
                calculate()
                
            } else if (button !== 'ac') {
                displayArray.push(button)
                updateDisplay()             
            } else {
                displayArray = []
            }
        }
    })

    renderButtons()
})