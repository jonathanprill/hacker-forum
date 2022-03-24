const router = require('express').Router();
// const withAuth = require('../../utils/auth');
const sequelize = require('../../config/connection');
const { Post } = require('../../models');





router.post('/', (req, res) => {

    Post.create({
        post_title: req.body.post_title,
        post_url: req.body.post_url
    })
        .then(dbPostData => res.json(dbPostData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});


//exposes the changes to the router
module.exports = router;