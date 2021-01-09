require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const db = require("./db");

const app = express();

const port = process.env.PORT || "4000";

app.use(express.json());

// fetching all restaurants
app.get("/restaurants/api/get-all", async (req, res) => {
  const result = await db.query("SELECT * FROM restaurants");

  res.status(200);
  res.json({
    status: "success",
    results: result.rows.length,
    data: {
      restaurants: result.rows,
    },
  });
});

// get single restaurant
app.get("/restaurants/api/get-single-restaurant/:id", async (req, res) => {
  const { id } = req.params;
  const result = await db.query("SELECT * FROM restaurants WHERE id=$1", [id]);
  res.status(200).json({
    status: "success",
    data: {
      restaurant:
        result.rows.length !== 0
          ? result.rows
          : "No restaurant with that id found",
    },
  });
});

// create restaurant
app.post("/restaurants/api/create", async (req, res) => {
  const { name, location, price_range: priceRange } = await req.body;

  try {
    const result = await db.query(
      "INSERT INTO restaurants(name, location, price_range) VALUES($1, $2, $3) returning *",
      [name, location, priceRange]
    );
    res.status(201).json({
      status: "success",
      data: {
        restaurant: result.rows,
      },
    });
  } catch (err) {
    console.log(err);
    res.json({
      status: "Failed to insert into database",
    });
  }
});

// update restaurant
app.put("/restaurants/api/update/:id", async (req, res) => {
  const { name, location, price_range: priceRange } = await req.body;
  const { id } = req.params;
  try {
    const result = await db.query(
      "UPDATE restaurants SET name=$1, location=$2, price_range=$3 WHERE id=$4 returning *",
      [name, location, priceRange, id]
    );
    res.status(201).json({
      status: "success",
      data: {
        restaurant: result.rows,
      },
    });
  } catch (err) {
    console.log(err);
  }
});

// delete restaurant
app.delete("/restaurants/api/delete/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const result = await db.query("DELETE FROM restaurants WHERE id=$1", [id]);
    res.status(204).json({
      status: "success",
      data: { restaurant: result.rows },
    });
  } catch (err) {
    console.log(err);
  }
});

app.listen(port, (err) => {
  if (err) console.log(err);
  else console.log(`Server started on port ${port}`);
});
