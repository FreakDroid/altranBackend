var passport = require('passport');

module.exports = {

    initialize: function(app) {
        app.use(passport.initialize());
        app.use(passport.session());

        require('./auth-local-strategy');
        require('./auth-local-serialization');
    },

    isAuth: require('./auth-local-middleware'),

    router: require('./auth-local-routes')

};