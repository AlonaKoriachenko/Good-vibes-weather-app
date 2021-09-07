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
    document.querySelector("#temperature").innerHTML =Math.round(response.data.main.temp);
    document.querySelector("#description").innerHTML= response.data.weather[0].description;
    document.querySelector("#humidity").innerHTML= response.data.main.humidity;
    document.querySelector("#wind").innerHTML= Math.round(response.data.wind.speed);
    
    let weatherName = response.data.weather[0].main;
    let iconElement = document.querySelector("#icon");
    let messageElement = document.querySelector("#message");
    switch(weatherName){
      case "Clear":  iconElement.src = "media/sunny-Image.png"; messageElement.innerHTML =`"Life can be beautiful like a sunny day!"`;
      break;
      case "Clouds": iconElement.src = "media/few-clouds.png"; messageElement.innerHTML = `"There is a blue sky behind these clouds. They will pass..."`;
      break;
      case "Drizzle":  iconElement.src = "media/shower-rain.png";messageElemente.innerHTML = `"Listen to the rain...There is a lot of wisdom in it."`;
      break;
      case "Rain": iconElement.src = "media/rain.png"; messageElemente.innerHTML = `"The rain is as necessary as the sun. There is time for everything."`;
      break;
      case "Thunderstorm":iconElement.src = "media/thunderstorm.png"; messageElement.innerHTML = `"Life can be as unpredictable as a storm. Always be prepared for anything!"`
      break;
      case"Snow":iconElement.src= "media/snow.png"; messageElement.innerHTML =`"Snow brings with it the cold, but also an incomparable beauty... And so is life."`
      break;
      default:  iconElement.src= "media/mist.png"; messageElement.innerHTML= `"Everything seems not so clear, but if we wait a bit we will start to understand."`
    } 
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
    let weatherName = response.data.weather[0].main;
    let iconElement = document.querySelector("#icon");
    switch(weatherName){
      case "Clear":  iconElement.src = "media/sunny-Image.png"; messageElement.innerHTML =`"Life can be beautiful like a sunny day!"`;
      break;
      case "Clouds": iconElement.src = "media/few-clouds.png"; messageElement.innerHTML = `"There is a blue sky behind these clouds. They will pass..."`;
      break;
      case "Drizzle":  iconElement.src = "media/shower-rain.png";messageElemente.innerHTML = `"Listen to the rain...There is a lot of wisdom in it."`;
      break;
      case "Rain": iconElement.src = "media/rain.png"; messageElemente.innerHTML = `"The rain is as necessary as the sun. There is time for everything."`;
      break;
      case "Thunderstorm":iconElement.src = "media/thunderstorm.png"; messageElement.innerHTML = `"Life can be as unpredictable as a storm. Always be prepared for anything!"`
      break;
      case"Snow":iconElement.src= "media/snow.png"; messageElement.innerHTML =`"Snow brings with it the cold, but also an incomparable beauty... And so is life."`
      break;
      default:  iconElement.src= "media/mist.png"; messageElement.innerHTML= `"Everything seems not so clear, but if we wait a bit we will start to understand."`
    } 
    
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