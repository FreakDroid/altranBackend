var passport = require('passport');
var ConnectRoles = require('connect-roles');

module.exports = {

    initialize: function(app) {
        app.use(passport.initialize());
        app.use(passport.session());

        require('./auth-local-strategy');
        require('./auth-local-serialization');
        const user = require('./connect-roles');

        app.use(user.middleware());
    },

    isAuth: require('./auth-local-middleware'),

    router: require('./auth-local-routes')

};