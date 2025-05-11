
import express from "express";    //route define krne k liye express ko import krnge
import { getBook } from "../controller/book.controller.js";

const router = express.Router()

router.get("/",getBook);

export default router;