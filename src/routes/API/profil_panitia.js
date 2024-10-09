const express = require('express');
const route = express.Router();

// mengambil fungsi handler
const {getAllProfilPanitia, addProfilPanitia, deleteProfilPanitia, updateProfilPanitia} = require('../../handler/profil_panitiaHandler');

// memberi handler yang sesuai
route
.get('/', getAllProfilPanitia)
.post('/', addProfilPanitia)
.delete('/:id', deleteProfilPanitia)
.put('/:id', updateProfilPanitia);

module.exports = route;