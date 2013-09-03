define('estimate', ['collections', 'estimateHelpers'], function(collections, helpers) {
  'use strict';

  Template.estimate.events = {
    'click #nextItem': createNextWorkItem,
    'change input.description': setWorkItemDescription,
    'click a#editDescription': enterEditMode
  };

  Template.estimate.helpers(helpers);
  Template.estimate.helpers({

    descriptionIsEditable: function() {
      return !helpers.currentWorkItem().description || Session.get('isEditingWorkItemDescription');
    },

    placeholder: function() {
      return helpers.currentWorkItem().description || 'optional summary of user story';
    }

  });

  function createNextWorkItem(event, template) {
    var nextIndex = helpers.currentWorkItem().index + 1;
    var itemId = collections.workItems.insert({
      sessionId: helpers.sessionId(),
      index: nextIndex
    });
    Session.set('currentWorkItemId', itemId);
  }

  function setWorkItemDescription(event, template) {
    Session.set('isEditingWorkItemDescription', false);
    collections.workItems.update(
      Session.get('currentWorkItemId'),
      {$set: {description: template.find('input.description').value } }
    );
  }

  function enterEditMode(event, template) {
    Session.set('isEditingWorkItemDescription', true);
  }

  return null;

});