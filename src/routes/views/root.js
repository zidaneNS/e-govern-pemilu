const express = require('express');
const route = express.Router();

route
.get('/', (req, res) => {
    res.redirect('http://localhost:80/front-end-pemilu/profil_pemerintah.php');
});

route
.get('/profil_panitia', (req, res) => {
    res.redirect('http://localhost:80/front-end-pemilu/profil_panitia.php');
})

module.exports = route