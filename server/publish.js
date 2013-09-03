define('publish', ['collections'], function(collections) {
  'use strict';

  function query(sessionId) {
    return { sessionId: sessionId };
  }

  // Publish all work items for requested sessionId
  Meteor.publish('workItems', function(sessionId) {
    var result = collections.workItems.find(query(sessionId));
    console.log('publishing work items', result.count(), result.fetch());
    return result;
  });

  // Publish all users for requested sessionId
  Meteor.publish('users', function(sessionId) {
    var result = collections.users.find(query(sessionId));
    console.log('publishing users', result.count(), result.fetch());
    return result;
  });

  // Publish all estimates for requested sessionId
  Meteor.publish('estimates', function(sessionId) {
    var result = collections.estimates.find(query(sessionId));
    console.log('publishing estimates', result.count(), result.fetch());
    return result;
  });

  return null;

});
