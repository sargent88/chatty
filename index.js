const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(express.static('assets'));
app.use(bodyParser.json());

var messages = []

app.get('/messages', function(req, res, next) {
    res.status(200).json({ messages: messages });
});

app.post('/messages', function(req, res, next) {
    messages.push({ message: req.body.message, time: new Date() });
    res.status(200).json({ messages: messages });
});


app.listen(3000, function() {
    console.log('Listening on 3000 yo')
})