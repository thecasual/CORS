var express = require('express')
var cors = require('cors')
var app = express()

app.use(cors(
    {
        origin: 'http://localhost:8080',
        optionsSuccessStatus: 200
    }
))

app.get('/products/:id', function (req, res, next) {
    res.json({ msg: 'This is CORS-enabled for http://localhost:8080' })
})

app.listen(81, function () {
    console.log('CORS-enabled web server listening on port 81')
})