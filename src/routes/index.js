const newsRouter = require('./new');
const siteRouter = require('./site');
const coursesRouter = require('./course');

function route(app) {
    // Cấu hình nhiều tuyến đường cho /news
    app.use('/news', newsRouter);
    app.use('/course', coursesRouter);
    app.use('/', siteRouter);
}

module.exports = route;
