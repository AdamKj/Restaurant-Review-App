import express from "express";
import cors from "cors";
import restaurants from "./api/restaurants.route.js";

const app = express();

//MIDDLEWARE
app.use(cors());
app.use(express.json());
app.use("/api/restaurants", restaurants);
app.use("*", (req, res) => res.status(404).json({ message: "Not Found" }));

export default app;
