
function toFahrenheit(celsius)
{
    let value = (celsius - 32) * 5 / 9
    return value.toFixed(2) + "C"
}

function toCelsius(fahrenheit)
{
    let value = (fahrenheit * 9) / 5 + 32
    return value.toFixed(2) + "F";
}
function display(elementLd, value)
{
    document.getElementById(elementLd).innerHTML = "<b>" + value + "</b>"
}

function toCelsiusProgram(value)
{
    alert(toCelsius(value))
}
function toFahrenheitProgram(value){
    alert(toFahrenheit(value))
}

const reset = () =>{
    document.querySelector("#celsius").value = " ";
    document.querySelector("#fahrenheit").value = " ";
}