const mongoose = require ("mongoose");
const appSchema = new mongoose.Schema({
    jobId:{
      type:mongoose.Schema.Types.ObjectId,
      ref:"Job",
       required:true
    },
    applicantId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    resume:{
        type:String,
        required:true,
         required:true
    },
    status:{
        type:String,
        enum:["Pending","Reviewing","Shortlisted","Rejected","Accepted"],
        default:"Pending",
         required:true
    }
},
{
    timestamps:true
});
const Application = mongoose.model("Application",appSchema);
module.exports = Application;