const convertBtn = document.getElementById("convert");
const resultDiv = document.getElementById("result");

convertBtn.addEventListener("click", () => {
    const temperatureInput = parseFloat(document.getElementById("temp").value);
    const unitFrom = document.getElementById("from").value;
    const unitTo = document.getElementById("to").value;
    let convertedTemperature = "";

    if (!isNaN(temperatureInput)) {
        if (unitFrom === "cel") {
            if (unitTo === "far") {
                convertedTemperature = (temperatureInput * 9/5) + 32;
            } else if (unitTo === "kel") {
                convertedTemperature = temperatureInput + 273.15;
            }
        } else if (unitFrom === "far") {
            if (unitTo === "cel") {
                convertedTemperature = (temperatureInput - 32) * 5/9;
            } else if (unitTo === "kel") {
                convertedTemperature = (temperatureInput - 32) * 5/9 + 273.15;
            }
        } else if (unitFrom === "kel") {
            if (unitTo === "cel") {
                convertedTemperature = temperatureInput - 273.15;
            } else if (unitTo === "far") {
                convertedTemperature = (temperatureInput - 273.15) * 9/5 + 32;
            }
        }

        resultDiv.innerHTML = `Converted temperature: ${convertedTemperature.toFixed(2)} degree ${unitTo}`;
    } else {
        resultDiv.innerHTML = "Please enter a valid temperature.";
    }
});