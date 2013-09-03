define('publish', ['collections'], function(collections) {
  'use strict';

  var collectionsToPublish = _(['workItems', 'users', 'estimates']);

  function publishForRequestedSessionId(collection) {
    Meteor.publish(collection, function(sessionId) {

      // ensure we only publish for a single specified session
      check(sessionId, String);

      return collections[collection].find({ sessionId: sessionId });
    });
  }
  
  collectionsToPublish.forEach(publishForRequestedSessionId);

  return null;

});