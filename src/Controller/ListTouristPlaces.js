const TouristPlace = require("../Models/TouristPlace");

const ListTouristPlaces = async (req, res) => {
  try {
    const data = await TouristPlace.find({ cityId: req.params.cityId });
    console.log(data);
    return res.send(data);
  } catch (e) {
    console.log(e);
    return res.status(500).send(e);
  }
};

module.exports = ListTouristPlaces;
