require("dotenv").config();
const express = require("express");
const morgan = require("morgan");

const app = express();

const port = process.env.PORT || "4000";

app.use(express.json());

// fetching all restaurants
app.get("/restaurants/api/get-all", (req, res) => {
  res.status(200);
  res.json({
    data: {
      restaurants: "all the restaurants",
    },
  });
});

// get single restaurant
app.get("/restaurants/api/get-single-restaurant/:id", (req, res) => {
  console.log(res);
  res.status(200).json({
    status: "success",
    data: {
      restaurant: "Single restaurant",
    },
  });
});

// create restaurant
app.post("/restaurants/api/create", (req, res) => {
  console.log(res);
  res.status(201).json({
    status: "success",
    data: {
      restaurant: "Create restaurant",
    },
  });
});

// update restaurant
app.put("/restaurants/api/update/:id", (req, res) => {
  console.log(res);
  res.status(201).json({
    status: "success",
    data: {
      restaurant: "Update restaurant",
    },
  });
});

app.delete("/restaurants/api/delete/:id", (req, res) => {
  res.status(204).json({
    status: "Delete restaruatn",
  });
});

app.listen(port, (err) => {
  if (err) console.log(err);
  else console.log(`Server started on port ${port}`);
});
