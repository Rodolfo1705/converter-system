const lengthInputSelect = document.querySelector('div.length-converter select.enter-unity')
const lengthOutputSelect = document.querySelector('div.length-converter select.output-unity')
const lengthEnterValueInput = document.querySelector('div.length-converter input.enter-value')
const lengthOutputValueInput = document.querySelector('div.length-converter input.output-value')

function convertLength(value) {
    const power = Math.pow(10, Math.abs(+lengthOutputSelect.value - +lengthInputSelect.value))

    if (+lengthOutputSelect.value > +lengthInputSelect.value) return value / power
    else if (+lengthOutputSelect.value < +lengthInputSelect.value) return value * power

    return value
}

lengthInputSelect.onchange = () => {
    lengthOutputValueInput.value = convertLength(lengthEnterValueInput.value)
}

lengthEnterValueInput.oninput = lengthInputSelect.onchange
lengthOutputSelect.onchange = lengthInputSelect.onchange
