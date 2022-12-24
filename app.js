const express = require("express");
const mongoose = require("mongoose");
const app = express();
const url =
  "mongodb+srv://vmongo:mongoDB@cluster0.8w8ijfl.mongodb.net/?retryWrites=true&w=majority";
mongoose.set("strictQuery", true);
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
const con = mongoose.connection;
con.on("open", function () {
  console.log("connected...");
});
app.use(express.json());
const alienRouter = require("./routes/alien");
app.use("/aliens", alienRouter);

app.listen(9000, () => {
  console.log("Server started");
});
