//IMPORTING MODELS
const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');



//creates associations
//A user can make many posts. But a post only belongs to a single user
User.hasMany(Post, {
    foreignKey: 'user_id'
});

Post.belongsTo(User, {
    foreignKey: 'user_id'
});

///////////////////////////////////////////////////

//Comment model associations
//A user can make many comments. But a comment only belongs to a single user
//A post can have many comments. But a comment only belongs to a single post

Comment.belongsTo(User, {
    foreignKey: 'user_id'
});

Comment.belongsTo(Post, {
    foreignKey: 'post_id'
});

User.hasMany(Comment, {
    foreignKey: 'user_id'
});

Post.hasMany(Comment, {
    foreignKey: 'post_id'
});



module.exports = { User, Post, Comment };