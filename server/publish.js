define('publish', ['collections'], function(collections) {
  'use strict';

  function publishForReqestedSessionId(collection) {
    Meteor.publish(collection, function(sessionId) {
      return collections[collection].find({ sessionId: sessionId });
    });
  }

  publishForReqestedSessionId('workItems');
  publishForReqestedSessionId('users');
  publishForReqestedSessionId('estimates');

  return null;

});
