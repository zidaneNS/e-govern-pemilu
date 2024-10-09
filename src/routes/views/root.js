const express = require('express');
const route = express.Router();

route
.all('/', (req, res) => {
    res.redirect('http://localhost:3000/profil_pemerintah.php');
});

route
.get('/profil_panitia', (req, res) => {
    res.redirect('http://localhost:3000/profil_panitia.php');
})

module.exports = route