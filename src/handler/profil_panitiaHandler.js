const pool = require('../db/db');

// mengambil semua data profil panitia
const getAllProfilPanitia = (req, res) => {

    // melakukan query pada pool
    pool.query('SELECT * FROM profil_panitia', (err, results) => {

        // mengirimkan hasil dari query
        if (err) {
            console.log('query error', err);
            res.status(500).json({
                success: false,
                message: 'query error',
                data : err
            });
        } else {
            res.status(200).json({
                success: true,
                message: 'success retrieving all datas',
                data : results
            })
        }
    })
};

const getProfilPanitiaById = (req, res) => {
    const id = req.params.id;

    pool.query('SELECT * FROM profil_panitia WHERE id=?', [id], (err, results) => {
        if (err) {
            console.log('query error', err);
            res.status(500).json({
                success: false,
                message: 'query error',
                err
            });
        } else {
            if (results.length > 0) {
                res.status(200).json({
                    success: true,
                    message: `retrieving data with id ${id}`,
                    data: results
                });
            } else {
                res.status(404).json({
                    success: false,
                    message: 'id not found'
                });
            }
        }
    })
}

// menambah data profil panitia
const addProfilPanitia = (req, res) => {
    // mengambil nilai yang terdapat pada request body
    const {nik, nama, password} = req.body;

    // mengecek apakah ada nip sama 
    pool.query('SELECT * FROM profil_panitia WHERE nik=?', [nik], (err, results) => {
        if (err) {
            console.log('query error', err);
            res.status(500).json({
                success: false,
                message: 'query error',
                err
            });
        } else {
            if (results.length > 0) {
                res.status(400).json({
                    success: false,
                    message: 'nik already exists'
                });
            } else {
                // melakukan query pada pool
                pool.query('INSERT INTO profil_panitia (nik, nama, password) VALUES (?,?,?)', [nik, nama, password], (err, results) => {
                    // mengirimkan hasil dari query
                    if (err) {
                        console.log('query error', err);
                        res.status(500).json({
                            success: false,
                            message: 'query error',
                            err
                        });
                    } else {
                        res.status(201).json({
                            success: true,
                            message: 'data added',
                            data: {
                                id: results.insertId,
                                nik,
                                nama,
                                password
                            }
                        });
                    }
                });
            }
        }
    });

};

// menghapus data profil panitia
const deleteProfilPanitia = (req, res) => {
    // mengambil nilai id dari parameter request
    const id = parseInt(req.params.id);

    // melakukan query pada pool
    pool.query('DELETE FROM profil_panitia WHERE id=?', [id], (err, results) => {
        // mengirimkan hasil query
        if (err) {
            console.log('Error deleting data', err);
            res.status(500).json({
                success: false,
                message: 'query error',
                err
            })
        } else {
            // jika terdapat data yang berubah maka respon sukses
            if (results.affectedRows > 0) {
                res.status(200).json({
                    success: true,
                    message: `data with id ${id} has been deleted`,
                })
            // jika tidak ada yang berubah maka respon gagal
            } else {
                res.status(404).json({
                    success: false,
                    message: 'id not found'
                })
            }
        }
    })
};

// mengudate data profil panitia
const updateProfilPanitia = (req, res) => {
    // mengambil data dari request body
    const {nik, nama, password} = req.body;
    // mengambil id dari parameter request
    const id = parseInt(req.params.id);

    // mengecek apakah nik ada yang sama
    pool.query('SELECT * FROM profil_panitia WHERE nik=?', [nik], (err, results) => {
        if (err) {
            res.status(500).json({
                success:false,
                message: 'query error',
                err
            });
        } else {
            if (results.length > 1) {
                res.status(400).json({
                    success: false,
                    message: 'nik already exist'
                });
            } else {
                // melakukan query pada pool
                pool.query('UPDATE profil_panitia SET nik=?, nama=?, password=? WHERE id=?', [nik, nama, password, id], (err, results) => {
                    // mengirimkan hasil query
                    if (err) {
                        console.log('error updating data');
                        res.status(500).json({
                            success: false,
                            message: 'query error',
                            err
                        });
                    } else {
                        // jika terdapat data yang berubah maka respon sukses
                        if (results.affectedRows > 0) {
                            res.status(200).json({
                                success: true,
                                message: `data with id ${id} has been updated`,
                                data: {
                                    id,
                                    nik,
                                    nama,
                                    password
                                }
                            });
                        // jika tidak ada data yang berubah maka respon gagal
                        } else {
                            res.status(404).json({
                                success: false,
                                message: 'id not found', 
                            });
                        }
                    }
                });
            }
        }
    });
    
};

module.exports = {getAllProfilPanitia, getProfilPanitiaById, addProfilPanitia, deleteProfilPanitia, updateProfilPanitia};