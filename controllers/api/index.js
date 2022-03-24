const router = require('express').Router();

//POSTS
const postRoutes = require('./post-routes');
router.use('/posts', postRoutes);

//COMMENTS
const commentRoutes = require('./comment-routes');
router.use('/comments', commentRoutes);

//USERS
const userRoutes = require('./user-routes');
router.use('/users', userRoutes);

module.exports = router;