import express from "express";
import authMiddleware from "../middleware/auth.js"
import { allOrders, placeOrder, placeOrderRazorPay, updateStaus, userOrders, verifyRpay } from "../controllers/orderController.js";
import adminAuth from "../middleware/adminAuth.js";

const orderRouter = express.Router();

// Admin Features
orderRouter.post("/list",adminAuth,allOrders)
orderRouter.post("/status",adminAuth,updateStaus)

// payment gateway
orderRouter.post("/place",authMiddleware,placeOrder)
orderRouter.post("/razorpay",authMiddleware,placeOrderRazorPay)

// user features
orderRouter.post("/userOrders",authMiddleware,userOrders)

// verify Payments
orderRouter.post ("/verifyRpay",authMiddleware,verifyRpay)

export default orderRouter