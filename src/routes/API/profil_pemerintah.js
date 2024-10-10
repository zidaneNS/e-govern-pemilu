const express = require('express');
const route = express.Router();

// mengambil fungsi handler
const {getAllProfilPemerintah, getProfilPemerintahById, addProfilPemerintah, deleteProfilPemerintah, updateProfilPemerintah} = require('../../handler/profil_pemerintahHandler');

// memberi handler yang sesuai
route
.get('/', getAllProfilPemerintah)
.get('/:id', getProfilPemerintahById)
.post('/', addProfilPemerintah)
.put('/:id', updateProfilPemerintah)
.delete('/:id', deleteProfilPemerintah);

module.exports = route;