const express = require('express');
const route = express.Router();

const {getAllProfilPemerintah, addProfilPemerintah, deleteProfilPemerintah, updateProfilPemerintah} = require('../handler/kpuHandler');

route
.get('/kpu', getAllProfilPemerintah)
.post('/kpu', addProfilPemerintah)
.put('/kpu/:id', updateProfilPemerintah)
.delete('/kpu', deleteProfilPemerintah)

module.exports = route;