define('estimate', ['collections', 'estimateHelpers'], function(collections, helpers) {

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

  return null;

});