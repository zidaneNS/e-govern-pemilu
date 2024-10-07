const express = require('express');
const route = express.Router();

const {getAllProfilPemerintah, addProfilPemerintah, deleteProfilPemerintah} = require('../handler/kpuHandler');

route
.get('/kpu', getAllProfilPemerintah)
.post('/kpu', addProfilPemerintah)
.delete('/kpu', deleteProfilPemerintah)

module.exports = route;