const {Post} = require('../models');

const postData = [
  {
    title:"I'm a post",
    contents:"This is post content",
    user_id: 1,
  },
  
];

module.exports = () =>Post.bulkCreate(postData);;
