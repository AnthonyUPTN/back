const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
require("dotenv").config();

const newsRouter = require("./routes/api/news");
const friendsRouter = require("./routes/api/friends");

const app = express();

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

app.get("/news", newsRouter);
app.get("/friends", friendsRouter);

app.use((_, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, _, res, __) => {
  const { status = 500, message = "Server error" } = err;
  res.status(status).json({ message });
});

module.exports = app;
