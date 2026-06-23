const { createJob,getJobById,getJobs}= require("../controllers/jobController");
const router = express.Router();
const express = require("express");
router.post("/",createJob);
router.get("/:id",getJobById);
router.get("/",getJobs);
module.exports = router;

