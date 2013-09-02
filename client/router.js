define('router', [], function() {
  'use strict';

  var EsteamatorRouter = Backbone.Router.extend({

    routes: {
      'session/:sessionId': 'existingSession',
      'session/:sessionId/report': 'report'
    },

    ///////////////////
    // route handlers

    existingSession: function (sessionId) {
      Session.set('page', 'existingSession');
      Session.set('sessionId', sessionId);
    },

    report: function(sessionId) {
      Session.set('page', 'report');
      Session.set('sessionId', sessionId);
    },

    /////////////////////
    // navigation methods

    setSession: function (sessionId) {
      this.navigate('session/' + sessionId, true);
    }

  });

  var router = new EsteamatorRouter;

  Meteor.startup(function () {
    Backbone.history.start({pushState: true});
  });

  return router;

});
