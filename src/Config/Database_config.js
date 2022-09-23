const mongoose = require("mongoose");

const DbConnect = async () => {
  try {
    mongoose.connect(process.env.DB_URI, () => {
      console.log("Db Connected");
    });
  } catch (e) {
    console.log(e);
  }
};

module.exports = DbConnect;
