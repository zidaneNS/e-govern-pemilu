const express = require('express');
const route = express.Router();

const {getAllProfilPanitia, addProfilPanitia, deleteProfilPanitia, updateProfilPanitia} = require('../../handler/profil_panitiaHandler');

route
.get('/', getAllProfilPanitia)
.post('/', addProfilPanitia)
.delete('/:id', deleteProfilPanitia)
.put('/:id', updateProfilPanitia)

module.exports = route;