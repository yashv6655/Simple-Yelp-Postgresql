require("dotenv").config();
const express = require("express");
const morgan = require("morgan");

const app = express();

const port = process.env.PORT || "4000";

app.use(morgan("tiny"));

// fetching all restaurants
app.get("/restaurants/api/get-all", (req, res) => {
  res.status(200);
  res.json({
    data: {
      restaurants: "all the restaurants",
    },
  });
});

app.get("/restaurants/api/get-single-restaurant/:id", (req, res) => {
  console.log(res);
});

app.post("/restaurants/api/create-restaurant", (req, res) => {
  console.log(req);
});

app.listen(port, (err) => {
  if (err) console.log(err);
  else console.log(`Server started on port ${port}`);
});
