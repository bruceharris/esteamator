define('report', ['collections', 'estimateHelpers'], function(collections, helpers) {
  'use strict';

  Template.report.helpers(helpers);

  function hasSummary(workItem) {
    return !!workItem.summary;
  }

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
        workItems = _(helpers.workItemsInSession()).filter(hasSummary),
        users = helpers.usersInSession(),
        estimates = collections.estimates.find(helpers.newSessionQuery()).fetch();

    _(workItems).each(function(item) {
      var estimatesForItem = _(estimates).filter(function(estimate) {
        return estimate.workItemId === item._id;
      });

      result.push({
        workItem: item,
        summaryMetrics: helpers.workItemSummaryMetrics(item.summary),
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

  Template.report.summaryHeaders = function() {
    var workItems = helpers.workItemsInSession();
    if (!workItems.length) return null;
    var summary = workItems[0].summary;
    if (!summary) return null;

    return helpers.workItemSummaryMetrics(summary).map(function(metric) {
      return metric.description;
    });
  };

  return null;

});