const express = require("express");
const router = express.Router();
const {createUser,
 getUsers,getUsersById} = require("../controllers/userController");
router.post("/",createUser);
router.get("/",getUsers);
router.get("/:id",getUsersById);
module.exports = router;