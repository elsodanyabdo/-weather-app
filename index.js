const apiKey = "22af0c63b901d920e61ee5c2ed408a57";
const url = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const name = document.querySelector(".search input");
const button = document.querySelector(".search button");
const icon = document.querySelector(".iamge");
const weather = document.querySelector(".weather-app");
// console.log(icon);

async function checkWeather(city) {
  const response = await fetch(url + city + `&appid=${apiKey}`);
  if ((response.status == 404)) {
    document.querySelector(".error").style.display = "block";
    weather.style.display = "none";
  } else {
    var date = await response.json();
    console.log(date);
    document.querySelector(".city").innerHTML = date.name;
    document.querySelector(".temp").innerHTML =
      Math.trunc(date.main.temp) + " °c";
    document.querySelector(".humidity").innerHTML = date.main.humidity + " %";
    document.querySelector(".wind").innerHTML = date.wind.speed + " km/h";
    if (date.weather[0].main == "Clouds") {
      icon.src = "./images/clouds.png";
    } else if (date.weather[0].main == "Clear") {
      icon.src = "./images/clear.png";
    } else if (date.weather[0].main == "Rain") {
      icon.src = "./images/rain.png";
    } else if (date.weather[0].main == "Drizzle") {
      icon.src = "./images/drizzle.png";
    }
      weather.style.display = "block";
                document.querySelector(".error").style.display = "none";
  }
}
button.addEventListener("click", () => {
  checkWeather(name.value);
});
