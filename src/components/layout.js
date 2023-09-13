import {
  createSideContentCard,
  createWeekDayWeatherCard,
  mainDayBrief,
  mainDayHourly,
  searchContainer,
} from "./weatherDayCard";

//creates full current day div with all left,middle and right side content containers
function createMainDayDiv() {
  let mainDayDiv = document.createElement("div");
  mainDayDiv.className = "main-day-div";

  mainDayDiv.appendChild(createMainDayLeft());
  mainDayDiv.appendChild(createMainDayMiddle());
  mainDayDiv.appendChild(createMainDayRight());

  document.body.appendChild(mainDayDiv);

}

//creates current day left side content container
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

//creates current day middle content container
function createMainDayMiddle() {
  let mainDayMiddle = document.createElement("div");
  mainDayMiddle.className = "main-day-middle";
  
  mainDayMiddle.appendChild(mainDayBrief());
  mainDayMiddle.appendChild(searchContainer());
  mainDayMiddle.appendChild(mainDayHourly());
  // mainDayMiddle.appendChild(createUnitSlider());


  return mainDayMiddle;
}

//creates current day right side content container
function createMainDayRight() {
  let mainDayRight = document.createElement("div");
  mainDayRight.className = "main-day-right";

  let mainDayRightGrid = document.createElement("div");
  mainDayRightGrid.id = "main-day-right-grid";


  mainDayRightGrid.appendChild(createSideContentCard("co","CO:", "8" ));
  mainDayRightGrid.appendChild(createSideContentCard("ozone","Ozone:", "10.5"));
  mainDayRightGrid.appendChild(createSideContentCard("no2","NO2:", "11" ));
  mainDayRightGrid.appendChild(createSideContentCard("so2","SO2:", "11" ));
  mainDayRightGrid.appendChild(createSideContentCard("pm","PM 2.5/10:", "11" ));
  mainDayRightGrid.appendChild(createSideContentCard("epa-index","EPA Index:", "11"));
  mainDayRight.appendChild(mainDayRightGrid);

  return mainDayRight;
}

//creates rest of the week content container
function createRestOfWeek() {
  let restOfWeekDiv = document.createElement("div");
  restOfWeekDiv.className = "rest-of-week";
  restOfWeekDiv.id = "rest-week-container";

  //creates cards for 2 days due to free api limitiations
  for (let i = 0; i < 2; i++) {
    restOfWeekDiv.appendChild(createWeekDayWeatherCard(i));
  }
  document.body.appendChild(restOfWeekDiv);
}

//creates all HTML DOM Elements, to be used as inital contruction of app
function addToBody() {
  createMainDayDiv();
  createRestOfWeek();
}

export {addToBody};