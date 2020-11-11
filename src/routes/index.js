const newsRouter = require('./new');
const siteRouter = require('./site');
function route(app) {
    // Cấu hình nhiều tuyến đường cho /news
    app.use('/news', newsRouter);
    app.use('/', siteRouter);
}

module.exports = route;
