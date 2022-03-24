const router = require('express').Router();
const withAuth = require('../../utils/auth');
const sequelize = require('../../config/connection');
const { Post, User, Comment } = require('../../models');





// get all posts
router.get('/', (req, res) => {
    Post.findAll({
        attributes: [
            'id',
            'post_body',
            'title',
            'created_at'
        ],
        include: [
            {
                //includes comment info in JSON
                model: Comment,
                attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
                include: {
                    //so it can attach the username to the comment.
                    model: User,
                    attributes: ['username']
                }
            },
            {
                model: User,
                attributes: ['username']
            }
        ]
    })
        .then(dbPostData => res.json(dbPostData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

//exposes the changes to the router
module.exports = router;