// Open Weather Data API Key
const APP_ID = "key";
const CITY_NAMES = ["London", "Nairobi", "None?=Existent"];

CITY_REQS = CITY_NAMES.map(
  city =>
    `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APP_ID}`
);

module.exports = {
  APP_ID,
  CITY_REQS,
  CITY_NAMES
};
