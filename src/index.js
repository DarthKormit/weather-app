import "./styles/main.scss";

console.log("1, 2 ,3");

fetch("http://api.weatherapi.com/v1/current.json?key=273f0d3a84224f6ba65100946232203&q=Auckland&aqi=yes", {
  mode: "cors",
})
  .then(function (response) {
    return response.json();
  })
  .then(function (response) {
    console.log(response);
  });
