define('estimate', ['collections', 'estimateHelpers'], function(collections, helpers) {
  'use strict';

  Template.estimate.events = {
    'click #nextItem': createNextWorkItem,
    'change input.description': setWorkItemDescription
  };

  Template.estimate.helpers(helpers);

  function createNextWorkItem(event, template) {
    var nextIndex = helpers.currentWorkItem().index + 1;
    var itemId = collections.workItems.insert({
      sessionId: helpers.sessionId(),
      index: nextIndex
    });
    Session.set('currentWorkItemId', itemId);
  }

  function setWorkItemDescription(event, template) {
    collections.workItems.update(
      Session.get('currentWorkItemId'),
      {$set: {description: template.find('input.description').value } }
    );
  }

  return null;

});