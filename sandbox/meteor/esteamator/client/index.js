// TODO: why can't I redefine this in common/Collections.js?
Sessions = new Meteor.Collection("sessions");

// TODO: subscribe only to the ones we care about
Meteor.subscribe('workItems');
Meteor.subscribe('users');

Session.setDefault("sessionId", null);
Session.setDefault("username", null);
Session.setDefault("currentWorkItem", null);


Template.index.noSession = function () {
  return Session.equals('sessionId', null);
};

Template.index.sessionId = function () {
  return Session.get('sessionId');
};