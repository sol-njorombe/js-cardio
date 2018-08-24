const { APP_ID, CITY_NAMES } = require("./_config.js");

function promiseAll() {
  let promises = CITY_NAMES.map(city => fetchData(city));
  Promise.all(promises)
    .then(response => console.log(response))
    .catch(error => console.log(error));
}

async function fetchData(city) {
  try {
    let londonRes = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APP_ID}`
    );
    return await londonRes.json();
  } catch (error) {
    console.log(error);
    return null;
  }
}

module.exports = {
  promiseAll
};