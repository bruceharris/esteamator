define('router', [], function() {

  var EsteamatorRouter = Backbone.Router.extend({

    routes: {
      "session/:sessionId": "main"
    },

    main: function (sessionId) {
      Session.set("sessionId", sessionId);
    },

    setSession: function (sessionId) {
      this.navigate("session/" + sessionId, true);
    }

  });

  var router = new EsteamatorRouter;

  Meteor.startup(function () {
    Backbone.history.start({pushState: true});
  });

  return router;

});
