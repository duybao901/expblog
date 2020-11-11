const Course = require('../model/Course');

class SiteController {
    // [GET] /home
    index(req, res) {
        Course.find({}, (err, courses) => {
            if (!err) {
                res.json(courses);
            } else {
                res.status(500).json({ err: err });
            }
            console.log('data:', courses);
        });
    }
    // [GET] /search
    getSearch(req, res) {
        res.render('search');
    }
    // [POST] /search
    postSearch(req, res) {
        console.log(req.body);
        res.render('search');
    }
    // [GET] /about
    about(req, res) {
        res.render('about');
    }
}

module.exports = new SiteController();
