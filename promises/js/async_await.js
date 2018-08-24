const { CITY_REQS } = require("./_config.js");

function asyncAwaitAPI() {
  fetchData()
    .then(response => console.log(response))
    .catch(error => console.log(error));
}

async function fetchData() {
  let londonRes = await fetch(CITY_REQS[0]);
  let london = await londonRes.json();
  let nairobiRes = await fetch(CITY_REQS[1]);
  let nairobi = await nairobiRes.json();
  return {
    london,
    nairobi
  };
}

module.exports = {
  asyncAwaitAPI
};
