import mongoose from "mongoose"
import multer from "multer"

const productSchema = new mongoose.Schema({
    name : {type: String, required: true},
    description : {type: String, required: true},
    price: {type: Number, required: true},
    image: {type: String, required: true},
    category: {type: String, required: true}
})

const productModel = mongoose.models.Product || mongoose.model("Product", productSchema)

export default productModel