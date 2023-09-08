import { addToBody } from "./components/layout";
import {addIcon} from "./components/weatherDayCard";
import {weatherAPICall, currentDayForecastData, forecastAPICall, locationData, middleData, restOfWeekData } from "./functions/weatherAPI";
import "./styles/main.scss";


console.log("1, 2 ,3");

forecastAPICall();
locationData();
addToBody();
addIcon();




