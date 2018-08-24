function customePromise() {
  delay(1000)
    .then(() => console.log("Custome Promise was successful"))
    .catch(error => console.log(error));
}

function delay(time) {
  return new Promise((resolve, reject) => {
    if (isNaN(time)) {
      reject(new Error("Delay requires a valid number"));
      return;
    }

    setTimeout(() => resolve(), time);
  });
}

module.exports = {
  customePromise
};
