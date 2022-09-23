const express = require("express");
//User
const ListTouristPlaces = require("./Controller/ListTouristPlaces");

//Admin
const AddCity = require("./Controller/Admin/AddCity");
const AddTourististPlace = require("./Controller/Admin/AddTourististPlace");

const Router = express.Router();

//User Router
Router.get("/touristplaces/:cityId", ListTouristPlaces);

//Admin Router
Router.post("/admin/touristplace", AddTourististPlace);
Router.post("/admin/city", AddCity);

Router.get("/", (req, res) => {
  res.send("Hello World");
});

module.exports = Router;
