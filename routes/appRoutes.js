const {getApplications,
    getApplicationById,
    submitApplication} = require("../controllers/appController");
const express = require("express");
const router = express.Router();
router.get("/",getApplications);
router.get("/:id",getApplicationById);
router.post("/",submitApplication);
module.exports = router;
