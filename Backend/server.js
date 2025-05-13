import express from "express";
import userRoutes from './routes/user.route.js';  // Importing routes

const app = express();
app.use(express.json());  // to parse incoming JSON request bodies

app.use('/api/users', userRoutes);  // All user-related routes

app.listen(5000, () => {
  console.log("Server is running on http://localhost:5000");
});
