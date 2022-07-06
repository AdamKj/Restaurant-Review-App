import express from "express";
import cors from "cors";
import restaurants from "./api/restaurants.route.js";

const app = express();

//MIDDLEWARE
app.use(cors());
app.use(express.json());
app.get("/api/restaurants", restaurants);
app.use("*", (req, res) => res.status(404).json({ error: "Not Found" }));

export default app;
