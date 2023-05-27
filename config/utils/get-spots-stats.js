module.exports = function(activities) {
  return activities.reduce((object, activity) => {
    if(!object.TotalSpots) object.TotalSpots = 0;
    if(!object.TotalSpotsRemaining) object.TotalSpotsRemaining = 0;
    if(!object.TotalSpotsReserved) object.TotalSpotsReserved = 0;
    object.TotalSpots += activity.MaxAttendance;
    object.TotalSpotsRemaining += activity.SpotsRemaining;
    object.TotalSpotsReserved += activity.SpotsReserved;

    return object;
  }, {});
};