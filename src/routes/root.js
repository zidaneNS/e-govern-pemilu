const express = require('express');
const route = express.Router();

route.get('/', (req, res) => {
    res.redirect('http://localhost:80/front-end-pemilu/views/login_page.php');
});

route.get('/profil_panitia', (req, res) => {
    res.redirect('http://localhost:80/front-end-pemilu/views/profil_panitia.php');
});

route.get('/profil_pemerintah', (req, res) => {
    res.redirect('http://localhost:80/front-end-pemilu/views/profil_pemerintah.php');
});

route.get('/partai', (req, res) => {
    res.redirect('http://localhost:80/front-end-pemilu/views/partai.php');
});
route.get('/caleg', (req, res) => {
    res.redirect('http://localhost:80/front-end-pemilu/views/caleg.php');
});

route.get('/logout', (req, res) => {
    res.redirect('http://localhost:80/front-end-pemilu/includes/logout.inc.php');
});

module.exports = route;