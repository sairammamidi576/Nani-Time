import express from "express";
import { addProduct, listProduct, removeProduct, singleProduct, updateProduct} from "../controllers/productControllers.js";
import multer from "multer";
import adminAuth from "../middleware/adminAuth.js";

const productRouter = express.Router()

// image storage
const storage = multer.diskStorage({
    destination: "uploads",
    filename: (req, file,cb)=>{
        return cb(null, `${Date.now()}${file.originalname}`)
    }

})

const upload = multer({storage:storage})

productRouter.post("/add", adminAuth, upload.single("image"), addProduct)
productRouter.post("/remove", adminAuth, removeProduct)
productRouter.get("/list", listProduct)
productRouter.get("/list/:id", singleProduct)
productRouter.put("/update/:id", updateProduct)

export default productRouter