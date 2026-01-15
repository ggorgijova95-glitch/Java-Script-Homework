let weatherForecast = {
  city: "Radovis",
  temperature: 20, // Celsius
  conditions: "Sunny"
};
// Function to convert Celsius to Fahrenheit
function showWeatherInFahrenheit(weather) {
  // Convert Celsius to Fahrenheit
  let tempF = weather.temperature * 9 / 5 + 32;

  console.log(
    "The weather in " +
    weather.city +
    " is " +
    weather.conditions +
    " with a temperature of " +
    tempF +
    "°F."
  );
  
}
// Call the function to display the weather in Fahrenheit
showWeatherInFahrenheit(weatherForecast);
alert("The weather in " + weatherForecast.city + " is " + weatherForecast.conditions + " with a temperature of " + (weatherForecast.temperature * 9 / 5 + 32) + "°F.");

