//  This file will contain all of the user-facing routes, such as the homepage and login page.

// import express from the library
const router = require('express').Router();

//Importing necessary modules and models
const sequelize = require('../config/connection');
const { Post, User, Comment } = require('../models');

// get all posts for homepage
router.get('/', (req, res) => {
    console.log(req.session);
    Post.findAll({
        attributes: [
            'id',
            'post_body',
            'title',
            'created_at'
        ],
        include: [
            {
                model: Comment,
                attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
                include: {
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
        .then(dbPostData => {
            //This will loop over and map each Sequelize object into a serialized version of itself
            const posts = dbPostData.map(post => post.get({ plain: true }));
            // pass a single post object into the homepage template
            // Ensure login
            res.render('homepage', {
                posts,
                loggedIn: req.session.loggedIn
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});






module.exports = router;