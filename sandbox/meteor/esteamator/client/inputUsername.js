Template.inputUsername.events({ 'click button': registerUsername });

function registerUsername(event, template){
  var username = $(template.find('input')).val();
  var user = {
  	sessionId: Session.get('sessionId'),
  	name: username
  };
  var userId = Users.insert(user);
  user = _(user).extend({ _id: userId });
  Session.set('user', user);
  console.log('user', user);
}