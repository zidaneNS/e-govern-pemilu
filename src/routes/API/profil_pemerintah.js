const express = require('express');
const route = express.Router();

const {getAllProfilPemerintah, addProfilPemerintah, deleteProfilPemerintah, updateProfilPemerintah} = require('../../handler/profil_pemerintahHandler');

route
.get('/', getAllProfilPemerintah)
.post('/', addProfilPemerintah)
.put('/:id', updateProfilPemerintah)
.delete('/', deleteProfilPemerintah)

module.exports = route;