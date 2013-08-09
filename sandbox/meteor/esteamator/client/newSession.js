Template.newSession.events({ 'click input': createNewSession });

function createNewSession(){
  console.log("foo");
  var sessionId = Sessions.insert({});
  Session.set("sessionId", sessionId);
  console.log("created session " + sessionId);
  Router.setSession(sessionId);
}