import {addToBody} from "./components/layout";
import {addIcon} from "./components/weatherDayCard";
import {weatherAPICall, forecastAPICall, restOfWeekData } from "./functions/weatherAPI";
import "./styles/main.scss";


console.log("1, 2 ,3");

weatherAPICall("Auckland");
forecastAPICall("Auckland");
restOfWeekData("Auckland");
addToBody();
addIcon();




