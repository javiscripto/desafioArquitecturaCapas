import express from "express";
import config from "../config/config.js";

const app = express();
const port = process.env.PORT;

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get("/", (req, res)=>{
    res.send("funcionando")
})




app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
