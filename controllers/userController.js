const User = require("../models/user");

const createUser = async(req,res)=>{

   const {name,age} = req.body;

   const user = await User.create({
      name,
      age
   });

   res.json(user);
}
const getUsers = async(req,res) => {
    const users = await User.find();
    res.json(users)
}
const getUsersById = async(req,res)=>{
    const usersById = await User.findById();
    res.json(usersById)
}
module.exports = {createUser,
 getUsers,getUsersById};