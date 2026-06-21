const createJob = require("../controllers/jobController");
const router = express.Router();
const express = require("express");
router.post("/",createJob);