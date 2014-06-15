/**
 * Created by moinul on 6/15/2014.
 */
module.exports = function (app, fs) {
    /* app.use('/',require('./routers/index'));
     app.use('/users',require('./routers/users'));*/
    fs.readdirSync(__dirname).forEach(function (file) {
        if (file.indexOf('.js')) {
            var name = file.substr(0, file.indexOf('.'));
            if (name == 'index')
                app.use('/', require('./' + name));
            app.use('/' + name, require('./' + name));
            //require('./' + name)(app);
        }

    });
};
