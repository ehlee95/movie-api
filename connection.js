// import mongoose
let mongoose = require("mongoose");

// connect to database
const DATABASE_NAME = "movies";
let mongooseConfig = { useNewUrlParser: true, useUnifiedTopology: true };
mongoose.connect(`mongodb://localhost:27017/${DATABASE_NAME}`, mongooseConfig);

// event listeners for mongoose
mongoose.connection.on("connected", () => console.log("connected to database"));
mongoose.connection.on("disconnected", () =>
  console.log("disconnected from database")
);
mongoose.connection.on("error", (error) => console.error("error", error));
