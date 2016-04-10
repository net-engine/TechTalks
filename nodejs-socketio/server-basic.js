var express     = require('express');
var bodyParser  = require('body-parser');
var app         = express();
var router      = express.Router();
var port        = 8080;

app.use(express.static(__dirname + '/public'));
app.use('/api', router);

router.use(bodyParser.json());

router.route('/hello')
  .all((req, res) => {
    res.send('world');
  });

router.route('/hello/:user_name')
  .get((req, res) => {
    res.send(`Hi, ${ req.params.user_name } `);
  })
  .post((req, res) => {
    console.log(req.body);
    res.json({ response: 'request received!' });
  });

app.listen(port);
