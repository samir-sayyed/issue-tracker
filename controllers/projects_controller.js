const Project = require('../models/projects')


//controller for create project page
module.exports.createProjectPage = function(req, res){
    res.render('create_project',{
        title:"create-project"
    })
}
 
module.exports.createNewProject = function(req, res){ 
    console.log(req.body);
    Project.create(req.body, function(err, project){
        if(err){console.log("error in creating project", err); return}

        return res.redirect('/')
    });
};

// module.exports.projects = function(req, res){
//     return res.render('project_details',{
//         title: "Project"
//     });
// }