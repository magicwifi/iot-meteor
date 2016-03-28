Meteor.publish('comments', function(postId) {
  return Comments.find({postId: postId});
});
Meteor.publish('posts', function() {
  return Comments.find({});
});
