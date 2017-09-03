module.exports = function(req, res, next) {
    //Middleware to check whether the user is authenticated or not
    if (req.isAuthenticated()) {
        next();
    } else {
        res.redirect('/login');
    }

};