const router = require('express').Router();
const thoughtsRoutes = require('./userThoughts');
const userRoutes = require('./userRoutes');

router.use('/thoughts', thoughtsRoutes);
router.use('/users', userRoutes);

module.exports = router;
