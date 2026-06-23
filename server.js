const express = require ("express");
const cors = require("cors");
const app = express();
const userRoutes = require("./routes/userRoutes");
const jobRoutes = require("./routes/jobRoutes");
const appRoutes = require("./routes/appRoutes");
const connectDB = require("./config/db");
connectDB();
app.use(cors());
app.use(express.json());
app.listen(5000, ()=>{
console.log("server running")
});
app.use("/api/user",userRoutes);
app.use("/api/job",jobRoutes);
app.use("/api/application",appRoutes);