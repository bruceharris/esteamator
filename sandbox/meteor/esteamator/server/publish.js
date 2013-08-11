// Sessions -- {name: String}
Sessions = new Meteor.Collection("sessions");

// !!! do we really want to do this?
// Publish complete set of lists to all clients.
/*
Meteor.publish('sessions', function () {
  return Sessions.find();
});
*/


// Publish all work items for requested sessionId
Meteor.publish('workItems', function () {
  var result = WorkItems.find({});
  console.log('publishing work items', result.count(), result.fetch());
  return result;
});
