define('inputUsername', ['collections'], function(collections) {
  'use strict';

  Template.inputUsername.events({ 'change input': registerUsername });

  function registerUsername(event, template) {

    var user = {
  	  sessionId: Session.get('sessionId'),
  	  name: template.find('input').value
    };

    collections.users.insert(user, uponInsert);

    function uponInsert(err, id) {
      if (err) {
        // TODO graceful error handling
        return;
      }
      user = _(user).extend({ _id: id });
      Session.set('user', user);
      window.sessionStorage.setItem('userId', id);
    }

  }

  return null;

});
