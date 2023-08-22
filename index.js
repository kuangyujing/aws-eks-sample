'use strict'

const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')

require('dotenv').config()

const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use(express.static('public'))

app.listen(process.env.PORT || 3000, () => {
    console.log('Server is up on port 3000')
})

// echo back the request
app.all('/echo', (req, res) => {
    res.send({
        method: req.method,
        queries: req.query,
        headers: req.headers,
        body: req.body
    })
})

