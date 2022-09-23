const City = require("../../Models/City");

const AddCity = async (req, res) => {
  try {
    const data = new City(req.body);
    await data.save();
    return res.send(data);
  } catch (e) {
    return res.status(500).send(e);
  }
};

module.exports = AddCity;
