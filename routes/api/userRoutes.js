const router = require('express').Router();

const {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
  createFriend,
  // deleteFriend,
} = require('../../controllers/userController');

// /api/users
router.route('/').get(getUsers).post(createUser);

// /api/users/:userId
router.route('/:userId').get(getSingleUser).put(updateUser).delete(deleteUser);

// /api/users/:userId/friends/:friendID
// router.route('/:userId/friends/:friendID').post(createFriend).delete(deleteFriend);
router.route('/:userId/friends/:friendId').post(createFriend)

module.exports = router;
