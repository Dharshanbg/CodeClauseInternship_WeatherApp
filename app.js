const API_KEY = "your_openweather_api_key_here";
const BASE_URL = "https://api.openweathermap.org/data/2.5/";
let isCelsius = true;
let searchHistory = [];

// Get Elements
const cityInput = document.getElementById('city-input');
const searchBtn = document.getElementById('search-btn');
const cityNameEl = document.getElementById('city-name');
const temperatureEl = document.getElementById('temperature');
const weatherIconEl = document.getElementById('weather-icon');
const weatherDescEl = document.getElementById('weather-desc');
const humidityEl = document.getElementById('humidity');
const windSpeedEl = document.getElementById('wind-speed');
const pressureEl = document.getElementById('pressure');
const forecastContainer = document.getElementById('forecast-container');
const historyList = document.getElementById('history-list');

// Event Listeners
searchBtn.addEventListener('click', fetchWeatherData);

// API Call to Get Weather Data
async function fetchWeatherData() {
    const city = cityInput.value;
    if (!city) return;
    
    const url = `${BASE_URL}weather?q=${city}&appid=${API_KEY}&units=metric`;
    const response = await fetch(url);
    const data = await response.json();

    if (data.cod === "404") {
        alert("City not found. Please try again.");
        return;
    }

    updateWeatherUI(data);
    saveToHistory(city);
    getForecast(city);
}

// Update UI with Current Weather Data
function updateWeatherUI(data) {
    const { name, main, weather, wind } = data;
    
    cityNameEl.textContent = name;
    temperatureEl.textContent = `${main.temp} °C`;
    weatherIconEl.src = `http://openweathermap.org/img/w/${weather[0].icon}.png`;
    weatherDescEl.textContent = weather[0].description;
    humidityEl.textContent = main.humidity;
    windSpeedEl.textContent = wind.speed;
    pressureEl.textContent = main.pressure;

    cityInput.value = "";
}

// Save Search to History
function saveToHistory(city) {
    if (!searchHistory.includes(city)) {
        searchHistory.push(city);
        const historyItem = document.createElement('li');
        historyItem.textContent = city;
        historyList.appendChild(historyItem);

        historyItem.addEventListener('click', () => {
            cityInput.value = city;
            fetchWeatherData();
        });
    }
}

// Get 5-Day Forecast
async function getForecast(city) {
    const url = `${BASE_URL}forecast?q=${city}&appid=${API_KEY}&units=metric`;
    const response = await fetch(url);
    const data = await response.json();

    forecastContainer.innerHTML = "";
    const forecastList = data.list.filter(item => item.dt_txt.includes("12:00:00"));
    
    forecastList.forEach(day => {
        const forecastCard = document.createElement('div');
        forecastCard.classList.add('forecast-card');
        forecastCard.innerHTML = `
            <p>${new Date(day.dt_txt).toLocaleDateString()}</p>
            <img src="http://openweathermap.org/img/w/${day.weather[0].icon}.png" alt="Weather Icon">
            <p>${day.main.temp} °C</p>
        `;
        forecastContainer.appendChild(forecastCard);
    });
}

// Toggle Temperature Between Celsius and Fahrenheit
document.getElementById('toggle-temp').addEventListener('click', () => {
    const currentTemp = parseFloat(temperatureEl.textContent);
    if (isCelsius) {
        const tempInF = (currentTemp * 9/5) + 32;
        temperatureEl.textContent = `${tempInF.toFixed(2)} °F`;
    } else {
        const tempInC = (currentTemp - 32) * 5/9;
        temperatureEl.textContent = `${tempInC.toFixed(2)} °C`;
    }
    isCelsius = !isCelsius;
});


