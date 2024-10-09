const express = require('express');
const route = express.Router();
const multer = require('multer');
const upload = multer({dest : '../../db/img'});

const {getAllPartai, addPartai, deletePartai, updatePartai} = require('../../handler/partaiHandler');

route
.get('/', getAllPartai)
.post('/', upload.single('image'), addPartai)
.delete('/:id', deletePartai)
.put('/:id', updatePartai);

module.exports = route;