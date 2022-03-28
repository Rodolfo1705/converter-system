const weightInputSelect = document.querySelector('div.weight-converter select.enter-unity')
const weightOutputSelect = document.querySelector('div.weight-converter select.output-unity')
const weightEnterValueInput = document.querySelector('div.weight-converter input.enter-value')
const weightOutputValueInput = document.querySelector('div.weight-converter input.output-value')

function convertWeight(value) {
    const power = Math.pow(10, Math.abs(+weightOutputSelect.value - +weightInputSelect.value))
    if (+weightOutputSelect.value > +weightInputSelect.value) return value / power
    else if (+weightOutputSelect.value < +weightInputSelect.value) return value * power

    return value
}

weightInputSelect.onchange = () => {
    weightOutputValueInput.value = convertWeight(weightEnterValueInput.value)
}

weightEnterValueInput.oninput = weightInputSelect.onchange
weightOutputSelect.oninput = weightInputSelect.onchange
