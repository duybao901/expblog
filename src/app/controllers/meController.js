const Course = require('../model/Course');
const { mutipleMongooseToObject } = require('../../util/mongoose');

class MeController {
    stored(req, res, next) {
        Course.find({})
            .then((courses) => {
                res.render('me', {
                    courses: mutipleMongooseToObject(courses),
                });
            })
            .catch(next);
    }
}

module.exports = new MeController();
