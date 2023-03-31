import lightRain from "../assets/lightRain.png";

function createWeekDayWeatherCard() {
  let weekDayWeatherCard = document.createElement("div");
  weekDayWeatherCard.className = "weather-day-card";
  let daySpan = document.createElement("span");
  daySpan.innerHTML = "Saturday";
  let weatherSpan = document.createElement("span");
  weatherSpan.innerHTML = "Light Rain";
  let temperature = document.createElement("span");
  temperature.innerHTML = "17&#8451; / 23&#8451;";
  let weatherIcon = document.createElement("img");
  weatherIcon.src = lightRain;
}

function createHourlyWeatherCard() {
  let hourlyWeatherCard = document.createElement("div");
  hourlyWeatherCard.className = "weather-day-hourly-card";
  let hourSpan = document.createElement("span");
  hourSpan.innerHTML = "1PM";
  let weatherSpan = document.createElement("span");
  weatherSpan.innerHTML = "Light Rain";
  let temperature = document.createElement("span");
  temperature.innerHTML = "17&#8451; / 23&#8451;";
  let weatherIcon = document.createElement("img");
  weatherIcon.src = lightRain;
}

function createSideContentCard() {
  let detailsDiv = document.createElement("div");
  detailsDiv.className = "side-content";

  let detailsTitle = document.createElement("span");
  detailsTitle.innerHTML = "Pressure";

  let details = document.createElement("span");
  details.innerHTML = "0MP";
}

function createUnitSlider() {
  let unitSettings = document.createElement("div");
  unitSettings.className = "unit-Settings";
  let measureUnit = document.createElement("span");
  measureUnit.id = "measure-unit";
  measureUnit.innerHTML = "Measurement Units:";
  let switchContainer = document.createElement("label");
  switchContainer.className = "switch";
  let checkBox = document.createElement("input");
  checkBox.type = "checkbox";
  let slider = document.createElement("span");
  slider.className = "slider round";
}

function mainDayBrief() {
  let mainDayBrief = document.createElement("div");
  mainDayBrief.id = "main-day-brief";

  let location = document.createElement("span");
  location.id = "main-day-middle";
  location.innerHTML = "Auckland";

  let date = document.createElement("span");
  date.id = "main-day-middle";
  date.innerHTML = "Wednesday 14th March 2019";

  let weather = document.createElement("span");
  weather.id = "main-day-middle";
  weather.innerHTML = "Light Rain";

  let temperature = document.createElement("span");
  temperature.id = "main-day-middle";
  temperature.innerHTML = "17&#8451; / 23&#8451;";
  let weatherIcon = document.createElement("img");
  weatherIcon.id = "";
}

function addIcon() {
  const listofIcons = document.getElementsByClassName("weather-icon");
  Array.from(listofIcons).forEach((element) => {
    element.src = lightRain;
    console.log("yes");
  });
}

export {
  addIcon,
  createHourlyWeatherCard,
  createSideContentCard,
  createWeekDayWeatherCard,
  createUnitSlider,
};
