const router = require('express').Router();
const { findIntersection } = require('../controller/intersection');
const { authenticate } = require('../middleware/auth');

// Authenticate is the middleware for header authorisation and token verification
// Find intersection is the controller where the business logic exists
router.post('/check-intersections', authenticate, findIntersection);

module.exports = {
  router,
};
