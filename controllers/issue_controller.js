const Issue = require('../models/issues');
const Project = require('../models/projects');

//module for redirecting create issue page

module.exports.issuePage = function(req, res){
    let id = req.params.id;

    // finding the project by id  send project details in response to create issue page
    Project.findById(id).populate('issues').exec(
        function(err, project){
            return res.render('create_issue',{
                title: "Add Issue",
                project: project
            });
        })

}

    // finding the project by id  and storing its issues in db
module.exports.createIssue = function(req, res){
    let id =  req.body.projectID;
    Project.findById(id, function(err, project){
            // console.log("hi")
            if(project){
                Issue.create({  //create issue
                    issueName: req.body.issueName,
                    issueDescription: req.body.issueDescription,
                    lable: req.body.lable.substr(1).split("^"), // storing lables in the form of array
                    issueAuthor: req.body.issueAuthor,
                    projectID:req.body.projectID
                }, function(err, issue){
                    project.issues.push(issue); //pushing issue in project schema
                    project.save();
                });
            }
    })

    return res.redirect(`/projects/projects_details/${id}`); // redirecting to project details page
}

