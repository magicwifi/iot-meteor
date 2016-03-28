var fs = Npm.require('fs');
var path = Npm.require('path');

Meteor.methods({
  '/video/getPost': function(postId) {
    var dataPath = path.join(process.env.HOME, '/doc-iot/posts.json');

    var posts = fs.readFileSync(dataPath, 'utf8');

    if ( postId == "posts" ) {
      return posts;
    } else {
      var postId = parseInt(postId);
      var metaData = Posts.findOne({id:postId});
      var postPath = path.join(process.env.HOME, '/doc-iot/posts/' + postId + '.md');
      var postContent = fs.readFileSync(postPath, 'utf8');
      return {
        metaData: metaData,
        postContent: postContent
      };
    }
  }
});
