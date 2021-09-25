//Functions

//This function is to get the current Date and time
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

//This function is for change the background img and color, the color of the letters and the motivacional msg.
//The "displayGeneral" function is calling it.
function backgroundImage(response){
  let weatherName = response.data.weather[0].icon;
    let iconElement = document.querySelector("#icon");
    let messageElement = document.querySelector("#message");
    let colorElement = document.querySelector(".card");
    switch(weatherName){
      case "01d":   iconElement.src = "media/sunny-Image.png"; 
                    messageElement.innerHTML =`"Life can be beautiful like a sunny day!"`;
                    colorElement.style.background ="linear-gradient(180deg, rgb(162, 218, 246) 0%, rgb(195, 246, 246) 23%, rgb(250, 245, 245) 90%)";
                    document.querySelector(".city").style.color = "black";
                    document.querySelector(".more-info").style.color = "black";
                    document.querySelector(".day-time").style.color = "black";
                    document.querySelector(".weather-description").style.color = "black";
                    document.querySelector(".now-temperature").style.color = "black";
                    document.querySelector(".celsius").style.color = "black";
                    document.querySelector(".under-temp").style.color = "black";
                    document.querySelector(".magni-img").style.filter = "none";
                    document.querySelector(".pin-img").style.filter = "none";
      break;
      case "01n": iconElement.src = "media/clear-night.png";
                  messageElement.innerHTML=`"Have you noticed how beautiful the sky is covered with stars?"`;
                  colorElement.style.background= "linear-gradient(172deg, rgb(27, 39, 122) 0%, rgb(235, 232, 241) 100%)";
                  document.querySelector(".city").style.color = "#fff";
                  document.querySelector(".more-info").style.color = "#fff";
                  document.querySelector(".day-time").style.color = "#fff";
                  document.querySelector(".weather-description").style.color = "#fff";
                  document.querySelector(".now-temperature").style.color = "#fff";
                  document.querySelector(".celsius").style.color = "#fff";
                  document.querySelector(".under-temp").style.color = "#fff";
                  document.querySelector(".magni-img").style.filter = "invert(100%)";
                  document.querySelector(".pin-img").style.filter = "invert(100%)";
      break;
      case "02d": iconElement.src = "media/few-clouds.png"; 
                  messageElement.innerHTML = `"There is still a blue sky behind these clouds. They will pass..."`;
                  colorElement.style.background = "linear-gradient(178deg, rgb(141, 185, 223) 0%, rgb(187, 205, 224) 11%, rgb(245, 248, 250) 65%)";
                  document.querySelector(".city").style.color = "black";
                  document.querySelector(".more-info").style.color = "black";
                  document.querySelector(".day-time").style.color = "black";
                  document.querySelector(".weather-description").style.color = "black";
                  document.querySelector(".now-temperature").style.color = "black";
                  document.querySelector(".celsius").style.color = "black";
                  document.querySelector(".under-temp").style.color = "black";
                  document.querySelector(".magni-img").style.filter = "none";
                  document.querySelector(".pin-img").style.filter = "none"; 
      break;
      case "03d": iconElement.src = "media/few-clouds.png"; 
                  messageElement.innerHTML = `"There is still a blue sky behind these clouds. They will pass..."`;
                  colorElement.style.background = "linear-gradient(178deg, rgb(141, 185, 223) 0%, rgb(187, 205, 224) 11%, rgb(245, 248, 250) 65%)";
                  document.querySelector(".city").style.color = "black";
                  document.querySelector(".more-info").style.color = "black";
                  document.querySelector(".day-time").style.color = "black";
                  document.querySelector(".weather-description").style.color = "black";
                  document.querySelector(".now-temperature").style.color = "black";
                  document.querySelector(".celsius").style.color = "black";
                  document.querySelector(".under-temp").style.color = "black";
                  document.querySelector(".magni-img").style.filter = "none";
                  document.querySelector(".pin-img").style.filter = "none";
      break;
      case "04d": iconElement.src = "media/few-clouds.png"; 
                  messageElement.innerHTML = `"There is still a blue sky behind these clouds. They will pass..."`;
                  colorElement.style.background = "linear-gradient(178deg, rgb(141, 185, 223) 0%, rgb(187, 205, 224) 11%, rgb(245, 248, 250) 65%)";
                  document.querySelector(".city").style.color = "black";
                  document.querySelector(".more-info").style.color = "black";
                  document.querySelector(".day-time").style.color = "black";
                  document.querySelector(".weather-description").style.color = "black";
                  document.querySelector(".now-temperature").style.color = "black";
                  document.querySelector(".celsius").style.color = "black";
                  document.querySelector(".under-temp").style.color = "black";
                  document.querySelector(".magni-img").style.filter = "none";
                  document.querySelector(".pin-img").style.filter = "none";
      break;
      case "02n": iconElement.src = "media/cloudy-night.png"; 
                  messageElement.innerHTML = `"There are still bright stars behind these clouds. They will pass..."`;
                  colorElement.style.background = "linear-gradient(180deg, rgb(20, 35, 88) 0%, rgb(132, 148, 198) 41%, rgb(225, 237, 227) 100%)";
                  document.querySelector(".city").style.color = "#fff";
                  document.querySelector(".more-info").style.color = "#fff";
                  document.querySelector(".day-time").style.color = "#fff";
                  document.querySelector(".weather-description").style.color = "#fff";
                  document.querySelector(".now-temperature").style.color = "#fff";
                  document.querySelector(".celsius").style.color = "#fff";
                  document.querySelector(".under-temp").style.color = "#fff";
                  document.querySelector(".magni-img").style.filter = "invert(100%)";
                  document.querySelector(".pin-img").style.filter = "invert(100%)";
      break;
      case "03n": iconElement.src = "media/cloudy-night.png"; 
                  messageElement.innerHTML = `"There are still bright stars behind these clouds. They will pass..."`;
                  colorElement.style.background = "linear-gradient(180deg, rgb(20, 35, 88) 0%, rgb(132, 148, 198) 41%, rgb(225, 237, 227) 100%)";
                  document.querySelector(".city").style.color = "#fff";
                  document.querySelector(".more-info").style.color = "#fff";
                  document.querySelector(".day-time").style.color = "#fff";
                  document.querySelector(".weather-description").style.color = "#fff";
                  document.querySelector(".now-temperature").style.color = "#fff";
                  document.querySelector(".celsius").style.color = "#fff";
                  document.querySelector(".under-temp").style.color = "#fff";
                  document.querySelector(".magni-img").style.filter = "invert(100%)";
                  document.querySelector(".pin-img").style.filter = "invert(100%)";
      break;
      case "04n": iconElement.src = "media/cloudy-night.png"; 
                  messageElement.innerHTML = `"There are still bright stars behind these clouds. They will pass..."`;
                  colorElement.style.background = "linear-gradient(180deg, rgb(20, 35, 88) 0%, rgb(132, 148, 198) 41%, rgb(225, 237, 227) 100%)";
                  document.querySelector(".city").style.color = "#fff";
                  document.querySelector(".more-info").style.color = "#fff";
                  document.querySelector(".day-time").style.color = "#fff";
                  document.querySelector(".weather-description").style.color = "#fff";
                  document.querySelector(".now-temperature").style.color = "#fff";
                  document.querySelector(".celsius").style.color = "#fff";
                  document.querySelector(".under-temp").style.color = "#fff";
                  document.querySelector(".magni-img").style.filter = "invert(100%)";
                  document.querySelector(".pin-img").style.filter = "invert(100%)";
      break;
      case "09d": iconElement.src = "media/shower-rain.png";
                  messageElement.innerHTML = `"Listen to the rain...There is a lot of wisdom in it."`; 
                  colorElement.style.background = "linear-gradient(178deg, rgb(210, 225, 249) 19%, rgb(200, 228, 236) 33%, rgb(245, 248, 250) 65%)";
                  document.querySelector(".city").style.color = "black";
                  document.querySelector(".more-info").style.color = "black";
                  document.querySelector(".day-time").style.color = "black";
                  document.querySelector(".weather-description").style.color = "black";
                  document.querySelector(".now-temperature").style.color = "black";
                  document.querySelector(".celsius").style.color = "black";
                  document.querySelector(".under-temp").style.color = "black";
                  document.querySelector(".magni-img").style.filter = "none";
                  document.querySelector(".pin-img").style.filter = "none";
      break;
      case "10d": iconElement.src = "media/rain.png"; 
                  messageElement.innerHTML = `"The rain is so necessary as the sun. There is time for everything."`; 
                  colorElement.style.background = "linear-gradient(178deg, rgb(177, 189, 220) 5%, rgb(216, 223, 239) 44%, rgb(245, 248, 250) 78%)";
                  document.querySelector(".city").style.color = "black";
                  document.querySelector(".more-info").style.color = "black";
                  document.querySelector(".day-time").style.color = "black";
                  document.querySelector(".weather-description").style.color = "black";
                  document.querySelector(".now-temperature").style.color = "black";
                  document.querySelector(".celsius").style.color = "black";
                  document.querySelector(".under-temp").style.color = "black";
                  document.querySelector(".magni-img").style.filter = "none";
                  document.querySelector(".pin-img").style.filter = "none";
      break;
      case "11d": iconElement.src = "media/thunderstorm.png"; 
                  messageElement.innerHTML = `"Life can be unpredictable as a storm. Always be prepared for anything!"`;
                  colorElement.style.background ="linear-gradient(161deg, rgb(29, 53, 73) 0%, rgb(200, 211, 224) 73%, rgb(245, 248, 250) 100%)";
                  document.querySelector(".city").style.color = "black";
                  document.querySelector(".more-info").style.color = "black";
                  document.querySelector(".day-time").style.color = "black";
                  document.querySelector(".weather-description").style.color = "black";
                  document.querySelector(".now-temperature").style.color = "black";
                  document.querySelector(".celsius").style.color = "black";
                  document.querySelector(".under-temp").style.color = "black";
                  document.querySelector(".magni-img").style.filter = "none";
                  document.querySelector(".pin-img").style.filter = "none";
      break;
      case"13d":  iconElement.src= "media/snow.png"; 
                  messageElement.innerHTML =`"Snow brings the cold, but also an incomparable beauty... And so is life."`;
                  colorElement.style.background ="linear-gradient(178deg, rgb(222, 230, 231) 0%, rgb(231, 241, 241) 52%, rgb(245, 248, 250) 100%)";
                  document.querySelector(".city").style.color = "black";
                  document.querySelector(".more-info").style.color = "black";
                  document.querySelector(".day-time").style.color = "black";
                  document.querySelector(".weather-description").style.color = "black";
                  document.querySelector(".now-temperature").style.color = "black";
                  document.querySelector(".celsius").style.color = "black";
                  document.querySelector(".under-temp").style.color = "black";
                  document.querySelector(".magni-img").style.filter = "none";
                  document.querySelector(".pin-img").style.filter = "none";
      break;
      default:  iconElement.src= "media/mist.png"; 
                messageElement.innerHTML= `"Everything seems not so clear, but if we wait a bit we will start to understand."`;
                colorElement.style.background ="linear-gradient(178deg, rgb(183, 190, 183) 0%, rgb(209, 222, 210) 11%, rgb(245, 248, 250) 65%)";
                document.querySelector(".city").style.color = "black";
                document.querySelector(".more-info").style.color = "black";
                document.querySelector(".day-time").style.color = "black";
                document.querySelector(".weather-description").style.color = "black";
                document.querySelector(".now-temperature").style.color = "black";
                document.querySelector(".celsius").style.color = "black";
                document.querySelector(".under-temp").style.color = "black";
                document.querySelector(".magni-img").style.filter = "none";
                document.querySelector(".pin-img").style.filter = "none";
    } ;

}  

