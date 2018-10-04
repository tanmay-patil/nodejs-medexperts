let db = require('./config/database/db_config');

var app = require('express')();
var mainRoutes = require('./routers/main_router');

app.use('/medexperts', mainRoutes);

const port = 0007;

app.listen(port, () => {
    console.log('We are live on ' + port);
});


// app.get('/', function (req, res) {
//     res.send('hello world');
// });