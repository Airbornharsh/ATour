const TouristPlace = require("../../Models/TouristPlace");

const AddTourististPlace = async (req, res) => {
  try {
    const data = new TouristPlace(req.body);
    await data.save();
    return res.send(data);
  } catch (e) {
    return res.status(500).send(e);
  }
};

module.exports = AddTourististPlace;
