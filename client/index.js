define('index', ['pageHelpers'], function(helpers) {
  'use strict';

  Template.index.helpers(helpers);
  Template.index.helpers({
    noSession: function() {
      return Session.equals('sessionId', null);
    },
  });

  return null;

});