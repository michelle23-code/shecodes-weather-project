function refreashWeather(response) {
  let temperatureElement = document.querySelector("#temperature");
  let temperature = response.data.current.temperature;
  let cityElement = document.querySelector("#city");
  let descriptionElement =document.querySelector("#description");
  let humidityElement =document.querySelector("#humidity");
  let windspeedELEMENT =document.querySelector("#wind-speed");
  let timeElement =document.querySelector("#time");
  let date = new Date(response.data.time * 1000);
  

  descriptionElement.innerHTML = response.data.condition.description;
  cityElement.innerHTML = response.data.city;
timeElement.innerHTML= response.data.time;
  windspeedELEMENT.innerHTML = '${response.data.wind.speed}km/h';
  humidityElement.innerHTML = '${response.data.temperature.humidity}%';
  temperatureElement.innerHTML = Math.round(temperature);
}
function formatDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let day = date.getDay();

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  if (hours < 10) {
    hours = `0${hours}`;
  }

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
}
function searchCity(city) {
  let apiKey = "b2a5adcct04b33178913oc335f405433";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(refreashWeather);
}

function handleSearchSumbit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-input");
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = searchInput.value;
  searchCity(searchCity.value);
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSumbit);
