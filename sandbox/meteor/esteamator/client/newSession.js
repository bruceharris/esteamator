Template.newSession.events({ 'click button': createNewSession });

function createNewSession(){
  var sessionId = Sessions.insert({});
  Session.set("sessionId", sessionId);
  console.log("created session " + sessionId);
  Router.setSession(sessionId);
  var itemId = WorkItems.insert({
  	sessionId: sessionId,
  	index: 0
  });
  Session.set('currentWorkItemId', itemId);
}