const currencyInput = document.getElementById('currencyInput');
const currencyOutput = document.getElementById('currencyOutput');
const currencySelect = document.getElementById('currencySelect');
const container = document.getElementById('container');
let exchangeRate = 0;

async function fetchExchangeRate() {
    const response = await fetch('https://api.exchangerate-api.com/v4/latest/MYR');
    const data = await response.json();
    exchangeRate = data.rates.INR;
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

function createFallingElements(className) {
    for (let i = 0; i < 20; i++) {
        const fallingElement = document.createElement('div');
        fallingElement.classList.add('falling', className);
        fallingElement.style.left = Math.random() * 100 + 'vw';
        fallingElement.style.width = Math.random() * 40 + 20 + 'px';
        fallingElement.style.height = fallingElement.style.width;
        fallingElement.style.opacity = Math.random();
        fallingElement.style.animationDuration = (Math.random() * 3 + 5) + 's';
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
}

function changeGlow() {
    if (currencySelect.value === "MYR") {
        container.style.boxShadow = "0 0 20px 5px rgba(255, 182, 193, 0.6)";
    } else {
        container.style.boxShadow = "0 0 20px 5px rgba(173, 216, 230, 0.6)";
    }
}

// Fetch the exchange rate on load
fetchExchangeRate();
// Initialize glow and background
changeGlow();
changeBackground();
