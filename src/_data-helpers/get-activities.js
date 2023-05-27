const getItems = require("./get-items");
const path = require("path");

const sorter = {
  lundi: 1,
  mardi: 2,
  mercredi: 3,
  jeudi: 4,
  vendredi: 5,
  samedi: 6,
  dimanche: 7
};

module.exports = async (token, programId) => {

  const activitiesResponse = await getItems(token, path.join(process.env.AMILIA_BASE_URL, `programs/${programId}/activities?showHidden=true`));
  
  const activities = activitiesResponse.sort((a, b) => {
    const day1 = a.SubCategoryName.toLowerCase();
    const day2 = b.SubCategoryName.toLowerCase();
    return sorter[day1] - sorter[day2];
  });
  
  return activities;
};