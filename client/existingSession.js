'use strict';

Template.existingSession.helpers({

  noUser: function() {
    return Session.equals('user', null);
  },

  url: function() {
    return window.location;
  },

  mailHref: function() {
    return 'mailto:?subject=Esteamator%20Session&body=' + window.location;
  }

});