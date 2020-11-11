const express = require('express');
const router = express.Router();

const newsController = require('../app/controllers/newsController');

// [GET] /news -> app.use('/news')
router.get('/', newsController.index);

module.exports = router;
