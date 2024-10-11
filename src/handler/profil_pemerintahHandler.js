const pool = require("../db/db");

// mengambil seluruh informasi profil pemerintah
const getAllProfilPemerintah = (req, res) => {
    pool.query('SELECT * FROM profil_pemerintah', (err, results) => {
        if (err) {
            console.log('query error', err);
            res.status(500).json({
                success: false,
                message: 'query error',
                err
            });
        } else {
            res.status(200).json({
                success: true,
                message: 'success retrieving all datas',
                data : results
            });
        }
    });
};

const getProfilPemerintahById = (req, res) => {
    const id = req.params.id;

    pool.query('SELECT * FROM profil_pemerintah WHERE id=?', [id], (err, results) => {
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
    });
};

const getProfilPemerintahByNip = (req, res) => {
    const nip = parseInt(req.params.nip);

    pool.query('SELECT * FROM profil_pemerintah WHERE nip=?', [nip], (err, results) => {
        if (err) {
            res.status(500).json({
                success: false,
                message: 'query error',
                err
            });
        } else {
            if (results.length > 0) {
                res.status(200).json({
                    success: true,
                    message: `retrieving data with nip ${nip}`,
                    data: results
                });
            } else {
                res.status(404).json({
                    success: false,
                    message: 'nip not found'
                });
            }
        }
    });
};

// menambahkan profil pemerintah
const addProfilPemerintah = (req, res) => {
    // mengambil nilai yang terdapat pada request body
    const {nip, nama, password} = req.body;

    // mengecek apakah ada nip sama 
    pool.query('SELECT * FROM profil_pemerintah WHERE nip=?', [nip], (err, results) => {
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
                    message: 'nip already exists'
                });
            } else {
                // melakukan query pada pool
                pool.query('INSERT INTO profil_pemerintah (nip, nama, password) VALUES (?,?,?)', [nip, nama, password], (err, results) => {
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
                                nip,
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

// menghapus profil pemerintah berdasarkan id
const deleteProfilPemerintah = (req, res) => {
    // mengambil nilai id dari parameter request
    const id = parseInt(req.params.id);

    // melakukan query pada pool
    pool.query('DELETE FROM profil_pemerintah WHERE id=?', [id], (err, results) => {
        // mengirimkan hasil query
        if (err) {
            console.log('Error deleting data', err);
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
                    message: `data with id ${id} has been deleted`,
                });
            // jika tidak ada yang berubah maka respon gagal
            } else {
                res.status(404).json({
                    success: false,
                    message: 'id not found'
                });
            }
        }
    });
};

// mengudate data profil pemerintah
const updateProfilPemerintah = (req, res) => {
    // mengambil data dari request body
    const {nip, nama, password} = req.body;
    // mengambil id dari parameter request
    const id = parseInt(req.params.id);

    // mengecek apakah nip ada yang sama
    pool.query('SELECT * FROM profil_pemerintah WHERE nip=?', [nip], (err, results) => {
        if (err) {
            res.status(500).json({
                success:false,
                message: 'query error',
                err
            });
        } else {
            if (results.length > 0) {
                res.status(400).json({
                    success: false,
                    message: 'nip already exist'
                });
            } else {
                // melakukan query pada pool
                pool.query('UPDATE profil_pemerintah SET nip=?, nama=?, password=? WHERE id=?', [nip, nama, password, id], (err, results) => {
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
                                    nip,
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

module.exports = {getAllProfilPemerintah, getProfilPemerintahById, getProfilPemerintahByNip, addProfilPemerintah, deleteProfilPemerintah, updateProfilPemerintah};