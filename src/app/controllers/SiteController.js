const Course = require('../models/Course');
const { mutipleMongooseToObject } = require('../../util/mogoose');
class SiteController {
    // [GET] /
    home(req, res, next) {
        // Mongoose supports both promises and callbacks
        Course.find({})
            .then((courses) => {
                res.render('home', {
                    courses: mutipleMongooseToObject(courses),
                });
            })
            .catch(next);
    }

    // [GET] /search
    search(req, res) {
        res.render("search");
    }
}

module.exports = new SiteController();
