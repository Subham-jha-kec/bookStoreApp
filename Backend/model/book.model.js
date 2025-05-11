import mongoose from "mongoose";

const bookSchema=mongoose.Schema({
    name:String,
    price:Number,
    category:String,
    image:String,
    title:String
})
const Book = mongoose.model("Book",bookSchema);    // ish code me bookSchema k jis bhi field me data ayega wo database me  (Book) collectio me jaake store hoga. 

export default Book;