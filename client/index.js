define('index', ['pageHelpers'], function(helpers) {
  'use strict';

  // TODO: subscribe only to the ones we care about
  // TODO: move this stuff to bootstrap.js
  Meteor.subscribe('workItems');
  Meteor.subscribe('users');
  Meteor.subscribe('estimates');

  Session.setDefault('sessionId', null);
  Session.setDefault('user', null);
  Session.setDefault('currentWorkItemId', null);
  Session.setDefault('page', null);

  Template.index.helpers(helpers);
  Template.index.helpers({
    noSession: function() {
      return Session.equals('sessionId', null);
    },
  });

  return null;

});