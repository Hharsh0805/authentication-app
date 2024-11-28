const jwt = require('jsonwebtoken');

const ensureAuthenticated = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    if (!authHeader) {
        return res.status(401)
            .json({ message: 'Unauthorized, JWT token is required' });
    }

    const [bearer, token] = authHeader.split(' ');

    if (bearer !== 'Bearer' || !token) {
        return res.status(401)
            .json({ message: 'Invalid authorization header format' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (err) {
        return res.status(403)
            .json({ message: 'Unauthorized, JWT token is invalid or expired' });
    }
};

module.exports = ensureAuthenticated;