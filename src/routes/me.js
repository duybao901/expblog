const express = require('express');
const router = express.Router();

const meController = require('../app/controllers/meController');

router.get('/stored/course', meController.stored);

module.exports = router;
