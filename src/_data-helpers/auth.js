const fetch = require("cross-fetch");

module.exports = () => {
  return fetch(process.env.AMILIA_AUTHENTICATE_URL, {
    headers: {
      "X-Amilia-Origin": process.env.X_AMILIA_ORIGIN,
      "Authorization": `Basic ${Buffer.from(`${process.env.AMILIA_USERNAME}:${process.env.AMILIA_PASSWORD}`, "utf-8").toString('base64')}`
    }
  })
  .then(response => response.json())
  .then(tokenObj => tokenObj.Token)
  .catch(error => console.error("Error with Amilia oauth.", error));
};