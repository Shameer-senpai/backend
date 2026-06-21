const User = require("../models/user");

const createUser = async(req,res)=>{

   const {name,age} = req.body;

   const user = await User.create({
      name,
      age
   });

   res.send(user);
}
const getUsers = async(req,res) => {
    const users = await User.find();
    res.json(users)
}
module.exports = createUser;
module.exports = getUser;