Template.newSession.events({ 'click input': createNewSession });

function createNewSession(){
  console.log('wi', WorkItems);
  var sessionId = Sessions.insert({});
  Session.set("sessionId", sessionId);
  console.log("created session " + sessionId);
  Router.setSession(sessionId);
  var itemId = WorkItems.insert({
  	session: sessionId,
  	index: 0
  }, insertHandler);
  console.log('itemId', itemId);
  console.log('all items', WorkItems.find({}).fetch());
  console.log('all items count', WorkItems.find({}).count());
  Session.set('currentWorkItem', itemId);
}

function insertHandler(err, id) {
  console.log('err', err);
  console.log('id', id);
  console.log('in handler', WorkItems.find({}).count());
}