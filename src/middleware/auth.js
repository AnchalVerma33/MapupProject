const jwt = require('jsonwebtoken');
const configVar = require('../config');

// SECRETKEY for decoding jwt token
const { SECRET_KEY } = configVar;

// If jwt token not available, use the token below
// token : eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.
//         eyJ1c2VybmFtZSI6IkFuY2hhbCIsImlhdCI6MTY4OTQ5ODEzOCwiZXhwIjoxNjkwMzYyMTM4fQ.
//         pOCJnfV7VGqxYetEcSnC7cWe7bhyO-7KWpqTOkY40Hk
// middleware for header authentication
const authenticate = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (authHeader && authHeader.startsWith('Bearer ')) {
    const token = authHeader.split(' ')[1];

    try {
      // Verify the JWT token
      const decoded = jwt.verify(token, SECRET_KEY);

      // Authentication successful, attach the decoded token to the request object
      req.user = decoded;

      // Proceed to the next middleware or route handler
      next();
    } catch (error) {
      res.status(401).json({ error: 'Unauthorized access' });
    }
  } else {
    res.status(401).json({ error: 'Unauthorized' });
  }
};

module.exports = {
  authenticate,
};
