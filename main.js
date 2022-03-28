const buttons = document.querySelectorAll('header button')

buttons[0].classList.add('selected')

buttons.forEach((button) => {
    button.onclick = () => {
        document.querySelector('.selected')?.classList.remove('selected')
        button.classList.add('selected')
        if (buttons[0].classList.contains('selected')) {
            document.querySelector('div.length-converter').classList.remove('show')
            document.querySelector('div.temperature-converter').classList.remove('show')
        } else if (buttons[1].classList.contains('selected')) {
            document.querySelector('div.weight-converter').classList.remove('show')
            document.querySelector('div.temperature-converter').classList.remove('show')
            document.querySelector('div.length-converter').classList.add('show')
        } else if (buttons[2].classList.contains('selected')) {
            document.querySelector('div.length-converter').classList.remove('show')
            document.querySelector('div.weight-converter').classList.remove('show')
            document.querySelector('div.temperature-converter').classList.add('show')
        }
    }
})
