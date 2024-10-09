const pool = require('../db/db');

const getAllProfilPanitia = (req, res) => {
    pool.query('SELECT * FROM profil_panitia', (err, results) => {
        if (err) {
            console.log('query error', err);
            res.status(500).json({
                status: 'fail',
                message: 'error retrieving data',
                data : err
            });
        } else {
            res.status(200).json({
                status: 'success',
                message: 'success retrieving all datas',
                data : results
            })
        }
    })
};

const addProfilPanitia = (req, res) => {
    const {nik, nama, password} = req.body;

    pool.query('INSERT INTO profil_panitia (nik, nama, password) VALUES (?,?,?)', [nik, nama, password], (err, results) => {
        if (err) {
            console.log('error adding data', err)
            res.status(500).json({
                status: 'fail',
                message: 'data failed to add',
                err
            })
        } else {
            res.status(201).json({
                status: 'success',
                message: 'data added successfuly',
                data: {
                    id: results.insertId,
                    nik,
                    nama,
                    password
                }
            })
        }
    })
};

const deleteProfilPanitia = (req, res) => {
    const id = parseInt(req.params.id);

    pool.query(`DELETE FROM profil_panitia WHERE id=${id}`, (err, results) => {
        if (err) {
            console.log('Error deleting data', err);
            res.status(500).json({
                status: 'fail',
                message: 'data fail to delete',
                err
            })
        } else {
            if (results.affectedRows > 0) {
                res.status(200).json({
                    status: 'success',
                    message: 'data deleted successfuly',
                })
            } else {
                res.status(404).json({
                    status: 'fail',
                    message: 'id not found'
                })
            }
        }
    })
};

const updateProfilPanitia = (req, res) => {
    const id = req.params.id;
    const {nik, nama, password} = req.body;

    pool.query('UPDATE profil_panitia SET nik=?, nama=?, password=? WHERE id=?', [nik, nama, password, id], (err, results) => {
        if (err) {
            console.log('error updating data');
            res.status(500).json({
                status: 'fail',
                message: 'updating data error',
                err
            })
        } else {
            if (results.affectedRows > 0) {
                res.status(200).json({
                    status: 'success',
                    message: 'success updating data',
                    data: {
                        id,
                        nik,
                        nama,
                        password
                    }
                })
            } else {
                res.status(404).json({
                    status: 'fail',
                    message: 'id not found', 
                })
            }
        }
    })
};

module.exports = {getAllProfilPanitia, addProfilPanitia, deleteProfilPanitia, updateProfilPanitia};