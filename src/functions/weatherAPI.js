async function newApiCall() {
  const response = await fetch(
    "https://api.weatherapi.com/v1/current.json?key=273f0d3a84224f6ba65100946232203&q=Auckland&aqi=yes",
    { mode: "cors" }
  );
  const weatherData = await response.json();
  console.log(weatherData);
  return weatherData;
}

async function currentData() {
  const currentData = (await Promise.resolve(newApiCall())).current;
  console.log(currentData);
  console.log(currentData.feelslike_c);
  console.log(currentData.humidity);
}

async function locationData() {
  const locationData = (await Promise.resolve(newApiCall())).location;
  console.log(locationData);
  console.log(locationData.country);
  console.log(locationData.name);
}

export { currentData, locationData };
