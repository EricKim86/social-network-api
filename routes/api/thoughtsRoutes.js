const router = require('express').Router();

const {
  getThoughts,
  getSingleThoughts,
  createThought,
  updateThought,
  deleteThought,
  createReaction,
  deleteReaction,
} = require('../../controllers/userController');

// /api/thoughts
router.route('/').get(getThoughts).post(createThought);

// /api/thoughts/:thoughtId
router.route('/:userId').get(getSingleThoughts).put(updateThought).delete(deleteThought);

// /api/thoughts/:thoughtId/reactions
router.route('/:userId/friends/:friendID').post(createReaction).delete(deleteReaction);

module.exports = router;
