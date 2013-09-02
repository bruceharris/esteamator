define('newSession', ['router', 'collections'], function(router, collections){
  'use strict';

  Template.newSession.events({ 'click button': createNewSession });

  function createNewSession() {
    var sessionId = collections.sessions.insert({});
    Session.set('sessionId', sessionId);
    router.setSession(sessionId);
    var itemId = collections.workItems.insert({
  	  sessionId: sessionId,
  	  index: 1
    });
    Session.set('currentWorkItemId', itemId);
  }

  return null;

});
