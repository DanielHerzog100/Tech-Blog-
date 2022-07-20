const { Comment } = require('../models');

const commentData = [
  {
    title:"I'm a comment",
    contents:"This is comments content",
    user_id: 1,
    post_id: 1,
  },
  
];

module.exports = () => Comment.bulkCreate(commentData);;
