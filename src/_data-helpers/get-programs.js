const getItems = require("./get-items");
const path = require("path");

module.exports = async (token) => {

  const allPrograms = await getItems(token, path.join(process.env.AMILIA_BASE_URL, "programs?showHidden=true"));

  return allPrograms;
}