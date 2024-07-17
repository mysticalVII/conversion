const currencyInput = document.getElementById('currencyInput');
const currencyOutput = document.getElementById('currencyOutput');
const currencySelect = document.getElementById('currencySelect');
const container = document.getElementById('container');
let exchangeRate = 0;

async function fetchExchangeRate() {
    const response = await fetch('https://api.exchangerate-api.com/v4/latest/MYR');
    const data = await response.json();
    exchangeRate = data.rates.INR; // MYR to INR
}

function convertCurrency() {
    const inputValue = parseFloat(currencyInput.value);
    if (isNaN(inputValue)) {
        currencyOutput.value = '';
        return;
    }

    if (currencySelect.value === "MYR") {
        currencyOutput.value = (inputValue * exchangeRate).toFixed(2);
    } else {
        currencyOutput.value = (inputValue / exchangeRate).toFixed(2);
    }
}

function changeGlow() {
    if (currencySelect.value === "MYR") {
        container.style.boxShadow = "0 0 20px 5px rgba(255, 182, 193, 0.6)"; // Baby pink
    } else {
        container.style.boxShadow = "0 0 20px 5px rgba(173, 216, 230, 0.6)"; // Baby blue
    }
}

// Fetch the exchange rate on load
fetchExchangeRate();
// Initialize glow based on default selection
changeGlow();
