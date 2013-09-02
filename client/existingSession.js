define('existingSession', ['collections'], function(collections) {
  'use strict';

  Template.existingSession.helpers({

    noUser: function() {
      return Session.equals('user', null);
    },

    shouldShowFullShareLink: function() {
      var query = { sessionId: Session.get('sessionId') };
      var users = collections.users.find(query).fetch();
      return users.length < 2;
    }

  });

  return null;

});