const { createJob,getJobById,getJobs}= require("../controllers/jobController");
const express = require("express");
const router = express.Router();
router.post("/",createJob);
router.get("/:id",getJobById);
router.get("/",getJobs);
module.exports = router;

