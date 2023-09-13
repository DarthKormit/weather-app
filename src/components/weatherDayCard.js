import lightRain from "../assets/lightRain.png";
import searchBarListener from "../functions/searchBar";

//creates card element for the rest of the week days
function createWeekDayWeatherCard(id) {
  let weekDayWeatherCard = document.createElement("div");
  weekDayWeatherCard.className = "weather-day-card";
  //id used for element selection of individual cards
  weekDayWeatherCard.id = "rest-week-" + id;

  let daySpan = document.createElement("span");
  daySpan.innerHTML = "Saturday";

  let weatherSpan = document.createElement("span");
  weatherSpan.innerHTML = "Light Rain";

  let temperatureSpan = document.createElement("span");
  temperatureSpan.innerHTML = "17&#8451; / 23&#8451;";

  let weatherIcon = document.createElement("img");
  weatherIcon.src = lightRain;

  weekDayWeatherCard.appendChild(daySpan);
  weekDayWeatherCard.appendChild(weatherSpan);
  weekDayWeatherCard.appendChild(temperatureSpan);
  weekDayWeatherCard.appendChild(weatherIcon);

  return weekDayWeatherCard;
}

//creates card element for hourly weather data
function createHourlyWeatherCard(id) {
  let hourlyWeatherCard = document.createElement("div");
  hourlyWeatherCard.className = "weather-day-hourly-card";
  //id used for element selection of individual cards
  hourlyWeatherCard.id = id;

  let hourSpan = document.createElement("span");
  hourSpan.innerHTML = "1PM";

  let weatherSpan = document.createElement("span");
  weatherSpan.innerHTML = "Light Rain";

  let temperatureHourly = document.createElement("span");
  temperatureHourly.innerHTML = "23#8451";

  let weatherIcon = document.createElement("img");
  weatherIcon.src = lightRain;

  hourlyWeatherCard.appendChild(hourSpan);
  hourlyWeatherCard.appendChild(weatherSpan);
  hourlyWeatherCard.appendChild(temperatureHourly);
  hourlyWeatherCard.appendChild(weatherIcon);

  return hourlyWeatherCard;
}

//creates card element for individual weather data for main day side sections
//id for iteration, type = name of data type, measure = placeholder value
function createSideContentCard(id, type, measure) {
  let detailsDiv = document.createElement("div");
  detailsDiv.className = "side-content";

  let detailsTitle = document.createElement("span");
  detailsTitle.innerHTML = type;

  let details = document.createElement("span");
  details.innerHTML = measure;
  details.id = id;

  detailsDiv.appendChild(detailsTitle);
  detailsDiv.appendChild(details);

  return detailsDiv;
}

//creates toggle switch element to change between imperial and metric units
//currently not in use
function createUnitSlider() {
  let unitSettings = document.createElement("div");
  unitSettings.className = "unit-settings";

  let measureUnit = document.createElement("span");
  measureUnit.id = "measure-unit";
  measureUnit.innerHTML = "Measurement Units:";

  let switchContainer = document.createElement("label");
  switchContainer.className = "switch";

  let checkBox = document.createElement("input");
  checkBox.type = "checkbox";

  let slider = document.createElement("span");
  slider.className = "slider round";

  unitSettings.appendChild(measureUnit);
  switchContainer.appendChild(checkBox);
  switchContainer.appendChild(slider);
  unitSettings.appendChild(switchContainer);

  return unitSettings;
}

//creates current day element for the current day's weather data excluding hourly
function mainDayBrief() {
  let mainDayBrief = document.createElement("div");
  mainDayBrief.id = "main-day-brief";

  let location = document.createElement("span");
  location.id = "main-day-location";
  location.innerHTML = "Auckland";

  let date = document.createElement("span");
  date.id = "main-day-date";
  date.innerHTML = "Wednesday 14th March 2019";

  let weather = document.createElement("span");
  weather.id = "main-day-weather";
  weather.innerHTML = "Light Rain";

  let temperature = document.createElement("span");
  temperature.id = "main-day-temperature";
  temperature.innerHTML = "17&#8451; / 23&#8451;";

  let weatherIcon = document.createElement("img");
  weatherIcon.src = lightRain;
  weatherIcon.id = "main-day-image";

  mainDayBrief.appendChild(location);
  mainDayBrief.appendChild(date);
  mainDayBrief.appendChild(weather);
  mainDayBrief.appendChild(temperature);
  mainDayBrief.appendChild(weatherIcon);

  return mainDayBrief;
}

//creates search bar element
function searchContainer() {
  let searchContainer = document.createElement("div");
  searchContainer.className = "search-container";

  let searchBar = document.createElement("div");
  searchBar.className = "search-bar";
  let searchForm = document.createElement("div");

  searchForm.id = "search-bar-form";
  let searchInput = document.createElement("input");
  searchInput.type = "text";
  searchInput.placeholder = "Search...";
  searchInput.name = "search";
  //event listener for the search bar to allow pressing the enter button to search
  searchInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      document.getElementById("search-button").click();
    }
  });

  let searchButton = document.createElement("button");
  searchButton.type = "submit";
  searchButton.id = "search-button";
  searchButton.innerHTML = "&#128269;";
  //event listener for search button to initiate a location search
  searchButton.addEventListener("click", () => {
    searchBarListener(searchInput.value);
    searchInput.value = "";
  });

  searchContainer.appendChild(searchBar);
  searchBar.appendChild(searchForm);
  searchForm.appendChild(searchInput);
  searchForm.appendChild(searchButton);

  return searchContainer;
}

//creates current day hourly elements container for hourly weather data
function mainDayHourly() {
  let mainDayHourlyDiv = document.createElement("div");
  mainDayHourlyDiv.id = "main-day-hourly";
  let hourlyTitle = document.createElement("span");
  hourlyTitle.innerHTML = "Hourly:";
  let hourlyWeather = document.createElement("div");
  hourlyWeather.id = "hourly-weather";

  //create a hourly card for each hour of the day
  for (let i = 0; i < 24; i++) {
    let id = "hourly" + "-" + i;
    hourlyWeather.appendChild(createHourlyWeatherCard(id));  
  }

  mainDayHourlyDiv.appendChild(hourlyTitle);
  mainDayHourlyDiv.appendChild(hourlyWeather);

  return mainDayHourlyDiv;
}

export {
  createHourlyWeatherCard,
  createSideContentCard,
  createWeekDayWeatherCard,
  createUnitSlider,
  mainDayBrief,
  mainDayHourly,
  searchContainer,
};
