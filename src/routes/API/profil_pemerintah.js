const express = require('express');
const route = express.Router();

// mengambil fungsi handler
const {getAllProfilPemerintah, getProfilPemerintahById, getProfilPemerintahByNip, addProfilPemerintah, deleteProfilPemerintah, updateProfilPemerintah} = require('../../handler/profil_pemerintahHandler');

// memberi handler yang sesuai
route
.get('/', getAllProfilPemerintah)
.get('/:id', getProfilPemerintahById)
.get('/login/:nip', getProfilPemerintahByNip)
.post('/', addProfilPemerintah)
.put('/:id', updateProfilPemerintah)
.delete('/:id', deleteProfilPemerintah);

module.exports = route;