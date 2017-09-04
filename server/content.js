var express = require('express');
var router = express.Router();
const serverUtil = require('./serverUtil/serverUtil');

//Routes after you are logged in
router.get('/', function (req, res) {
    res.render('partials/home');
});

router.get('/home', function(req, res) {
    res.render('partials/home', {user: req.user});
});


//Search by id
router.get('/user/id/:id', function(req, res) {
    serverUtil.getUserById(req.params.id).then(success =>{
        res.render('partials/users/user', {user: success});
    }).catch(err =>{
        res.render('partials/users/user', {error: err});
    });
});


router.get('/userSearcher', function(req, res) {
    res.render('partials/users/userSearcher', {user: req.user});
});

router.post('/userSearcher', function(req, res) {
    
    let userId = req.body.userid;
    let name = req.body.username;

    //How I'm using the same page to both search, I check the param in the body
    //Depending on which one is, I redirect to the correct page
    if(userId){ 
        res.redirect('/user/id/' + userId);
    }
    else{
        res.redirect('/user/name/' + name);
    }
});


router.get('/policiesSearcher', function(req, res) {
    res.render('partials/policies/policiesSearcher', {user: req.user});
});

router.post('/policiesSearcher', function(req, res) {
    
    let policyNumber = req.body.policyNumber;
    let name = req.body.username;

    //How I'm using the same page to both search, I check the param in the body
    //Depending on which one is, I redirect to the correct page
    if(policyNumber){ 
        res.redirect('/user/policeId/' + policyNumber);
    }
    else{
        res.redirect('/policies/name/' + name);
    }
});

//Search by name
router.get('/user/name/:name', function(req, res) {
    serverUtil.getUserByName(req.params.name).then(success =>{
        res.render('partials/users/user', {user: success});
    }).catch(err =>{
        res.render('partials/users/user', {error: err});
    });
});

//Search by Policies name
router.get('/policies/name/:name', function(req, res) {
    //First I'm looking for the user, by the name provided
    serverUtil.getUserByName(req.params.name).then(success =>{
        //user found!!!!
        return success
    }).then(user =>{
        //Im gonna look for the polices
        serverUtil.getPoliciesByUserId(user.id).then(polices =>{
            res.render('partials/policies/policies', {policies: polices, user:user});  
        }).catch(err =>{
            res.render('partials/policies/policies', {error: err});
        })
    }).catch(err =>{
        res.render('partials/policies/policies', {error: err});
    });
});

//Search by User Name by policeID
router.get('/user/policeId/:id', function(req, res) {


    if(req.user.role.toLowerCase() === 'admin'){
        //First I'm looking for the user, by the name provided
        serverUtil.getUserByPolicieId(req.params.id).then(success =>{
            //user found!!!!
            return success
        }).then(police =>{
            //Im gonna look for the polices
            serverUtil.getUserById(police.clientId).then(user =>{
                res.render('partials/users/user', {user: user});  
            }).catch(err =>{
                res.render('partials/users/user', {error: err});
            })
        }).catch(err =>{
            res.render('partials/users/user', {error: err});
        });
    }
    else{
        res.render('partials/accessDenied', {error: "You don't have permission to see this page"});
    }
});


module.exports = router;