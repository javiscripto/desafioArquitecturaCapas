import express from "express";
import config from "../config/config.js";
import handlebars from "express-handlebars";
import mongoConection from "./persistence/mongoConection.js";//solo realizo la importacion 
import path from "path";


import { fileURLToPath } from 'url';
import { dirname } from 'path';


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);



const app = express();
const port =  config.PORT;

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));


//set handlebars
app.engine("handlebars", handlebars.engine());
app.set("view engine","handlebars")
app.set("views",__dirname+`/views`);





app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
