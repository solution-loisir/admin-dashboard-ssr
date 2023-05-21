const auth = require("../_data-helpers/auth");
const getPrograms = require("../_data-helpers/get-programs");

module.exports = async () => {
  const token = await auth();
  return getPrograms(token);
};