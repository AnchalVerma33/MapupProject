const router = require('express').Router();
const { findIntersection } = require('../controller/intersection');
const { authenticate } = require('../middleware/auth');

router.post('/check-intersections', authenticate, findIntersection);

module.exports = {
  router,
};
