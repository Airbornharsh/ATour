const City = require("../Models/City");

const GetCities = async (req, res) => {
    try {
        const data = await City.find();
        return res.send(data);
    } catch (e) {
        return res.status(500).send(e);
    }
};

module.exports = GetCities;
