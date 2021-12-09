const Project = require('../models/projects');
const Projects = require('../models/issues');


//for creating new project
module.exports.createNewProject = function(req, res){ 
    console.log(req.body);
    Project.create(req.body, function(err, project){
        if(err){console.log("error in creating project", err); return}

        return res.redirect('/')
    });
};



//controller for rendering create project page
module.exports.createProjectPage = function(req, res){
    res.render('create_project',{
        title:"create-project"
    })
}
 

//controller for rendering project details page
module.exports.project_details = function(req, res){
    Projects.find({}, function(err, issues){
        return res.render('project_details',{
            title: "Project Details",
            issues: issues
        });
    })
}



