import getWeatherReport from './weatherFunction.js';

const city = "New York";
const temperature = 22;
const condition = "sunny";

const weatherReport = getWeatherReport(city, temperature, condition);

document.addEventListener('DOMContentLoaded', () => {
    const weatherDiv = document.getElementById('weather-report');
    if (weatherDiv) {
        weatherDiv.textContent = weatherReport;
    }
});