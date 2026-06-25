const Job = require("../models/job");
const createJob = async (req,res)=>{
    const{title,description,salary,company,skillsRequired,createdBy}=req.body;
    const job = await Job.create({
        title,
        description,
        company,
        skillsRequired,
        salary,
        createdBy
    })
    res.json(job);
}
const getJobs = async(req,res)=>{
    const jobs = await Job.find();
    res.json(jobs)
}
const getJobById = async(req,res)=>{
    const jobById = await Job.findById(req.params.id);
    res.json(jobById)
}
module.exports ={ createJob,getJobById,getJobs};