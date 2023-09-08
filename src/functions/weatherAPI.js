async function weatherAPICall() {
  const response = await fetch(
    "https://api.weatherapi.com/v1/current.json?key=273f0d3a84224f6ba65100946232203&q=Auckland&aqi=yes",
    { mode: "cors" }
  );
  const weatherData = await response.json();
  console.log(weatherData);

  document.getElementById("humidity").innerHTML = weatherData.current.humidity + " %";
  document.getElementById("wind-speed").innerHTML = weatherData.current.wind_kph + " kph";
  document.getElementById("wind-gust").innerHTML = weatherData.current.gust_kph + " kph";
  document.getElementById("uv").innerHTML = weatherData.current.uv + " ";
  document.getElementById("cloud-coverage").innerHTML = weatherData.current.cloud + " %";
  document.getElementById("pressure").innerHTML = weatherData.current.pressure_in + " mb";

  document.getElementById("co").innerHTML = weatherData.current.air_quality.co + " μg/m3";
  document.getElementById("ozone").innerHTML = weatherData.current.air_quality.o3 + " μg/m3";
  document.getElementById("no2").innerHTML = weatherData.current.air_quality.no2 + " μg/m3";
  document.getElementById("so2").innerHTML = weatherData.current.air_quality.so2 + " μg/m3";
  document.getElementById("pm").innerHTML = weatherData.current.air_quality.pm2_5 + "/" + weatherData.current.air_quality.pm10 + " μg/m3";
  document.getElementById("epa-index").innerHTML = weatherData.current.air_quality["us-epa-index"] + " ";

  document.getElementById("main-day-location").innerHTML = weatherData.location.name;
  document.getElementById("main-day-date").innerHTML = weatherData.location.localtime;
  document.getElementById("main-day-weather").innerHTML = weatherData.current.condition.text;
  document.getElementById("main-day-temperature").innerHTML = weatherData.current.temp_c + "℃";
  document.getElementById("main-day-image").src = "https://cdn.weatherapi.com/weather/64x64/day/122.png";


  return weatherData;
}

async function forecastAPICall() {
  const response = await fetch(
    "https://api.weatherapi.com/v1/forecast.json?key=273f0d3a84224f6ba65100946232203&&q=Auckland&days=8&aqi=yes&alerts=no",
    { mode: "cors" }
  );

  const weatherForecastData = await response.json();
  let hourlyCards = document.getElementById("hourly-weather").childNodes;
  console.log(hourlyCards);
  hourlyCards.forEach(function(node, hours) {
    let cardNodes = node.childNodes;
    cardNodes[0].innerHTML = weatherForecastData.forecast.forecastday[0].hour[hours].time.slice(-5);
    cardNodes[1].innerHTML = "";
    // cardNodes[1].innerHTML = weatherForecastData.forecast.forecastday[0].hour[hours].condition.text;
    cardNodes[2].innerHTML = weatherForecastData.forecast.forecastday[0].hour[hours].feelslike_c + "℃";
    cardNodes[3].src = weatherForecastData.forecast.forecastday[0].hour[hours].condition.icon;
    hours++;
  });

  
  console.log(weatherForecastData);
  console.log((weatherForecastData.forecast.forecastday[0].hour[0]));
  return weatherForecastData;
}


async function currentDayForecastData() {
  const currentData = (await Promise.resolve(forecastAPICall())).forecast.forecastday[0];
  console.log(currentData);
  return currentData;
}



async function middleData() {
  const currentData = (await Promise.resolve(weatherAPICall())).current;
  const middleArray = []
  middleArray.push(currentData.temp_c, currentData.condition.text);
  return middleArray;
}

async function restOfWeekData() {
  const currentData = (await Promise.resolve(weatherAPICall())).current;
  const restOfWeekArray = []
  restOfWeekArray.push();
  return restOfWeekArray;
}

async function locationData() {
  const locationData = (await Promise.resolve(weatherAPICall())).location;
  console.log(locationData);
  console.log(locationData.country);
  console.log(locationData.name);
}

// "Humidity, Wind, Wind direction, Pressure, UV, Precipitation mm, "
// "CO, Ozone, Nitrogen, Sulfur, Particulate, EPA Index"

export {weatherAPICall, forecastAPICall, locationData, middleData, restOfWeekData, currentDayForecastData };
