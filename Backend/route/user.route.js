import express from "express";  //route define krne k liye eexpress ko import krte h
import { login, signup } from "../controller/user.controller.js";

const router = express.Router()

 router.post("/signup",signup);   //signup pe click krne pr signup wala functio run hoga jo controller me define h.
 router.post("/login",login);
export default router; 