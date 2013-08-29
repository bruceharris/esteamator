define('estimateHelpers', ['collections'], function(collections) {

  var helpers = {

    estimatesForCurrentWorkItem: function(additionalCriteria) {
      var query = {
        sessionId: this.sessionId(),
        workItemId: this.currentWorkItem()._id
      };
      return collections.estimates.find(_(query).extend(additionalCriteria)).fetch();
    },

    estimateForCurrentWorkItemForUser: function(userId) {
      var estimateForUser = this.estimatesForCurrentWorkItem({ userId: userId });
      return (estimateForUser.length === 0 ? null : estimateForUser[0].value);
    },

    sessionId: function() {
      return Session.get('sessionId');
    },

    currentWorkItem: function() {
      var result = collections.workItems.findOne(
        { sessionId: this.sessionId() },
        { sort: { index: -1 }}
      );

      // TODO error handling here

      Session.set('currentWorkItemId', result._id);
      return result;
    },

    usersInSession: function() {
      return collections.users.find({ sessionId: this.sessionId() }).fetch();
    },

    currentUser: function() {
      return Session.get('user');
    },

    allEstimatesSubmitted: function() {
      return this.estimatesForCurrentWorkItem().length === this.usersInSession().length;
    }

  };

  // bind all to self
  _(helpers).keys().forEach(function(methodName) {
    helpers[methodName] = _.bind(helpers[methodName], helpers);
  });

  return helpers;

});