var express = require('express')
var cors = require('cors')
var app = express()

app.use(cors(
    {
        origin: 'http://example.com',
        optionsSuccessStatus: 200
    }
))

app.get('/products/:id', function (req, res, next) {
    res.json({ msg: 'This is CORS-enabled for http://example.com' })
})

app.listen(80, function () {
    console.log('CORS-enabled web server listening on port 80')
})