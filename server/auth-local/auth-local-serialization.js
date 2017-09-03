var passport = require('passport');

//Methods neccessaries to serialize and deserialize the User logged in
//This methods are for passaport

passport.serializeUser(function (userJson, done) {
    done(null, JSON.stringify(userJson));
});

passport.deserializeUser(function (userString, done) {
    done(null, JSON.parse(userString));
});