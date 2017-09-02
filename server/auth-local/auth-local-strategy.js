const _ = require('lodash'),
    passport = require('passport'),
    LocalStrategy = require('passport-local').Strategy,
    usersStore = require('./auth-local-users');
const request = require('request');

passport.use('local', new LocalStrategy(function (username, password, done) {
    request.post("http://www.mocky.io/v2/5808862710000087232b75ac", function(err, res, body) {
        if (!err && res.statusCode === 200) {
            console.log('Responsed 200');
            processUser(body, username, function(err, user) {
                if (user) {
                    done(null, user);
                } else {
                    done(null, false, 'Incorrect email or password');
                }
            });
        }
        else{
            done(null, false, 'Server error');
        }
    });
}));

// //Helper to filter the user
function processUser(users,username, callback) {
    // process input
    let usersParsed = JSON.parse(users);
    // console.log("my input is ", test.clients);
    let user = _.find(usersParsed.clients, {'email': username});
    console.log("user found ", user);
    callback(null, user);
}