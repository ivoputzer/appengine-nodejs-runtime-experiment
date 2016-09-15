const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.status(200).send('Hello, world!')
})

if (module === require.main){
  var server = app.listen(process.env.PORT || 8080, function () {
    var port = server.address().port;
    console.log('App listening on port %s', port);
  });
}

module.exports = app;
