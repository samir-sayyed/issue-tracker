const Project = require('../models/projects');
const Issue = require('../models/issues');


//for creating new project
module.exports.createNewProject = function(req, res){ 
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
    let id = req.params.id;
    Project.findById(id).populate('issues').exec( //populating issues so we can use them in a front end
        function(err, project){
            //console.log(project);
            return res.render('project_details',{
                title: "Project Details",
                project: project
            });
        })
}



