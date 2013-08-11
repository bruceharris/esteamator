Template.inputUsername.events({ 'click button': registerUsername });

function registerUsername(event, template){
  var username = $(template.find('input')).val();
  Session.set('username', username);
  var sessionId = Session.get('sessionId');
  console.log("sessionId ", sessionId);
  var userId = Users.insert({
  	sessionId: sessionId,
  	name: username
  });
  console.log("userId ", userId);
}