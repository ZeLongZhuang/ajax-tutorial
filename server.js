const express = require('express');
const bodyparser = require('body-parser');
var urlencodedparser = bodyparser.urlencoded({extended:false});

const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyparser.json());

app.route('/ajax')
.get(function(req, res) {
    res.render('ajax', {quote: "Love and legacy are the sacrifices we make for progress"});
})
.post(urlencodedparser, function(req, res) {
    res.send({response: req.body.quote});
});

app.use(function(req, res) {
    res.status(404);
    res.send('Error');
});

app.listen(process.env.PORT || 3000);