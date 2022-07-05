import app from "./server.js";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const port = process.env.PORT || 8000;

mongoose
  .connect(process.env.DB_CONNECTION_URI, {
    maxPoolSize: 50,
    wtimeoutMS: 2500,
    useNewUrlParser: true,
  })
  .catch((err) => {
    console.error(err.stack);
    process.exit(1);
  })
  .then(async (client) => {
    app.listen(port, () => {
      console.log(`Listening on port ${port}`);
    });
  });
