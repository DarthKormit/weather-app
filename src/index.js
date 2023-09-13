import {addToBody} from "./components/layout";
import {weatherAPICall, forecastAPICall, restOfWeekData } from "./functions/weatherAPI";
import "./styles/main.scss";

//creates all HTML Dom Elements
addToBody();

//api functions to call to retreive data from weatherapi.com
weatherAPICall("Auckland");
forecastAPICall("Auckland");
restOfWeekData("Auckland");





