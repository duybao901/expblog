const newsRouter = require('./new');
const siteRouter = require('./site');
const coursesRouter = require('./course');
const meRouter = require('./me');

function route(app) {
    // Cấu hình nhiều tuyến đường cho /news
    app.use('/news', newsRouter);
    app.use('/course', coursesRouter);
    app.use('/me', meRouter);
    app.use('/', siteRouter);
}

module.exports = route;
