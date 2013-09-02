define('inputUsername', ['collections'], function(collections) {
  'use strict';

  Template.inputUsername.events({ 'change input': registerUsername });

  function registerUsername(event, template) {
    var user = {
  	  sessionId: Session.get('sessionId'),
  	  name: $(template.find('input')).val()
    };
    var userId = collections.users.insert(user);
    user = _(user).extend({ _id: userId });
    Session.set('user', user);
    window.sessionStorage.setItem('userId', userId);
  }

  return null;

});
