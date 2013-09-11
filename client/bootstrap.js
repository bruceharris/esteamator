define('bootstrap', ['collections'], function(collections) {
  'use strict';

  Session.setDefault('sessionId', null);
  Session.setDefault('user', null);
  Session.setDefault('currentWorkItemId', null);
  Session.setDefault('page', null);
  Session.setDefault('isEditingWorkItemDescription', false);
  Session.setDefault('isEditingUserName', false);
  Session.setDefault('error.duplicateUsername', null);

  Deps.autorun(subscribeToDataCollections);
  Deps.autorun(setUserToSessionIfStoredLocally);

  function subscribeToDataCollections() {
    _(['workItems', 'users', 'estimates']).forEach(function(collection){
      Meteor.subscribe(collection, Session.get('sessionId'));
    });
  }

  function setUserToSessionIfStoredLocally() {
    if (!Session.equals('user', null)) return;

    var localUserId = window.sessionStorage.getItem('userId');
    var sessionId = Session.get('sessionId');
    if (!localUserId || !sessionId) return;

    var user = collections.users.findOne({ _id: localUserId, sessionId: sessionId });
    if (user) Session.set('user', user);
  }

});