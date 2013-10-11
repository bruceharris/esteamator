define('userEstimate', ['collections', 'estimateHelpers'], function(collections, helpers) {
  'use strict';

  Template.userEstimate.events = {
    'change .estimateValue input': setEstimate,
    'click .userActions a.editName': enterEditModeForUserName,
    'change .username input': setUserName
  };

  function setEstimate(event, template) {
    collections.estimates.insert({
      sessionId: helpers.sessionId(),
      userId: helpers.currentUser()._id,
      workItemId: helpers.currentWorkItem()._id,
      value: template.find('.estimateValue input').value
    });
  }

  function setUserName(event, template) {
    var newName = template.find('.username input').value,
        user = Session.get('user');
    collections.users.update(user._id, {$set: { name: newName } });
    // TODO only set on success
    user.name = newName;
    Session.set('user', user);
    Session.set('isEditingUserName', false);
  }

  function enterEditModeForUserName(event, template) {
    event.preventDefault();
    Session.set('isEditingUserName', true);
  }

  /////////////////////

  var templateMethods = {

    userIsMe: function() {
      return this.name === helpers.currentUser().name;
    },

    userSubmittedEstimate: function() {
      return helpers.estimateForCurrentWorkItemForUser(this._id) !== null;
    },

    estimateValue: function() {
      return helpers.estimateForCurrentWorkItemForUser(this._id);
    },

    isEditingUserName: function() {
      return this.name === helpers.currentUser().name && Session.get('isEditingUserName');
    },

    shouldShowEditLinkForUserName: function() {
      return this.name === helpers.currentUser().name && !Session.get('isEditingUserName');
    },

    statusCssClass: function() {
      var alreadySubmitted = helpers.estimateForCurrentWorkItemForUser(this._id) !== null;
      return alreadySubmitted ? 'submitted' : 'pending';
    }

  };


  Template.userEstimate.helpers(templateMethods);

  Template.userEstimate.helpers({
    allEstimatesSubmitted: helpers.allEstimatesSubmitted,
  });

  return null;

});