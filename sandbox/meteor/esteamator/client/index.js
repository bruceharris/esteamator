Sessions = new Meteor.Collection("sessions");

Session.setDefault("sessionId", null);

Template.index.noSession = function () {
  return Session.equals('sessionId', null);
};

Template.index.sessionId = function () {
  return Session.get('sessionId');
};