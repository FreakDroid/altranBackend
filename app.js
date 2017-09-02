var express = require('express');
var app = module.exports = express();

const port = process.env.PORT || 9000

require('./server/express-configuration')(app);

var auth = require('./server/auth');
auth.initialize(app);
app.use(auth.router);


///Routes restricted
app.use('/admin*', auth.isAuth);
app.use('/user/?*', auth.isAuth);
app.use('/policies/?*', auth.isAuth);
// app.use('/user/name/:name*', auth.isAuth);

var content = require('./server/content');
app.use(content);

app.listen(port, function (err) {
    if (err) {
      throw err
    }
  
    console.log(`server is listening on ${port}...`)
  })