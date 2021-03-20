const mongoose = require("mongoose");

mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false, //to hide Deprecation warning message on console
  useUnifiedTopology: true,
});

mongoose.connection.on("connected", () => {
  console.log("Connected to the database");
});
mongoose.connection.on("error", (err) => {
  console.log("Error connecting to mongo", err);
});
