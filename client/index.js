// TODO: subscribe only to the ones we care about
Meteor.subscribe('workItems');
Meteor.subscribe('users');
Meteor.subscribe('estimates');

Session.setDefault("sessionId", null);
Session.setDefault("user", null);
Session.setDefault("currentWorkItemId", null);


Template.index.noSession = function () {
  return Session.equals('sessionId', null);
};

Template.index.sessionId = function () {
  return Session.get('sessionId');
};