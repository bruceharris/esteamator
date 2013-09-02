define('navigation',
  ['pageHelpers', 'estimateHelpers', 'collections'],
  function(pageHelpers, estimateHelpers, collections) {

  'use strict';

  function atLeastOneItemEstimated() {
    return estimateHelpers.workItemsInSession().length > 1;
  }

  function sessionHref() {
    return '/session/' + Session.get('sessionId');
  }

  Template.navigation.helpers(pageHelpers);
  Template.navigation.helpers({

    sessionHref: sessionHref,

    reportHref: function() {
      return sessionHref() + '/report';
    },

    shouldShowReportLink: function() {
      return atLeastOneItemEstimated() && pageHelpers.onExistingSessionPage();
    }

  });

  return null;

});