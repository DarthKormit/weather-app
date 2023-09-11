import {weatherAPICall, forecastAPICall, restOfWeekData } from "./weatherAPI";

function searchBarListener(input) {
    let location = input;
    weatherAPICall(location);
    forecastAPICall(location);
    restOfWeekData(location);
}

export default searchBarListener;