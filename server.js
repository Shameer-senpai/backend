const express = require ("express");
const cors = require("cors");
const app = express();
const userRoutes = require("./routes/userRoutes")
const connectDB = require("./config/db");
connectDB();
app.use(cors());
app.use(express.json());
app.listen(5000, ()=>{
console.log("server running")
});
app.use("/api/user",userRoutes);