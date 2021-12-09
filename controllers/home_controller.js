const Projects = require('../models/projects');

module.exports.home = function(req, res){

    Projects.find({}, function(err, projects){
        return res.render('home',{
            title: "Home",
            projects: projects
        });
    })
}