//This function works to fill the days name in the html forecast row function.
//The "function(forecastDay, index)"" inside the "displayForecast" is calling it.
function daysName(timestamp){
  let date = new Date(timestamp * 1000);
  let day = date.getDay();
  let days = ["Sun", "Mon","Tue","Wed","Thu","Fri", "Sat"];
  return days[day];
}

//This function works to fill the weather icons in the html forecast row function.
//The "function(forecastDay, index)"" inside the "displayForecast" is calling it.
function iconNameFunction(iconName){

  switch(iconName){
  case "01d": return "media/icon-sunny.png";
  case "01n": return"media/icon-sunny.png";
  case "02d": return"media/icon-few-clouds.png";
  case "02n": return "media/icon-few-clouds.png";
  case "03d": return "media/icon-few-clouds.png";
  case "03n": return "media/icon-few-clouds.png";
  case "04d": return "media/icon-few-clouds.png";
  case "04n": return "media/icon-few-clouds.png";
  case "09d": return "media/icon-shower-rain.png";
  case "10d": return "media/icon-rain.png";
  case "11d": return "media/icon-thunderstorm.png";
  case "013d": return "media/icon-snow.png";
  default: return "media/icon-mist.png";
}
}

//This function works to fill all the Forecast Row
//The "chosenCity", "findLocation" and "getForecast" functions it's calling it
function displayForecast(response){
  let forecast = response.data.daily;

  let forecastElement = document.querySelector("#forecast");

  let forecastHTML = `<div class="forecast row">`;
      forecast.forEach(function(forecastDay, index){
      let iconName = forecastDay.weather[0].icon;
  
        if (index < 6){
          forecastHTML = forecastHTML +
            `
              <div class="forecast col-6">
                ${daysName(forecastDay.dt)}
                </br>
                <img
                id ="weatherIcon"
                src= ${iconNameFunction(iconName)}
                alt="${iconName}"
                width="40"/> 
                </br>
                <span class="forecast-max">
                ${Math.round(forecastDay.temp.max)}°
                </span>
                <span class="forecast-min">
                ${Math.round(forecastDay.temp.min)}°
                </span>
              </div>
            `

      };
 
  });
  forecastHTML= forecastHTML + `</div>`;
  forecastElement.innerHTML = forecastHTML;
  
}

