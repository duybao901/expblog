const Course = require('../model/Course');
const { mutipleMongooseToObject } = require('../../util/mongoose');
class SiteController {
    // [GET] /home
    index(req, res) {
        Course.find({})
            .then((courses) => {
                courses = mutipleMongooseToObject(courses);
                res.render('home', { courses });
            })
            .catch((err) => next(err));
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
