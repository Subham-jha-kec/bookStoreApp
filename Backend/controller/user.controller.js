//controller me hum function define krte h
import User from "../model/user.model.js";
import bcryptjs from "bcryptjs";
export const signup=async(req,res)=>{
try {
    const {fullName,email,password}=req.body;   //data ko body se le raha hai
    const user = await User.findOne({email});      //email se check krnge jo user phle se User database mai h ya nhi yadi h to message print hoga nhi to user create hoga
    if(user){  //yadi user phle se hai
        return res.status(400).json({message:"User already exists"})
    }
const hashPassword = await bcryptjs.hash(password,10) 
    const createdUser = new User({   //User yaha model ka name h jisme hum data ko store karwange
        fullName: fullName,
        email: email,
        password: hashPassword
    });
   await createdUser.save()  //User database me details save ho jyega
    res.status(201).json({message:"User created successfully", user:{
        _id:createdUser._id,
        fullName:createdUser.fullName,
        email:createdUser.email,
    },
}); //and ye message print ho jyega console me

} catch (error) {
    // console.log("Error:" + error.message )
    console.error("Signup Error:", error);

    res.status(500).json({message:"Internal server error"})
}
}
export const login = async(req,res)=>{
    try {
        const {email,password}=req.body;
        const user = await User.findOne({email});
        const isMatch = await bcryptjs.compare(password,user.password)
        if(!user ||  !isMatch){
            return res.status(400).json({message:"Invalid  username or password"});
        }
        else{
            res.status(200).json({message:"Login successful",user:{
                _id:user._id,
                fullName:user.fullName,
                email:user.email
            }})
        }
    } catch (error) {
        console.log("Error: "+ error.message);
        res.status(500).json({message:"Internal server error"});
    }
};


// export const login = async (req, res) => {
//     try {
//         const { email, password } = req.body;
//         const user = await User.findOne({ email });

//         if (!user) {
//             return res.status(400).json({ message: "Invalid username or password" });
//         }

//         const isMatch = await bcryptjs.compare(password, user.password);
//         if (!isMatch) {
//             return res.status(400).json({ message: "Invalid username or password" });
//         }

//         // console.log("Login successful");

//         res.status(200).json({
//             message: "Login successful",
//             user: {
//                 _id: user._id,
//                 fullName: user.fullName,
//                 email: user.email
//             }
//         });
//     } catch (error) {
//         console.error("Login Error:", error.message);
//         res.status(500).json({ message: "Internal server error" });
//     }
// };
