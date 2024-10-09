require('dotenv').config();

// mengunci apllikasi jika tidak memiliki api key yang sesuai
const api_key = (req, res, next) => {
    const auth = req.header('API_KEY');

    // jika api key tidak ada atau tidak sesuai maka api tidak bisa diakses
    if (!auth || auth !== process.env.API_KEY) {
        res.status(401).json({
            status: 'fail',
            message: 'unauthorized'
        })
    } else {
        next()
    }
};

module.exports = api_key;