// Fahrenheit to Celsius Convertor

// Event Listener
document.getElementById('Btn').addEventListener('click', Convert);

// Function
function Convert() {

    // Input
    let num1 = Number(document.getElementById('input').value);

    // PROCESS
    let Celsius = (num1 - 32) * 5 / 9

    // OUTPUT
    document.getElementById('output').innerHTML = Celsius

}