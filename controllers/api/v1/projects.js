const Project = require('../../../models/projects');

        module.exports.project = async function(req, res){
          
            let ptojects = await Project.find({})
           .populate('issues')

                return res.json(200, {
                    message: "List of projects",
                    ptojects: ptojects
                })
        }

