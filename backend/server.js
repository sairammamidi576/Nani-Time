import express from "express"
import cors from "cors"
import mongoose from "mongoose"
import dotEnv from "dotenv"
import bodyParser from "body-parser"
import productRouter from "./routes/productRoutes.js"
import userModel from "./models/UserModel.js"
import userRouter from "./routes/userRoute.js"
import cartRouter from "./routes/cartRoute.js"
import orderRouter from "./routes/orderRoute.js"

// app config
const app = express()
dotEnv.config()
const port = process.env.PORT || 2000

// middleware
app.use(express.json())
app.use(cors())


mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log("db connected")).catch((error)=>console.error(`${error}`))

// api endpoints
app.use("/products", productRouter)
app.use("/images", express.static("uploads"))
app.use("/user", userRouter)
app.use("/cart",cartRouter)
app.use("/order",orderRouter)


app.listen(port,()=>{
    console.log(`server running at ${port}`);
})