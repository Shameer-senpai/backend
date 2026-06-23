const Application = require("../models/app");
const submitApplication = async (req,res) => {
    const{jobId,applicantId,resume}=req.body;
    const applicationObj = await Application.create(
        {
         jobId,
         applicantId,
         resume,
        }
    )
    res.json(applicationObj);
}
const getApplications = async (req,res) => {
    const jobData = await Application.find();
    res.json(jobData);
}
const getApplicationById = async (req,res) => {
    const jobDataById = await Application.findById(req.params.id);
    res.json(jobDataById);
}
module.exports = {getApplications,
    getApplicationById,
 submitApplication};