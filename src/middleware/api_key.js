require('dotenv').config();

const api_key = (req, res, next) => {
    const auth = req.header('API_KEY');

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