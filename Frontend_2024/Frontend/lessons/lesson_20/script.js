//Обьекты для расшифровки кодов  погоды
const weatherCodeDescription = {
  0: "Clear sky",
  1: "Mainly clear",
  2: "partly cloudy",
  3: "overcast", 
  45: "Fog",
  48: "depositing rime fog",
  51: "Drizzle: Light,intensity",
  53: "Drizzle: Moderate,intensity ", 
  55: "Drizzle: dense,intensity ",
  56: "Freezing Drizzle: Light intensity",
  57: "Freezing Drizzle: Dance intensity",
  61: "Rain: Slight intensity",
  63: "Rain: Moderate intensity", 
  65: "Rain: Heavy intensity",
  66: "Freezing Rain: Light intensity",
  67: "Freezing Rain: Heavy intensity", 
 71: "Snow fall: Slight intensity",
 73:"Snow fall: Moderate intensity",
 75: "Snow fall:Heavy intensity",
 77: "Snow grains",
 80: " Rain showers: Slight intensity",
 81: " Rain showers: Moderate intensity",
 82: " Rain showers: Violent intensity", 
 85: "Snow  showers: Slight intensity",
 86: "Snow  showers: Heavy intensity",
 95: "Thunderstorm: Slight iof moderate",
 96: "Thunderstorm with slight hail",
 99:"Thunderstorm with heavy hail",
};
// Функция для получения описания погоды по коду
function getWeatherDescription(weathercode){
  return weatherCodeDescription[weathercode] || "Неизвестный код погоды";
}
async function getWeather(){
  //Запрос к API для получения данных о гео
  const response = await fetch('https://get.geojs.io/v1/ip/geo.json');
  const data = await response.json();
  const{latitude,longitude,city} = data;//Деструктуризация данных


  //Вывод инф о местоположении
  console.log('Город:', city);
  console.log('Широта:',latitude);
   console.log('Долгота:',longitude);

//Формировние Url для запроса погоды
  const weatherUrl =`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`;
  //Запрос к API погоды
  const weatherResponse = await  fetch(weatherUrl);
  //Преобразование ответа в Json
  const weatherData = await weatherResponse.json();
  const {temperature, windspeed, weathercode} = weatherData.current_weather;//Деструктуризация данных о погоде
  console.log('Температура:',temperature);
  console.log('Скорость ветра:',windspeed);
  console.log('Код погоды:',weathercode,);
  //Получение описания погоды
  const description = getWeatherDescription(weathercode);

  //Вывод информации о местоположении на страницу
  const weatherInfo =`
  <h2>Погода</h2>
    
  <p>City: ${city}</p>
  <p>Latitude: ${latitude}</p>
  <p>Longitude: ${longitude}</p>
  <p>Temperature: ${temperature} °C</p>
  <p>Winds speed: ${windspeed} m/c</p>
  <p>Description: ${description}</p>
   `;

  //Вывод описания погоды 
  document.getElementById('weather-description').innerHTML= weatherInfo;

}






getWeather();