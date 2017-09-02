var express = require('express');
var router = express.Router();
const serverUtil = require('./serverUtil/serverUtil');


router.get('/', function (req, res) {
    res.render('partials/home');
});

router.get('/admin', function(req, res) {
    res.render('partials/admin', {user: req.user});
});

//Search by id
router.get('/user/id/:id', function(req, res) {
    serverUtil.getUserById(req.params.id).then(success =>{
        console.log('testing', success);
        res.render('partials/users/user', {user: success});
    }).catch(err =>{
        res.render('partials/users/user', {error: err});
    });
});

//Search by name
router.get('/user/name/:name', function(req, res) {
    serverUtil.getUserByName(req.params.name).then(success =>{
        console.log('testing', success);
        res.render('partials/users/user', {user: success});
    }).catch(err =>{
        res.render('partials/users/user', {error: err});
    });
});

//Search by Policies name
router.get('/policies/name/:name', function(req, res) {
    console.log("Im on the route");

    //First I'm looking for the user, by the name provided
    serverUtil.getUserByName(req.params.name).then(success =>{
        //user found!!!!
        console.log('testing', success);
        return success
    }).then(user =>{
        //Im gonna look for the polices
        serverUtil.getPoliciesByUserId(user.id).then(polices =>{
            console.log("polices in route ", polices);
            res.render('partials/policies/policies', {policies: polices});  
        }).catch(err =>{
            res.render('partials/policies/policies', {error: err});
        })
    }).catch(err =>{
        res.render('partials/policies/policies', {error: err});
    });
});

//Search by User Name by policeID
router.get('/user/policeId/:id', function(req, res) {
    console.log("Im on the route /policies/id/:id", req.user);

    //First I'm looking for the user, by the name provided
    serverUtil.getUserByPolicieId(req.params.id).then(success =>{
        //user found!!!!
        console.log('testing', success);
        return success
    }).then(police =>{
        //Im gonna look for the polices
        serverUtil.getUserById(police.clientId).then(user =>{
            console.log("user found", user);
            res.render('partials/users/user', {user: user});  
        }).catch(err =>{
            res.render('partials/users/user', {error: err});
        })
    }).catch(err =>{
        res.render('partials/users/user', {error: err});
    });
});


module.exports = router;