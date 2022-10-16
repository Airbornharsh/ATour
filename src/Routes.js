const express = require("express");
//User
const ListTouristPlaces = require("./Controller/ListTouristPlaces");
const GetCity = require("./Controller/GetCity");

//Admin
const AddCity = require("./Controller/Admin/AddCity");
const AddTourististPlace = require("./Controller/Admin/AddTourististPlace");
const GetCities = require("./Controller/GetCities");

const Router = express.Router();

//User Router
Router.get("/touristplaces/:cityId", ListTouristPlaces);
Router.get("/city/:cityId", GetCity);
Router.get("/cities", GetCities);

//Admin Router
Router.post("/admin/touristplace", AddTourististPlace);
Router.post("/admin/city", AddCity);

Router.get("/", (req, res) => {
  res.send("Hello World");
});

module.exports = Router;
