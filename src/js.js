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
  
  function nowCity(city) {
    let apiKey = "55e4edd7cf6872d232f9af728b279efd";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
  
    axios.get(apiUrl).then(displayCity);
  }
  
  function displayCity(response) {
    document.querySelector("h1").innerHTML = response.data.name;
    document.querySelector("#temperature").innerHTML =Math.round(
      response.data.main.temp
    );
    document.querySelector("#description").innerHTML= response.data.weather[0].description;
    document.querySelector("#humidity").innerHTML= response.data.main.humidity;
    document.querySelector("#wind").innerHTML= Math.round(response.data.wind.speed);
    weatherImages(changeImage);
  }
  
  function search(event) {
    event.preventDefault();
    let city = document.querySelector("#show-city").value;
    nowCity(city);
  }
  
  function weatherImages(changeImage){
    let weatherDescription = changeImage.data.weather[0].main;
    let iconElement =document.querySelector("icon");
    switch(weatherDescription){
      case "clear sky":  iconElement.setAttribute("src", `media/sunny-image.png`);
      break;
      case "few clouds": iconElement.setAttribute("src", `media/few-clouds.png`);
      break;
      case "scattered clouds": iconElement.setAttribute("src", `media/scattered-clouds.png`);
      break;
      case "broken clouds": iconElement.setAttribute("src", `media/broken-clouds.png`);
      break;
      case "shower rain":  iconElement.setAttribute("src",`media/shower-rain.png`);
      break;
      case "rain": iconElement.setAttribute("src",`media/rain.png`); 
      break;
      case "thunderstorm":iconElement.setAttribute("src", `media/thunderstorm.png`);
      break;
      case"snow":iconElement.setAttribute("src", `media/snow.png`);
      break;
      case "mist":  iconElement.setAttribute("src", `media/mist.png`);
      break;
    } 
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
    weatherImages();
  }
  
  function searchLocation(position) {
    let apiKey = "55e4edd7cf6872d232f9af728b279efd";
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
  
  //Searched City
  let form = document.querySelector("#form-city");
  form.addEventListener("submit", search);
  
  // Current City
  
  let current = document.getElementById("btn-current");
  current.addEventListener("click", searchCurrent);
  
  // Load Page
  nowCity("Berlin");