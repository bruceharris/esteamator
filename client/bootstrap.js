define('bootstrap', ['collections'], function(collections) {
  'use strict';

  // TODO: subscribe only to the ones we care about
  Meteor.subscribe('workItems');
  Meteor.subscribe('users');
  Meteor.subscribe('estimates');

  Session.setDefault('sessionId', null);
  Session.setDefault('user', null);
  Session.setDefault('currentWorkItemId', null);
  Session.setDefault('page', null);
  Session.setDefault('isEditingWorkItemDescription', false);


  Deps.autorun(setUserToSessionIfStoredLocally);

  function setUserToSessionIfStoredLocally() {
    if (!Session.equals('user', null)) return;

    var localUserId = window.sessionStorage.getItem('userId');
    var sessionId = Session.get('sessionId');
    if (!localUserId || !sessionId) return;

    var user = collections.users.findOne({ _id: localUserId, sessionId: sessionId });
    if (user) Session.set('user', user);
  }

});