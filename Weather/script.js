const cityInput = document.getElementById("cityInput");
const searchBtn = document.getElementById("searchBtn");

const cityName = document.getElementById("cityName");
const temperature = document.getElementById("temperature");
const humidity = document.getElementById("humidity");
const windSpeed = document.getElementById("windSpeed");
const weatherDescription = document.getElementById("weatherDescription");
const message = document.getElementById("message");

function getWeatherDescription(code) {
if (code === 0) return "Clear sky";
if (code <= 3) return "Partly cloudy";
if (code <= 48) return "Foggy";
if (code <= 67) return "Rainy";
if (code <= 77) return "Snowy";
if (code <= 82) return "Rain showers";
if (code <= 99) return "Thunderstorm";

```
return "Unknown weather";
```

}

function getWeather() {
const city = cityInput.value.trim();

if (city === "") {
    message.textContent = "Please enter a city name.";
    return;
}

message.textContent = "Loading weather...";

fetch(
    `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=1&language=en&format=json`
)
.then(function(response) {
    return response.json();
})
.then(function(locationData) {

    if (!locationData.results || locationData.results.length === 0) {
        throw new Error("City not found");
    }

    const location = locationData.results[0];

    return fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${location.latitude}&longitude=${location.longitude}&current=temperature_2m,relative_humidity_2m,wind_speed_10m,weather_code&timezone=auto`
    )
    .then(function(response) {
        return response.json();
    })
    .then(function(weatherData) {

        const current = weatherData.current;

        cityName.textContent = location.name;
        temperature.textContent = current.temperature_2m;
        humidity.textContent = current.relative_humidity_2m + "%";
        windSpeed.textContent = current.wind_speed_10m + " km/h";

        weatherDescription.textContent =
            getWeatherDescription(current.weather_code);

        message.textContent = "";
    });
})
.catch(function(error) {
    message.textContent = "Unable to fetch weather.";
    console.log(error);
});

}

searchBtn.addEventListener("click", getWeather);

cityInput.addEventListener("keydown", function(event) {
if (event.key === "Enter") {
getWeather();
}
});
