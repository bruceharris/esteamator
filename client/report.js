define('report', ['collections', 'estimateHelpers'], function(collections, helpers) {
  'use strict';

  Template.report.helpers(helpers);

  /**
   * Create a matrix by work item by user to ensure we map
   * estimates to proper user for display in table output.
   * Need to account for the possibility of certain work items
   * not having an estimate from every user (users may have
   * joined session late or left early).
   *
   * @return array of objects with properties {
   *    workItem: workItem
   *    estimatesByUser: array of estimate values, ordered by users in session
   *  } 
   *    
   */
  Template.report.estimatesByWorkItemByUser = function() {
    var result = [],
        workItems = helpers.workItemsInSession(),
        users = helpers.usersInSession(),
        estimates = collections.estimates.find(helpers.newSessionQuery()).fetch();

    _(workItems).each(function(item) {
      var estimatesForItem = _(estimates).filter(function(estimate) {
        return estimate.workItemId === item._id;
      });

      result.push({
        workItem: item,
        estimatesByUser: users.map(estimateOrNA)
      });

      function estimateOrNA(user) {
        var estimate = _(estimatesForItem).find(matchingUser);
        return _.isUndefined(estimate) ? 'n/a' : estimate.value;

        function matchingUser(estimate) {
          return estimate.userId === user._id;
        }
      }

    });

    return result;
  }

  return null;

});