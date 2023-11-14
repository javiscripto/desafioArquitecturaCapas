import express from "express";

import handlebars from "express-handlebars";
import mongoose from "mongoose"

import path from "path";



import { fileURLToPath } from 'url';
import { dirname } from 'path';
import config from "../config/config.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);



const app = express();
const port = config.PORT;



main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(config.mongoURL, { useNewUrlParser: true, useUnifiedTopology: true });
  console.log("Connected to the database");
  
}



//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));


//set handlebars
app.engine("handlebars", handlebars.engine());
app.set("view engine","handlebars")
app.set("views",__dirname+`/views`);

// routes

import cartRouter from "./routes/carts.router.js";
import productRouter from "./routes/products.router.js";

app.use("/api/products", productRouter);
app.use("/api/carts", cartRouter);



app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
