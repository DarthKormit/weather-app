

function createMainDayDiv() {
    let mainDayDiv = document.createElement("div");
    mainDayDiv.className = "main-day-div";
}

function createMainDayLeft() {
    let mainDayLeft = document.createElement("div");
    mainDayLeft.className = "main-day-left";
}

function createMainDayMiddle() {
    let mainDayMiddle = document.createElement("div");
    mainDayMiddle.className = "main-day-middle";

    let mainDayHourlyDiv = document.createElement("div");
    mainDayHourlyDiv.id = "main-day-hourly";
    let hourlyTitle  = document.createElement("span");
    hourlyTitle.innerHTML = "Hourly:";
    let hourlyWeather = document.createElement("div");
    hourlyWeather.id = "hourly-weather";
}

function createMainDayRight() {
    let mainDayRight = document.createElement("div");
    mainDayRight.className = "main-day-right";
}

function createRestOfWeek() {
    let restOfWeekDiv = document.createElement("div");
    restOfWeekDiv.className = "rest-of-week";
}