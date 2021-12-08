const express = require('express');
const router = express.Router();
const projectController = require('../controllers/projects_controller');

// route for create project page
router.get('/create_project', projectController.createProjectPage);

//route for creating new project
router.post('/create', projectController.createNewProject);

//router.get('/projects', projectController.projects);

module.exports = router;