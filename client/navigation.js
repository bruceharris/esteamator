define('navigation',
  ['pageHelpers', 'estimateHelpers', 'collections'],
  function(pageHelpers, estimateHelpers, collections) {

  'use strict';

  function atLeastOneItemEstimated() {
    return estimateHelpers.workItemsInSession().length > 1;
  }

  Template.navigation.helpers({

    reportHref: function() {
      return '/session/' + Session.get('sessionId') + '/report';
    },

    shouldShowReportLink: function() {
      return atLeastOneItemEstimated() && pageHelpers.onExistingSessionPage();
    }

  });

  return null;

});