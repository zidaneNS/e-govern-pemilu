require('dotenv').config();

const api_key = async (req, res, next) => {
    const auth = req.header('API_KEY');

    if (!auth || auth !== process.env.API_KEY) {
        return res.status(401).json({
            status: 'fail',
            message: 'unauthorized'
        })
    } else {
        next();
    }
};

module.exports = api_key;