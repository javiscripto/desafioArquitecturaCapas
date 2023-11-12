import mongoose from "mongoose"

//set mongoose connection
main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test', { useNewUrlParser: true, useUnifiedTopology: true });
  console.log("Connected to the database");
}