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
    document.querySelector("#temperature").innerHTML = Math.round(
      response.data.main.temp
    );
  }
  
  function search(event) {
    event.preventDefault();
    let city = document.querySelector("#show-city").value;
    nowCity(city);
  }
  
  function showCurrent(response) {
    let h1 = document.querySelector("h1");
    let temperature = document.querySelector("#temperature");
    temperature.innerHTML = Math.round(response.data.main.temp);
    h1.innerHTML = response.data.name;
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