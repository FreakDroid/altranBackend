var passport = require('passport');

passport.serializeUser(function (userJson, done) {
    done(null, JSON.stringify(userJson));
});

passport.deserializeUser(function (userString, done) {
    done(null, JSON.parse(userString));
});