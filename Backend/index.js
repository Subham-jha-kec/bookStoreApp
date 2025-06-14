import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import bookRoute from "./route/book.route.js"
import userRoute from "./route/user.route.js"
const app = express();
app.use(cors());

app.use(express.json());        //jo data hum body se bhej rahe h usko json me parse karega




dotenv.config();
const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURI;
try{
  mongoose.connect(URI)
  .then(() => console.log("Connected to mongoDB"))
  .catch((error) => console.log("MongoDB connection error:", error));

    console.log("Connected to mongoDB");
    }catch  (error){
    console.log("Error:",error);
    }

    //defining routes
app.use("/book", bookRoute)         //it means if url  start from (/book) then send it to bookRoute  or / if start from /user then send to user route
app.use("/user",userRoute)       

// connect to mongodb
// mongodb://localhost:27017/

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})



