import mongoose from "mongoose";

const cartShema = new mongoose.Schema({
    products: [
      {
        item: { type: mongoose.Schema.Types.ObjectId, ref: "products" },
        quantity: { type: Number, default: 1 },
      },
    ],
  });
  
  export const cartModel = mongoose.model("carts", cartShema);
  