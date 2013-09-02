'use strict';

// TODO: subscribe only to the ones we care about
Meteor.subscribe('workItems');
Meteor.subscribe('users');
Meteor.subscribe('estimates');

Session.setDefault("sessionId", null);
Session.setDefault("user", null);
Session.setDefault("currentWorkItemId", null);


Template.index.helpers({

  noSession: function() {
    return Session.equals('sessionId', null);
  },

  onExistingSessionPage: function() {
    return Session.equals('page', 'existingSession');
  },

  onReportPage: function() {
    return Session.equals('page', 'report');
  },

});

