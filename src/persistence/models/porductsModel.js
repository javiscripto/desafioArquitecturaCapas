import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    products:[
        {
            item: { type: mongoose.Schema.Types.ObjectId, ref: "products" },
            quantity: { type: Number, default: 1 },
          },
    ]
})
const ProductMOdel = mongoose.model("products",productSchema);
export default ProductMOdel;
