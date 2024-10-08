const express = require('express');
const route = express.Router();
const multer = require('multer');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './src/public/img/logoPartai');
  },
  filename: (req, file, cb) => {
    cb(null,file.originalname);
  }
});

const upload = multer({ storage });

const {getAllPartai, addPartai, deletePartai, updatePartai} = require('../../handler/partaiHandler');

route
.get('/', getAllPartai)
.post('/', upload.single('image'), addPartai)
.delete('/:id', deletePartai)
.put('/:id', updatePartai);

module.exports = route;