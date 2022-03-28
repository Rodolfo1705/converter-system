const temperatureInputSelect = document.querySelector(
    'div.temperature-converter select.enter-unity'
)
const temperatureOutputSelect = document.querySelector(
    'div.temperature-converter select.output-unity'
)
const temperatureEnterValueInput = document.querySelector(
    'div.temperature-converter input.enter-value'
)
const temperatureOutputValueInput = document.querySelector(
    'div.temperature-converter input.output-value'
)

function convertCelsiusToFarenheit(temperatureInCelsius) {
    const temperatureInFahrenheit = temperatureInCelsius * 1.8 + 32

    return temperatureInFahrenheit
}

function convertCelsiusToKelvin(temperatureInCelsius) {
    const temperatureInKelvin = temperatureInCelsius + 273.15

    return temperatureInKelvin
}

function convertKelvinToCelsius(temperatureInKelvin) {
    const temperatureInCelsius = temperatureInKelvin - 273.15

    return temperatureInCelsius
}

function convertFahrenheitToCelsius(temperatureInFahrenheit) {
    const temperatureInCelsius = (temperatureInFahrenheit - 32) / 1.8

    return temperatureInCelsius
}

function convertFahrenheitToKelvin(temperatureInFahrenheit) {
    const temperatureInCelsius = convertFahrenheitToCelsius(temperatureInFahrenheit)
    const temperatureInKelvin = convertCelsiusToKelvin(temperatureInCelsius)

    return temperatureInKelvin
}

function convertKelvinToFahrenheit(temperatureInKelvin) {
    const temperatureInCelsius = convertKelvinToCelsius(temperatureInKelvin)
    const temperatureInFahrenheit = convertCelsiusToFarenheit(temperatureInCelsius)

    return temperatureInFahrenheit
}

temperatureInputSelect.onchange = () => {
    const input = temperatureInputSelect.value
    const output = temperatureOutputSelect.value

    if (input == output)
        return (temperatureOutputValueInput.value = temperatureEnterValueInput.value)

    if (input == 1 && output == 2)
        return (temperatureOutputValueInput.value = convertCelsiusToFarenheit(
            +temperatureEnterValueInput.value
        ))

    if (input == 1 && output == 3)
        return (temperatureOutputValueInput.value = convertCelsiusToKelvin(
            +temperatureEnterValueInput.value
        ))

    if (input == 2 && output == 1)
        return (temperatureOutputValueInput.value = convertFahrenheitToCelsius(
            +temperatureEnterValueInput.value
        ))

    if (input == 2 && output == 3)
        return (temperatureOutputValueInput.value = convertFahrenheitToKelvin(
            +temperatureEnterValueInput.value
        ))

    if (input == 3 && output == 1)
        return (temperatureOutputValueInput.value = convertKelvinToCelsius(
            +temperatureEnterValueInput.value
        ))

    if (input == 3 && output == 2)
        return (temperatureOutputValueInput.value = convertKelvinToFahrenheit(
            +temperatureEnterValueInput.value
        ))
}

temperatureEnterValueInput.oninput = temperatureInputSelect.onchange
temperatureOutputSelect.onchange = temperatureInputSelect.onchange
