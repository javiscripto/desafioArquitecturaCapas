import mongoose from "mongoose";
import config from "../../config/config.js";

//set mongoose connection
main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(config.mongoURL||"mongodb://127.0.0.1:27017/test", { useNewUrlParser: true, useUnifiedTopology: true });
  console.log("Connected to the database");
  
}
//