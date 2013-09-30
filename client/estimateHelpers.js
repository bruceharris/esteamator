define('estimateHelpers', ['collections'], function(collections) {
  'use strict';

  // TODO change to constructor? rename?
  function newSessionQuery(selector) {
    var query = {
      sessionId: Session.get('sessionId')
    };
    return _(query).extend(selector);
  }

  var helpers = {

    newSessionQuery: newSessionQuery,

    estimatesForCurrentWorkItem: function(additionalCriteria) {
      var query = newSessionQuery({ workItemId: this.currentWorkItem()._id });
      return collections.estimates.find(_(query).extend(additionalCriteria)).fetch();
    },

    estimateForCurrentWorkItemForUser: function(userId) {
      var estimateForUser = this.estimatesForCurrentWorkItem({ userId: userId });
      return (estimateForUser.length === 0 ? null : estimateForUser[0].value);
    },

    sessionId: function() {
      return Session.get('sessionId');
    },

    workItemsInSession: function() {
      return collections.workItems.find(
        newSessionQuery(),
        { sort: { index: 1 }}
      ).fetch();
    },

    currentWorkItem: function() {
      var result = collections.workItems.findOne(
        newSessionQuery(),
        { sort: { index: -1 }}
      );

      // TODO error handling here

      Session.set('currentWorkItemId', result._id);
      return result;
    },

    currentWorkItemSummaryMetrics: function() {
      var summary = this.currentWorkItem().summary,
          keys = ['min', 'max', 'spread', 'mean', 'stdDev'],
          descriptions = {
            min: 'Lowest',
            max: 'Highest',
            spread: 'Spread',
            mean: 'Mean',
            stdDev: 'Standard Deviation'
          };

      return keys.map(function(key) {
        return {
          description: descriptions[key],
          value: summary[key]
        };
      });
    },

    usersInSession: function() {
      return collections.users.find(
        newSessionQuery(),
        { sort: { name: 1 }}
      ).fetch();
    },

    currentUser: function() {
      return Session.get('user');
    },

    allEstimatesSubmitted: function() {
      return this.estimatesForCurrentWorkItem().length === this.usersInSession().length;
    }

  };

  var bindAllToSelf = function(methodName) {
    helpers[methodName] = _.bind(helpers[methodName], helpers);
  };

  _(helpers).keys().forEach(bindAllToSelf);

  return helpers;

});