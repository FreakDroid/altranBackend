var express = require('express');
var app = module.exports = express();

const port = process.env.PORT || 9000

require('./server/express-configuration')(app);

var auth = require('./server/auth');
auth.initialize(app);
app.use(auth.router);


///Routes restricted
//I'm restricting all the routes
app.use('/?*', auth.isAuth);


var content = require('./server/content');
app.use(content);

app.listen(port, function (err) {
    if (err) {
      throw err
    }
  
    console.log(`server is listening on ${port}...`)
  })