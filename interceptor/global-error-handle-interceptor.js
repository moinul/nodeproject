/**
 * Created by moinul on 6/15/2014.
 */

module.exports = function (app, config) {

    var globalErrorHandler = function (err, req, res, next) {

        var stackTrace = (config.get('env') == 'development') ? err : {};
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: stackTrace
        });
    }
    app.use(globalErrorHandler);

};
