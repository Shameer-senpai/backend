const mongoose = require ("mongoose");
const appSchema = new mongoose.Schema({
    jobId:{

    },
    appId:{},
    candidateId:{},
    resume:{},
    status:{}
});
const App = new mongoose.model("App",appSchema);
module.exports = App;