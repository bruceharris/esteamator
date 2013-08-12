// Publish all work items for requested sessionId
Meteor.publish('workItems', function (sessionId) {
  var result = WorkItems.find({});
  console.log('publishing work items', result.count(), result.fetch());
  return result;
});

// Publish all users for requested sessionId
Meteor.publish('users', function (sessionId) {
  var result = Users.find({});
  console.log('publishing users', result.count(), result.fetch());
  return result;
});

// Publish all estimates for requested sessionId
Meteor.publish('estimates', function (sessionId) {
  var result = Estimates.find({});
  console.log('publishing estimates', result.count(), result.fetch());
  return result;
});