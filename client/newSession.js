define('newSession', ['router', 'collections'], function(router, collections){
  'use strict';

  Template.newSession.events({ 'click button.startEstimating': createNewSession });

  function createNewSession() {
    collections.sessions.insert({}, onSessionInsert);
  }

  function onSessionInsert(err, sessionId) {
    if (err) {
      // TODO handle error
      return;
    }

    Session.set('sessionId', sessionId);
    router.setSession(sessionId);
    createFirstWorkItem(sessionId);
  }

  function createFirstWorkItem(sessionId) {
    var workItem = {
      sessionId: sessionId,
      index: 1
    };

    collections.workItems.insert(workItem, onWorkItemInsert);
  }

  function onWorkItemInsert(err, itemId) {
    if (err) {
      // TODO handle error
      return;
    }

    Session.set('currentWorkItemId', itemId);
  }

  return null;

});
