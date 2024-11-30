// middleware to check for the secret key in the headers
const requireSecretKey = (req, res, next) => {
    const apiKey = req.headers['x-api-key'];  
    if (apiKey && apiKey === process.env.SECRETKEY) {
        return next();  
    } else {
        return res.status(403).json({ message: 'Forbidden: Invalid API Key' });
    }
}

module.exports = requireSecretKey;