function convertTemperature() {
    var temperature = parseFloat(document.getElementById("temperature").value);
    var fromUnit = document.getElementById("from-unit").value;
    var toUnit = document.getElementById("to-unit").value;
    var result = "";

    if (fromUnit === "celsius" && toUnit === "fahrenheit") {
        result = (temperature * 9/5) + 32;
    } else if (fromUnit === "celsius" && toUnit === "kelvin") {
        result = temperature + 273.15;
    } else if (fromUnit === "fahrenheit" && toUnit === "celsius") {
        result = (temperature - 32) * 5/9;
    } else if (fromUnit === "fahrenheit" && toUnit === "kelvin") {
        result = (temperature - 32) * 5/9 + 273.15;
    } else if (fromUnit === "kelvin" && toUnit === "celsius") {
        result = temperature - 273.15;
    } else if (fromUnit === "kelvin" && toUnit === "fahrenheit") {
        result = (temperature - 273.15) * 9/5 + 32;
    } else {
        result = temperature; // Same unit, no conversion needed
    }

    document.getElementById("result").value = result.toFixed(2);
}