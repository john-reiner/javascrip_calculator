window.addEventListener('DOMContentLoaded', (event) => {
    const buttonContainer = document.getElementById('buttons')


    const calculator = {
        buttons: ['ac','+/-', '%', '÷', 7,8,9,'x',4,5,6,'-',1,2,3,'+',0,'.','='],
        
    }
    const renderButtons = () => {
        
        calculator.buttons.map(button => {
            div = document.createElement('div')
            div.className = 'button'
            div.innerText = button
            console.log(div)
            buttonContainer.appendChild(div)
        })
    }

    let display = []

    buttonContainer.addEventListener('click', (event) => {
        if (event.target.className === 'button') {
            let button = event.target.innerText
            
            let displayToShow = display.push(button) 
            console.log(display, button, displayToShow)
        }
    })

    renderButtons()
})