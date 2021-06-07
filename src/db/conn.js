const mongoose = require("mongoose");

//creating or checking database
mongoose
  .connect("mongodb://localhost:27017/nodeproject", {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("database connect");
  })
  .catch((err) => {
    console.log(err);
  });
