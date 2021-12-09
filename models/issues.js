const mongoose = require('mongoose');

// creating schema for project

const issueSchema = new mongoose.Schema({

    issueName : {
        type: String ,
        required : true ,
        unique : true ,
    },
    issueDescription :{
        type :String ,
        max : 200,
    },
    lable:[{
            type: String
        }],
    issueAuthor :{
        type:String,
        required :true 
    }   
},{
    timestamps: true
});


const Issue = mongoose.model('issues', issueSchema);
module.exports = Issue;