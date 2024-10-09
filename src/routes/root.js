const express = require('express');
const route = express.Router();

route
.get('/', (req, res) => {
    res.send('this is get method')
})
.post('/', (req, res) => {
    res.send('this is post method')
})

module.exports = route