const { default: mongoose } = require("mongoose");

const CitySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  nameId: {
    type: String,
    required: true,
  },
  cityId: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("City", CitySchema);
