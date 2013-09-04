define('userEstimate', ['collections', 'estimateHelpers'], function(collections, helpers) {
  'use strict';

  Template.userEstimate.events = {
    'change .estimateValue input': setEstimate
  };

  function setEstimate(event, template) {
      collections.estimates.insert({
        sessionId: helpers.sessionId(),
        userId: helpers.currentUser()._id,
        workItemId: helpers.currentWorkItem()._id,
        value: template.find('.estimateValue input').value
      });
  }

  Template.userEstimate.userIsMe = function() {
    return this.name === helpers.currentUser().name;
  };

  Template.userEstimate.userSubmittedEstimate = function() {
    return helpers.estimateForCurrentWorkItemForUser(this._id) !== null;
  };

  Template.userEstimate.estimateValue = function() {
    return helpers.estimateForCurrentWorkItemForUser(this._id);
  };

  Template.userEstimate.allEstimatesSubmitted = helpers.allEstimatesSubmitted;

  return null;

});