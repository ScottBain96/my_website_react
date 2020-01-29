const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const jobSchema = new Schema ({

    username: {type: String, required: true},
    description: {type: String, required: true},
    duration: {type: Number, required: true},
    date: {type: Date, required: true},
        
       
   
}, {
    timestamps: true,
});

const Job = mongoose.model('Job', jobSchema);

module.exports = Job;