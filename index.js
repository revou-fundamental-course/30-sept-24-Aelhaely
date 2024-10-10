var isCelsiusToFahrenheit = true;

    // Convert temperature
    function convert() {
        var inputTemp = document.getElementById("inputTemp").value;

        if (inputTemp === "") {
            alert("Please enter a temperature value.");
            return;
        }

        var result, calculation;
        if (isCelsiusToFahrenheit) {
            // Celsius to Fahrenheit
            result = (inputTemp * 9/5) + 32;
            calculation = inputTemp + "°C × 9/5 + 32 = " + result.toFixed(2) + "°F";
        } else {
            // Fahrenheit to Celsius
            result = (inputTemp - 32) * 5/9;
            calculation = "(" + inputTemp + "°F - 32) × 5/9 = " + result.toFixed(2) + "°C";
        }

        document.getElementById("outputTemp").value = result.toFixed(2);
        document.getElementById("calculation").value = calculation;
    }

    // Reset fields
    function resetFields() {
        document.getElementById("inputTemp").value = "";
        document.getElementById("outputTemp").value = "";
        document.getElementById("calculation").value = "";
    }

    // Reverse the conversion direction
    function reverseConversion() {
        isCelsiusToFahrenheit = !isCelsiusToFahrenheit;
        resetFields();
        if (isCelsiusToFahrenheit) {
            document.getElementById("inputTemp").placeholder = "Enter Temperature in Celsius";
            document.getElementById("outputTemp").placeholder = "Result in Fahrenheit";
        } else {
            document.getElementById("inputTemp").placeholder = "Enter Temperature in Fahrenheit";
            document.getElementById("outputTemp").placeholder = "Result in Celsius";
        }
    }

    // Initialize placeholder text
    reverseConversion(); // Initialize in Celsius to Fahrenheit mode