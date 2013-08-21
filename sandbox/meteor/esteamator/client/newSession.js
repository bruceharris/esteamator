define('newSession', ['router'], function(router){

  Template.newSession.events({ 'click button': createNewSession });

  function createNewSession(){
    var sessionId = Sessions.insert({});
    Session.set("sessionId", sessionId);
    console.log("created session " + sessionId);
    router.setSession(sessionId);
    var itemId = WorkItems.insert({
  	  sessionId: sessionId,
  	  index: 1
    });
    Session.set('currentWorkItemId', itemId);
  }

});
