const _ = require('lodash'),
    passport = require('passport'),
    LocalStrategy = require('passport-local').Strategy;
const request = require('request');

//My strategy auth process, here I check whether the user exist or not, check the password.
//and control the login process

passport.use('local', new LocalStrategy(function (username, password, done) {
    request.post("http://www.mocky.io/v2/5808862710000087232b75ac", function(err, res, body) {
        if (!err && res.statusCode === 200) {
            processUser(body, username, password, function(err, user) {
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
function processUser(users,username, password, callback) {
    //If the pass is 1234 your user will pass
    if (password == 1234) {
        // process input
        let usersParsed = JSON.parse(users);
        let user = _.find(usersParsed.clients, {'email': username});
        console.log("user found ", user);
        callback(null, user);
    }
    else{
        callback("Wrong password");
    }

}