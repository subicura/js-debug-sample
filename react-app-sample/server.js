var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var app = express();

app.use(cors());
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.post('/login', function (req, res) {
    var id = req.params.id;
    var password = req.params.password;

    if (id == 'hello' && password == 'world') {
        res.json({ ret: 'success' });
    } else {
        res.status(403).json({ ret: 'unauthorised' });
    }
});

app.listen(5000, function () {
    console.log('Example app listening on port 5000!');
});
