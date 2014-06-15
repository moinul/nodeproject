/**
 * Created by moinul on 6/15/2014.
 */
module.exports = function (app) {

    /// catch 404 and forward to error handler
    var notFound = function (req, res, next) {
        var err = new Error('Not Found');
        err.status = 404;
        next(err);
        // res.render('404')
    };
    app.use(notFound);
};
