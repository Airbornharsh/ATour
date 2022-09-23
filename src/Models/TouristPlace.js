const mongoose = require("mongoose");

const TouristPLaceSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  placeId: {
    type: String,
    unique: true,
    required: true,
  },
  cityId: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  district: {
    type: String,
  },
  state: {
    type: String,
  },
  country: {
    type: String,
  },
  category: {
    type: String,
  },
  mapLink: {
    type: String,
    required: true,
  },
  characteristics: {
    type: Array,
  },
  time: {
    type: Object,
  },
  localLocation: {
    type: String,
  },
  tollFee: {
    type: Object,
  },
  tarvel: {
    type: Array,
  },
  bestTime: {
    type: String,
  },
  rules: {
    type: Array,
  },
});

module.exports = mongoose.model("TouristPlace", TouristPLaceSchema);
