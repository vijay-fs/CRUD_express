const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const app = express();
const mongodbURL = `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_URL}/?retryWrites=true&w=majority`;
mongoose.set("strictQuery", true);
mongoose.connect(mongodbURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const con = mongoose.connection;
con.on("open", function () {
  console.log("connected...");
});
app.use(
  cors({
    origin: ("http://localhost:3000", "*"),
  })
);
app.use(express.json());
const alienRouter = require("./routes/alien");
app.use("/aliens", alienRouter);
app.get("/", (req, res) => {
  res.send("CRUD Express app is running");
});
app.listen(9000, () => {
  console.log("Server started");
});
