const express = require('express');
const route = express.Router();

// mengambil fungsi handler
const {getAllProfilPanitia, getProfilPanitiaById, addProfilPanitia, deleteProfilPanitia, updateProfilPanitia} = require('../../handler/profil_panitiaHandler');

// memberi handler yang sesuai
route
.get('/', getAllProfilPanitia)
.get('/:id', getProfilPanitiaById)
.post('/', addProfilPanitia)
.delete('/:id', deleteProfilPanitia)
.put('/:id', updateProfilPanitia);

module.exports = route;