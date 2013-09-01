'use strict';

Template.existingSession.helpers({

  noUser: function() {
    return Session.equals('user', null);
  },

});