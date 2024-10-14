const express = require('express');
const route = express.Router();
const multer = require('multer');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './src/public/img/profilImg');
  },
  filename: (req, file, cb) => {
    cb(null, `${new Date().getTime()}-${file.originalname}`);
  },
  limits: {
    fileSize: 10 * 1024 * 1024
  }
});

const upload = multer({ storage });

const {getAllCaleg, addCaleg, deleteCaleg, updateCaleg} = require('../../handler/calegHandler');

route
.get('/', getAllCaleg)
.post('/', upload.single('image'), addCaleg)
.delete('/:id', deleteCaleg)
.put('/:id', upload.single('image'), updateCaleg);

module.exports = route;