Template.inputUsername.events({ 'change input': registerUsername });

function registerUsername(event, template){
  var user = {
  	sessionId: Session.get('sessionId'),
  	name: $(template.find('input')).val()
  };
  var userId = Users.insert(user);
  user = _(user).extend({ _id: userId });
  Session.set('user', user);
}