//This function works to fill all informations about the weather and the city
//The "chosenCity" and "findLocation" functions it's calling it  
function displayGeneral(response) {
  document.querySelector("#current-city").innerHTML = response.data.name;
  document.querySelector("#temperature").innerHTML =Math.round(response.data.main.temp);
  document.querySelector("#description").innerHTML= response.data.weather[0].description;
  document.querySelector("#humidity").innerHTML= response.data.main.humidity;
  document.querySelector("#wind").innerHTML= Math.round(response.data.wind.speed);

  getForecast(response.data.coord);

  backgroundImage(response);
}

//This function works to conect the api data to fill the Forecast
//The "displayGeneral" function it's calling it.
function getForecast(coordinates){
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayForecast);
}

//This function is to conect the api with the find me pin.
//The "findMe" function it's calling it 
function findLocation(position) {
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}&units=metric`;
  axios.get(url).then(displayGeneral, displayForecast);
}

//This function is to conect the api with the search and the chosen city already.
//The "search" function it's calling it.
function chosenCity(city) { 
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
  
  axios.get(apiUrl).then(displayGeneral,displayForecast);
  }

function search(event) {
  event.preventDefault();
  let city = document.querySelector("#showCity").value;
  chosenCity(city);
  }

function findMe(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(findLocation);
  }
  
  //Date
  
  let now = new Date();
  let currentDay = document.querySelector("#dayTime");
  currentDay.innerHTML = currentDate(now);
  
  //Search
  let form = document.querySelector("#formCity");
  form.addEventListener("submit", search);
  let apiKey = "55e4edd7cf6872d232f9af728b279efd";
  let current = document.getElementById("btnCurrent");
  current.addEventListener("click", findMe);
  
  // Load Page
  chosenCity("Berlin");

  //Hidden link
  function goHome(){
    //<input type="image" src="media/github.png" onclick="hiddenLink()"/>
    return window.open("https://google.com", "_blank")
  }