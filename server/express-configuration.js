var express = require('express'),
    bodyParser = require('body-parser'),
    session = require('express-session'),
    flash = require('express-flash');
const exphbs = require('express-handlebars');
const path = require('path');
    
//Config about express
module.exports = function (app) {

    app.engine('.hbs', exphbs({
        defaultLayout: 'layout',
        extname: '.hbs',
        layoutsDir: path.join('./views'),
        partialsDir: path.join('./views/partials')
    }));

    app.set('view engine', '.hbs');

    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.use(bodyParser.json());

    app.use(session({
        secret: 'FOO_FIGTHERS',
        resave: true,
        saveUninitialized: true
    }));
    app.use(flash());

    app.use('/js', express.static('./node_modules/bootstrap/dist/js')); // redirect bootstrap JS
    app.use('/js', express.static('./node_modules/jquery/dist')); // redirect JS jQuery
    app.use('/css', express.static('./node_modules/bootstrap/dist/css')) // Redirect CSS bootstrap

};