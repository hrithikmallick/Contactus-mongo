const mongoose = require("mongoose");
const validator = require("validator");

//schema in mongoose
const userData = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minLength: 3,
  },
  email: {
    type: String,
    required: true,
    validator(val) {
      if (!validator.isEmail(val)) {
        throw new Error("Invalid Email");
      }
    },
  },
  mobile: {
    type: Number,
    min: 10,
  },
  message: {
    type: String,
  },

  Date: {
    type: Date,
    default: Date.now,
  },
});

//create model for collection creation
const Data = mongoose.model("user", userData);
//export the model
module.exports = Data;
