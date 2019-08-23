// BASE SETUP

let express = require('express');
let app = express();
let bodyParser = require('body-parser');

// configure bodyParser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

let port = process.env.PORT || 8080;

// Routing

var router = express.Router();

//test route
router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });
});

// more routes here

// Register the Routes
app.use('/api', router);

// Start the server
app.listen(port);
console.log('Magic happens on port ' + port);