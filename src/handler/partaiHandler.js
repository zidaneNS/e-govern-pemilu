const pool = require("../db/db")

// mengambil data caleg
const getAllPartai = (req, res) => {
    // melakukan query
    pool.query('SELECT * FROM partai', (err, results) => {

        // mengirimkan hasil dari query
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

const addPartai = (req, res) => {
    const {nama} = req.body;

    if (!req.file) {
        res.status(400).json({
            success: false,
            message: 'no file uploaded'
        })
    }

    const logoUrl = `${req.protocol}://${req.get('host')}/kpu/uploads/logoPartai/${req.file.filename}`;

    pool.query('INSERT INTO partai (nama, logoUrl) VALUES (?,?)', [nama, logoUrl], (err, results) => {
        if (err) {
            res.status(500).json({
                success: false,
                message: 'query error',
                err
            })
        } else {
            res.status(201).json({
                success: true,
                message: 'data added',
                data: {
                    id : results.insertId,
                    nama,
                    logoUrl
                }
            })
        }
    })
};

const deletePartai = (req, res) => {
    const id = parseInt(req.params.id);

    pool.query('DELETE FROM partai WHERE id=?', [id], (err, results) => {
        if (err) {
            res.status(500).json({
                success: false,
                message: 'query error',
                err
            })
        } else {
            if (results.affectedRows > 0) {
                res.status(200).json({
                    success: true,
                    message: `data with id ${id} has been deleted`
                })
            } else {
                res.status(404).json({
                    success: false,
                    message: 'id not found'
                })
            }
        }
    })
};

const updatePartai = (req, res) => {
    const {nama} = req.body;
    const id = parseInt(req.params.id);
    let logoUrl;

    if (req.file) {
        logoUrl = req.file.path;
    }

    const query = logoUrl ? 'UPDATE partai SET nama=? WHERE id=?' : 'UPDATE partai SET nama=?, logoUrl=? WHERE id=?';

    pool.query(query, logoUrl ? [nama, id] : [nama, logoUrl, id], (err, results) => {
        if (err) {
            res.status(500).json({
                success: false,
                message: 'query error',
                err
            })
        } else {
            if (results.affectedRows > 0) {
                res.status(200).json({
                    success: true,
                    message: `data with id ${id} has been updated`,
                    data: {
                        id,
                        nama,
                        logoUrl
                    }
                })
            } else {
                res.status(404).json({
                    success: false,
                    message: 'id not found'
                })
            }
        }
    })
};

module.exports = {getAllPartai, addPartai, deletePartai, updatePartai};