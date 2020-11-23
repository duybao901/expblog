const Course = require('../model/Course');
const { mutipleMongooseToObject } = require('../../util/mongoose');

class MeController {
    storedCourses(req, res, next) {
        let coureQuery = Course.find({});

        if (req.query.hasOwnProperty('_sort')) {
            coureQuery.sort({
                [req.query.column]: req.query.type,
            });
        }
        // Vì 2 thằng này chạy song song
        Promise.all([coureQuery, Course.countDeleted({})])
            .then(([courses, countDeleted]) => {
                res.render('me/stored-course', {
                    countDeleted,
                    courses: mutipleMongooseToObject(courses),
                });
            })
            .catch(next);
    }

    trashCourses(req, res, next) {
        Course.findDeleted({})
            .then((courses) => {
                res.render('me/trash-course', {
                    courses: mutipleMongooseToObject(courses),
                });
            })
            .catch(next);
    }
}

module.exports = new MeController();
