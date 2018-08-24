// var fetch = require('node-fetch');
const { CITY_REQS } = require("./_config.js");

function fetchAPI() {
  fetch(CITY_REQS[0])
    .then(response => response.json())
    .then(json => {
      console.log(json);
      return fetch(CITY_REQS[1])
    })
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(error => console.log(error.message));
}

module.exports = {
  fetchAPI
};
