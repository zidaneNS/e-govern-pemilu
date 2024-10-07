const pool = require("../db/db");

const getAllProfilPemerintah = (req, res) => {
    pool.query('SELECT * FROM profil_pemerintah', (err, results) => {
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

const addProfilPemerintah = (req, res) => {
    const {nip, nama} = req.body;

    pool.query('INSERT INTO profil_pemerintah (nip, nama) VALUES (?,?)', [nip, nama], (err, results) => {
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
                data: results
            })
        }
    })
};

const deleteProfilPemerintah = (req, res) => {
    const {id} = req.body;

    pool.query(`DELETE FROM profil_pemerintah WHERE id=${id}`, (err, results) => {
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
                    data: results
                })
            } else {
                res.status(404).json({
                    status: 'fail',
                    message: 'id not found'
                })
            }
        }
    })
}

module.exports = {getAllProfilPemerintah, addProfilPemerintah, deleteProfilPemerintah};