const Issue = require('../models/issues');

//module for redirecting create issue page

module.exports.issuePage = function(req, res){
    res.render('create_issue',{
        title: "Add Issue"
    });
}


module.exports.createIssue = function(req, res){
    console.log(req.body);
    Issue.create(req.body, function(err, Issue){
        if(err){console.log("error in creating project", err); return}
    });

    return res.redirect('/projects/projects_details')
}