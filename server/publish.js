define('publish', ['collections'], function(collections) {
  'use strict';

  var collectionsToPublish = _(['workItems', 'users', 'estimates']);

  function publishForRequestedSessionId(collection) {
    Meteor.publish(collection, function(sessionId) {
      return collections[collection].find({ sessionId: sessionId });
    });
  }
  
  collectionsToPublish.forEach(publishForRequestedSessionId);

  return null;

});