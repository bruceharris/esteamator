// TODO: why can't I redefine this in common/Collections.js?
Sessions = new Meteor.Collection("sessions");

Meteor.subscribe('workItems');

Session.setDefault("sessionId", null);
Session.setDefault("username", null);
Session.setDefault("currentWorkItem", null);


Template.index.noSession = function () {
  return Session.equals('sessionId', null);
};

Template.index.sessionId = function () {
  return Session.get('sessionId');
};