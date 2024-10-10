const express = require('express');
const route = express.Router();

route
.get('/', (req, res) => {
    res.redirect('http://localhost:80/front-end-pemilu/views/profil_pemerintah.php');
});

route
.get('/profil_panitia', (req, res) => {
    res.redirect('http://localhost:80/front-end-pemilu/views/profil_panitia.php');
})

route
.get('/partai', (req, res) => {
    res.redirect('http://localhost:80/front-end-pemilu/views/partai.php');
})

module.exports = route