// import mongoose
let mongoose = require("mongoose");

// connect to database
const DATABASE_NAME = "movies";
let mongooseConfig = { useNewUrlParser: true, useUnifiedTopology: true };

// event listeners for mongoose
mongoose.connection.on("connected", () => console.log("connected to database"));
mongoose.connection.on("disconnected", () =>
  console.log("disconnected from database")
);
mongoose.connection.on("error", (error) => console.error("error", error));

let connectionString = process.env.MONGODB_URI;
let MONGODB_URI =
  connectionString || `mongodb://localhost:27017/${DATABASE_NAME}`;
mongoose.connect(
  MONGODB_URI,
  mongooseConfig,
  () => console.log("connected to db"),
  (err) => console.error(err)
);
module.exports = mongoose;
