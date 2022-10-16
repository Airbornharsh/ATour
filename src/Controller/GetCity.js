const City = require("../Models/City");

const GetCity = async (req, res) => {
  try {
    const data = await City.findOne({ cityId: req.params.cityId });
    return res.send(data);
  } catch (e) {
    return res.status(500).send(e);
  }
};

module.exports = GetCity;
