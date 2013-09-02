define('pageHelpers', [], function() {
  'use strict';

  return {

    onExistingSessionPage: function() {
      return Session.equals('page', 'existingSession');
    },

    onReportPage: function() {
      return Session.equals('page', 'report');
    },

  };

});