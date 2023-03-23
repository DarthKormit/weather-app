import lightRain from "../assets/lightRain.png"

function addIcon() {
  const listofIcons = document.getElementsByClassName("weather-icon");
  Array.from(listofIcons).forEach((element) => {
    element.src = lightRain;
    console.log("yes");
  });
}

export default addIcon;
