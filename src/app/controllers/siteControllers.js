class SiteController {
    // [GET] /home
    index(req, res) {
        res.render('home');
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
