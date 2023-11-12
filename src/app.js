import express from "express";
import config from "../config/config.js";
import mongoConection from "./persistence/mongoConection.js";



const app = express();
const port = config.PORT||8080;

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));







app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
