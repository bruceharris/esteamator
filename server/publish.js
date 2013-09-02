define('publish', ['collections'], function(collections) {
  'use strict';

  // Publish all work items for requested sessionId
  Meteor.publish('workItems', function (sessionId) {
    var result = collections.workItems.find({});
    console.log('publishing work items', result.count(), result.fetch());
    return result;
  });

  // Publish all users for requested sessionId
  Meteor.publish('users', function (sessionId) {
    var result = collections.users.find({});
    console.log('publishing users', result.count(), result.fetch());
    return result;
  });

  // Publish all estimates for requested sessionId
  Meteor.publish('estimates', function (sessionId) {
    var result = collections.estimates.find({});
    console.log('publishing estimates', result.count(), result.fetch());
    return result;
  });

  return null;

});
