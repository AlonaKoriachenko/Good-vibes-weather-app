//Functions
function currentDate(date) {
    let hour = date.getHours();
    if (hour < 10) {
      hour = `0${hour}`;
    }
    let minutes = date.getMinutes();
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ];
    let day = days[date.getDay()];
  
    return `${day}, ${hour}:${minutes}`;
  }
function backgroundImage(response){
  let weatherName = response.data.weather[0].main;
    let iconElement = document.querySelector("#icon");
    let messageElement = document.querySelector("#message");
    switch(weatherName){
      case "Clear":  iconElement.src = "media/sunny-Image.png"; messageElement.innerHTML =`"Life can be beautiful like a sunny day!"`;
      break;
      case "Clouds": iconElement.src = "media/few-clouds.png"; messageElement.innerHTML = `"There is a blue sky behind these clouds. They will pass..."`;
      break;
      case "Drizzle":  iconElement.src = "media/shower-rain.png";messageElement.innerHTML = `"Listen to the rain...There is a lot of wisdom in it."`;
      break;
      case "Rain": iconElement.src = "media/rain.png"; messageElement.innerHTML = `"The rain is as necessary as the sun. There is time for everything."`;
      break;
      case "Thunderstorm":iconElement.src = "media/thunderstorm.png"; messageElement.innerHTML = `"Life can be as unpredictable as a storm. Always be prepared for anything!"`
      break;
      case"Snow":iconElement.src= "media/snow.png"; messageElement.innerHTML =`"Snow brings the cold, but also an incomparable beauty... And so is life."`
      break;
      default:  iconElement.src= "media/mist.png"; messageElement.innerHTML= `"Everything seems not so clear, but if we wait a bit we will start to understand."`
    } 

}  

function getForecast(coordinates){
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayForecast);
}

function daysName(timestamp){
  let date = new Date(timestamp * 1000);
  let day = date.getDay();
  let days = ["Sun", "Mon","Tue","Wed","Thu","Fri", "Sat"];
  return days[day];
}

function displayForecast(response){
  let forecast = response.data.daily;
  console.log(forecast);

  let forecastElement = document.querySelector("#forecast");

  let forecastHTML = `<div class="row">`;
  forecast.forEach(function(forecastDay, index){
    if (index < 6){
    forecastHTML = forecastHTML +
    `
      <div class="col-6">
        ${daysName(forecastDay.dt)}
        </br>
        <img
        src="http://openweathermap.org/img/wn/${forecastDay.weather[0].icon}@2x.png"
        alt=""
        width="30"
      /> 
        </br>
          <span class="forecast-max">
        ${Math.round(forecastDay.temp.max)}°
          </span>
          <span class="forecast-min">
         ${Math.round(forecastDay.temp.min)}°
          </span>
      </div>
      `;
    }
  });
  
  forecastHTML= forecastHTML + `</div>`;
  forecastElement.innerHTML = forecastHTML;
}

  function nowCity(city) { 
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
  
    axios.get(apiUrl).then(displayCity,displayForecast);
  }

  
  function displayCity(response) {
    document.querySelector("h1").innerHTML = response.data.name;
    document.querySelector("#temperature").innerHTML =Math.round(response.data.main.temp);
    document.querySelector("#description").innerHTML= response.data.weather[0].description;
    document.querySelector("#humidity").innerHTML= response.data.main.humidity;
    document.querySelector("#wind").innerHTML= Math.round(response.data.wind.speed);

    getForecast(response.data.coord);

    backgroundImage(response);
  }
  
  function search(event) {
    event.preventDefault();
    let city = document.querySelector("#show-city").value;
    nowCity(city);
  }

  function showCurrent(response) {
    let cityElement = document.querySelector("h1");
    let temperatureElement = document.querySelector("#temperature");
    let descriptionElement = document.querySelector("#description");
    let humidityElement = document.querySelector("#humidity");
    let windElement = document.querySelector("#wind")
    cityElement.innerHTML = response.data.name;
    temperatureElement.innerHTML = Math.round(response.data.main.temp);
    descriptionElement.innerHTML = response.data.weather[0].description;
    humidityElement.innerHTML= response.data.main.humidity;
    windElement.innerHTML= Math.round(response.data.wind.speed);
   
  backgroundImage(response); 
  }
  
  function searchLocation(position) {
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}&units=metric`;
    axios.get(url).then(showCurrent);
  }
  function searchCurrent(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(searchLocation);
  }
  
  //Date
  
  let now = new Date();
  let currentDay = document.querySelector("#day-time");
  currentDay.innerHTML = currentDate(now);
  
  //Search
  let form = document.querySelector("#form-city");
  form.addEventListener("submit", search);
  let apiKey = "55e4edd7cf6872d232f9af728b279efd";
  let current = document.getElementById("btn-current");
  current.addEventListener("click", searchCurrent);
  
  // Load Page
  nowCity("Berlin");