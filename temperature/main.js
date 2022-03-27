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
