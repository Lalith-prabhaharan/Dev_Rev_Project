import express from "express";
import { addBook, getmyBook } from "../controller/booking.js";
const router=express.Router();
router.post("/booking",addBook);
router.get  ("/get",getmyBook);
export default router