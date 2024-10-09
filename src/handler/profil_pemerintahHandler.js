const pool = require("../db/db");

// mengambil seluruh informasi profil pemerintah
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

// menambahkan profil pemerintah
const addProfilPemerintah = (req, res) => {
    // mengambil nilai yang terdapat pada request body
    const {nip, nama, password} = req.body;

    // melakukan query pada pool
    pool.query('INSERT INTO profil_pemerintah (nip, nama, password) VALUES (?,?,?)', [nip, nama, password], (err, results) => {
        // mengirimkan hasil dari query
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
                    nip,
                    nama,
                    password
                }
            })
        }
    })
};

// menghapus profil pemerintah berdasarkan id
const deleteProfilPemerintah = (req, res) => {
    // mengambil nilai id dari parameter request
    const id = req.params.id;

    // melakukan query pada pool
    pool.query(`DELETE FROM profil_pemerintah WHERE id=${id}`, (err, results) => {
        // mengirimkan hasil query
        if (err) {
            console.log('Error deleting data', err);
            res.status(500).json({
                status: 'fail',
                message: 'data fail to delete',
                err
            })
        } else {
            // jika terdapat data yang berubah maka respon sukses
            if (results.affectedRows > 0) {
                res.status(200).json({
                    status: 'success',
                    message: 'data deleted successfuly',
                })
            // jika tidak ada yang berubah maka respon gagal
            } else {
                res.status(404).json({
                    status: 'fail',
                    message: 'id not found'
                })
            }
        }
    })
};

// mengudate data profil pemerintah
const updateProfilPemerintah = (req, res) => {
    // mengambil data dari request body
    const {nip, nama, password} = req.body;
    // mengambil id dari parameter request
    const id = parseInt(req.params.id);

    // melakukan query pada pool
    pool.query('UPDATE profil_pemerintah SET nip=?, nama=?, password=? WHERE id=?', [nip, nama, password, id], (err, results) => {
        // mengirimkan hasil query
        if (err) {
            console.log('error updating data');
            res.status(500).json({
                status: 'fail',
                message: 'updating data error',
                err
            })
        } else {
            // jika terdapat data yang berubah maka respon sukses
            if (results.affectedRows > 0) {
                res.status(200).json({
                    status: 'success',
                    message: 'success updating data',
                    data: {
                        id,
                        nip,
                        nama,
                        password
                    }
                })
            // jika tidak ada data yang berubah maka respon gagal
            } else {
                res.status(404).json({
                    status: 'fail',
                    message: 'id not found', 
                })
            }
        }
    })
};

module.exports = {getAllProfilPemerintah, addProfilPemerintah, deleteProfilPemerintah, updateProfilPemerintah};