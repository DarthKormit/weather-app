import {weatherAPICall, forecastAPICall, restOfWeekData } from "./weatherAPI";

//calls api functions to change HTML DOM Elements for new location
function searchBarListener(input) {
    let location = input;
    weatherAPICall(location);
    forecastAPICall(location);
    restOfWeekData(location);
}

export default searchBarListener;