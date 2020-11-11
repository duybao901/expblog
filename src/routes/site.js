const express = require('express');
const router = express.Router();

const siteController = require('../app/controllers/siteControllers');

//! Lưu ý phải để thằng '/' dưới cùng vì nó sẽ tìm từ trên xuống ko match thì match vs thằng '/'
router.get('/search', siteController.getSearch); // Search
router.post('/search', siteController.postSearch);
router.get('/about', siteController.about);
router.get('/', siteController.index); // Home

module.exports = router;
