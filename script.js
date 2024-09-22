/**
 * Fahrenheit to Celsius function
 */
function fToC(fahrenheit){
    return (fahrenheit - 32) * 5/9;
}

// Function to trigger conversion when button is clicked
function convertFahrenheitToCelsius(){
    let fahrenheitVal = 77;
    let celsiusVal = fToC(fahrenheitVal);
    document.getElementById('fToC').textContent = `Fahrenheit to Celsius: ${fahrenheitVal} = ${celsiusVal.toFixed(2)}`;
}