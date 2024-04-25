// const apiKey = "dbae877aefae6c692030cb8078fe0c5f";
// const apiUrl =
//   "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

// async function checkWeather(city) {
//   const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
//   const data = await response.json();
//   const weatherIcon = document.querySelector(".weather-icon");

//   console.log(data);

//   document.querySelector(".city").innerHTML = data.name;
//   document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
//   document.querySelector(".humidity").innerHTML =
//     data.main.humidity + " " + "%";
//   document.querySelector(".wind").innerHTML = data.wind.speed + " " + "km/h";

//   if (data.weather[0].main == "clouds") {
//     weatherIcon.src = "imgs/cloud-sun.jpg";
//   }

//   else if (data.weather[0].main == "clear") {
//     weatherIcon.src = "imgs/clear.png";
//   }

//   else if (data.weather[0].main == "rain") {
//     weatherIcon.src = "imgs/rain.png";
//   }

//   else if (data.weather[0].main == "drizzle") {
//     weatherIcon.src = "imgs/drizzle.png";
//   }

//   else
//     if (data.weather[0].main == "mist") {
//       weatherIcon.src = "imgs/mist.png";

//   }
// }

// const searchBox = document.querySelector(".search input");
// const searchBtn = document.querySelector(".search button");

// searchBtn.addEventListener("click", () => {
//   checkWeather(searchBox.value);
// });

const apiKey = "dbae877aefae6c692030cb8078fe0c5f";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

  if (!response.ok) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
    return; // Exit the function early if there's an error
  }

  const data = await response.json();
  const weatherIcon = document.querySelector(".weather-icon");

  console.log(data);

  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
  document.querySelector(".humidity").innerHTML = data.main.humidity + " " + "%";
  document.querySelector(".wind").innerHTML = data.wind.speed + " " + "km/h";

  if (data.weather[0].main == "Clouds") {
    weatherIcon.src = "imgs/cloud-sun.jpg";
  } else if (data.weather[0].main == "Rain") {
    weatherIcon.src = "imgs/rain.png";
  } else if (data.weather[0].main == "Drizzle") {
    weatherIcon.src = "imgs/drizzle.png";
  } else if (data.weather[0].main == "Mist") {
    weatherIcon.src = "imgs/mist.png";
  }

  document.querySelector(".weather").style.display = "block";
  document.querySelector(".error").style.display = "none";
}

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});
