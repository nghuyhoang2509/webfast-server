import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

import page from "./router/page.js";
import mongoose from "mongoose";

const app = express();
const PORT = process.env.port || 5000;
const URI = process.env.URIMONGODB;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true, limit: "30mb" }));
app.use(cors());

app.use("/page", page);
mongoose.set("strictQuery", false);
mongoose
  .connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("mongodb success");
    app.listen(PORT, () => {
      console.log(`server is running in port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
