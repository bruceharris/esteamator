define('estimate', ['collections', 'estimateHelpers'], function(collections, helpers) {

  /////////////////////
  // Template.estimate

  Template.estimate.events = {
    'click #nextItem': function(event, template) {
      var nextIndex = helpers.currentWorkItem().index + 1;
      var itemId = collections.workItems.insert({
        sessionId: helpers.sessionId(),
        index: nextIndex
      });
      Session.set('currentWorkItemId', itemId);
    }
  };

  Template.estimate.helpers(helpers);

  ////////////////////////
  // Template.userEstimate

  Template.userEstimate.events = {
    'change .estimateValue input': function(event, template) {
      collections.estimates.insert({
        sessionId: helpers.sessionId(),
        userId: helpers.currentUser()._id,
        workItemId: helpers.currentWorkItem()._id,
        value: $('.estimateValue input').val()
      });
    }
  };

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