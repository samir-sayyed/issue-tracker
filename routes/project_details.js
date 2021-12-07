const express = require('express');
const router = express.Router();
const projectController = require('../controllers/projects_controller');


router.get('/projects', projectController.projects);

module.exports = router;