import {
  addIcon,
  createHourlyWeatherCard,
  createSideContentCard,
  createWeekDayWeatherCard,
  createUnitSlider,
  mainDayBrief,
  mainDayHourly,
  searchContainer,
} from "./weatherDayCard";

function createMainDayDiv() {
  let mainDayDiv = document.createElement("div");
  mainDayDiv.className = "main-day-div";

  mainDayDiv.appendChild(createMainDayLeft());
  mainDayDiv.appendChild(createMainDayMiddle());
  mainDayDiv.appendChild(createMainDayRight());

  document.body.appendChild(mainDayDiv);

}

function createMainDayLeft() {
  let mainDayLeft = document.createElement("div");
  mainDayLeft.className = "main-day-left";

  let mainDayLeftGrid = document.createElement("div");
  mainDayLeftGrid.id = "main-day-left-grid";


  mainDayLeftGrid.appendChild(createSideContentCard("humidity","Humidity:", "69"));
  mainDayLeftGrid.appendChild(createSideContentCard("wind-speed","Wind Speed:", "6.2"));
  mainDayLeftGrid.appendChild(createSideContentCard("wind-gust","Wind Gust:", "7"));
  mainDayLeftGrid.appendChild(createSideContentCard("uv","UV:", "8"));
  mainDayLeftGrid.appendChild(createSideContentCard("cloud-coverage","Cloud Coverage:", "54"));
  mainDayLeftGrid.appendChild(createSideContentCard("pressure","Pressure:", "67"));
  mainDayLeft.appendChild(mainDayLeftGrid);
  
  return mainDayLeft;
}

function createMainDayMiddle() {
  let mainDayMiddle = document.createElement("div");
  mainDayMiddle.className = "main-day-middle";
  
  mainDayMiddle.appendChild(mainDayBrief());
  mainDayMiddle.appendChild(searchContainer());
  mainDayMiddle.appendChild(mainDayHourly());
  mainDayMiddle.appendChild(createUnitSlider());


  return mainDayMiddle;
}

function createMainDayRight() {
  let mainDayRight = document.createElement("div");
  mainDayRight.className = "main-day-right";

  let mainDayRightGrid = document.createElement("div");
  mainDayRightGrid.id = "main-day-right-grid";


  mainDayRightGrid.appendChild(createSideContentCard("co","CO:", "8" ));
  mainDayRightGrid.appendChild(createSideContentCard("ozone","Ozone:", "10.5"));
  mainDayRightGrid.appendChild(createSideContentCard("no2","NO₂:", "11" ));
  mainDayRightGrid.appendChild(createSideContentCard("so2","SO₂:", "11" ));
  mainDayRightGrid.appendChild(createSideContentCard("pm","PM 2.5/10:", "11" ));
  mainDayRightGrid.appendChild(createSideContentCard("epa-index","EPA Index:", "11"));
  mainDayRight.appendChild(mainDayRightGrid);

  return mainDayRight;
}

function createRestOfWeek() {
  let restOfWeekDiv = document.createElement("div");
  restOfWeekDiv.className = "rest-of-week";

  for (let i = 0; i < 7; i++) {
    restOfWeekDiv.appendChild(createWeekDayWeatherCard());
  }
  document.body.appendChild(restOfWeekDiv);
}

function addToBody() {
  createMainDayDiv();
  createRestOfWeek();
}

export {addToBody};