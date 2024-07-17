const currencyInput = document.getElementById('currencyInput');
const currencyOutput = document.getElementById('currencyOutput');
const currencySelect = document.getElementById('currencySelect');
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
        currencyOutput.value = (inputValue * exchangeRate).toFixed(2); // Convert MYR to INR
    } else {
        currencyOutput.value = (inputValue / exchangeRate).toFixed(2); // Convert INR to MYR
    }
}

function createFallingElements(className) {
    for (let i = 0; i < 20; i++) {
        const fallingElement = document.createElement('div');
        fallingElement.classList.add('falling', className);
        fallingElement.style.left = Math.random() * 100 + 'vw';
        fallingElement.style.width = fallingElement.style.height = Math.random() * 20 + 10 + 'px';
        fallingElement.style.opacity = Math.random();
        fallingElement.style.animationDelay = Math.random() * 10 + 's';
        document.body.appendChild(fallingElement);
    }
}

function removeFallingElements() {
    const fallingElements = document.querySelectorAll('.falling');
    fallingElements.forEach(el => el.remove());
}

function changeBackground() {
    removeFallingElements();
    if (currencySelect.value === "MYR") {
        createFallingElements('cherry');
    } else {
        createFallingElements('snow');
}

// Fetch the exchange rate on load
fetchExchangeRate();
// Initialize background based on default selection
changeBackground();