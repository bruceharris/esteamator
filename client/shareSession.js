'use strict';

Template.shareSession.helpers({

  url: function() {
    return window.location;
  },

  mailHref: function() {
    return 'mailto:?subject=Esteamator%20Session&body=' + window.location;
  }

});