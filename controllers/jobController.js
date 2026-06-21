const App = requires ("../models/job");
const createJob = async (req,res)=>{
    const{title,description,salary,company,skillsRequired}=req.body;
    const job = await Job.create({
        title,
        description,
        company,
        skillsRequired,
        salary
    })
    res.send(createJob);
}
module.exports = createJob;