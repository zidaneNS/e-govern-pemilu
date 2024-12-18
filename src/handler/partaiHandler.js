const pool = require("../db/db");
const fs = require('fs');
const path = require('path');

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
    const filePath = `logoPartai/${req.file.filename}`;

    pool.query('INSERT INTO partai (nama, logoUrl, filePath) VALUES (?,?,?)', [nama, logoUrl, filePath], (err, results) => {
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
                    logoUrl,
                    filePath
                }
            })
        }
    })
};

const deletePartai = (req, res) => {
    const id = parseInt(req.params.id);

    pool.query('SELECT * FROM partai WHERE id=?', [id], (err, results) => {
        if (err) {
            res.status(500).json({
                success: false,
                message: 'query error',
                err
            })
        } else {
            if (results.length > 0) {
                const filePath = path.join(__dirname, '..', '..', 'public', 'img', results[0].filePath);
                fs.unlink(filePath, (err) => {
                    if (err) {
                        res.status(500).json({
                            success: false,
                            message: 'deleting file error',
                            err
                        });
                    } else {
                        pool.query('DELETE FROM partai WHERE id=?', [id], (err, results) => {
                            if (err) {
                                res.status(500).json({
                                    success: false,
                                    message: 'query error',
                                    err
                                });
                            } else {
                                res.status(200).json({
                                    success: true,
                                    message: 'data has been deleted'
                                });
                            }
                        });

                    }
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

const updatePartai = (req, res) => {
    const { nama } = req.body;
    const id = parseInt(req.params.id);
    const isUpdateFile = req.file ? true : false;
    const query = isUpdateFile ? 'UPDATE partai SET nama=?, logoUrl=?, filePath=? WHERE id=?' : 'UPDATE partai SET nama=? WHERE id=?';

    // Generate the new file URL and file path
    const logoUrl = isUpdateFile ? `${req.protocol}://${req.get('host')}/kpu/uploads/logoPartai/${req.file.filename}` : null;
    const filePath = isUpdateFile ? `logoPartai/${req.file.filename}` : null;

    // Determine statement for SQL update
    const stmt = isUpdateFile ? [nama, logoUrl, filePath, id] : [nama, id];

    // Find existing data in the database
    pool.query('SELECT * FROM partai WHERE id=?', [id], (err, results) => {
        if (err) {
            return res.status(500).json({
                success: false,
                message: 'Query error',
                err
            });
        }
        
        if (results.length > 0) {
            // Check if there's a new file to update
            if (isUpdateFile) {
                const oldFilePath = path.join(__dirname, '..', '..', 'public', 'img', results[0].filePath);
                
                // Delete the old file
                fs.unlink(oldFilePath, (err) => {
                    if (err) {
                        return res.status(500).json({
                            success: false,
                            message: 'Error deleting old file',
                            err
                        });
                    }
                    
                    // Proceed to update the database after deleting the old file
                    pool.query(query, stmt, (err, results) => {
                        if (err) {
                            return res.status(500).json({
                                success: false,
                                message: 'Query error during update',
                                err
                            });
                        }
                        
                        res.status(200).json({
                            success: true,
                            message: 'Data updated successfully',
                            data: {
                                id,
                                nama,
                                logoUrl,
                                filePath
                            }
                        });
                    });
                });
            } else {
                // No new file; just update the name
                pool.query(query, stmt, (err, results) => {
                    if (err) {
                        return res.status(500).json({
                            success: false,
                            message: 'Query error during name update',
                            err
                        });
                    }
                    
                    res.status(200).json({
                        success: true,
                        message: 'Data updated successfully'
                    });
                });
            }
        } else {
            res.status(404).json({
                success: false,
                message: 'ID not found'
            });
        }
    });
};

module.exports = {getAllPartai, addPartai, deletePartai, updatePartai};