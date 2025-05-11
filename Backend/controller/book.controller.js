//controller me funcytion ko create kiyajata h for functionalities
import Book from  "../model/book.model.js"

export  const getBook = async(req,res)=>{
try{                                  // database se connect hone pai yadi koi error aata hai to usko handle krega try catch           
    const book = await Book.find()  //Book naam ka model se data find kr rha h  //async await ka use krte h kyunki database me data fetch and send krne mai time lagta hai to tbtk function run na ho data aane k baad function run hoga with 200 port k saath
    res.status(200).json(book)   //json form me data send krdenge book   //200 status code hota h success ka
} catch (error){
    console.log("Error:",error)
    res.status(500).json(error)  //500  status code hota hai internal server error k liye
}
};