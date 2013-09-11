define('inputUsername', ['collections', 'estimateHelpers'], function(collections, estimateHelpers) {
  'use strict';

  var duplicateUsernameKey = 'error.duplicateUsername';

  Template.inputUsername.helpers({

    usernameIsDuplicate: function() {
      return !Session.equals(duplicateUsernameKey, null);
    },

    proposedDupeName: function() {
      return Session.get(duplicateUsernameKey);
    }

  });

  Template.inputUsername.events({
    'change input': registerUsername,
    'click a.willChange': clearError,
    'click a.sameUser': assumeIdentityOfExistingUser
  });

  function registerUsername(event, template) {
    var name = template.find('input').value,
        usernames = estimateHelpers.usersInSession().map(function(u) { return u.name; });

    if (_(usernames).contains(name)) {
      Session.set(duplicateUsernameKey, name);
      return;
    }

    var user = {
  	  sessionId: Session.get('sessionId'),
  	  name: name 
    };

    collections.users.insert(user, uponInsert);

    function uponInsert(err, id) {
      if (err) {
        // TODO graceful error handling
        return;
      }
      setUserLocally(_(user).extend({ _id: id }));
    }

  }

  function clearError() {
    Session.set(duplicateUsernameKey, null);
  }

  function assumeIdentityOfExistingUser() {
    var name = Session.get(duplicateUsernameKey),
        users = estimateHelpers.usersInSession(),
        user = _(users).find(function(u) { return name === u.name; });

    setUserLocally(user);
  }

  function setUserLocally(user) {
    window.sessionStorage.setItem('userId', user._id);
    Session.set('user', user);
    Session.set(duplicateUsernameKey, null);
  }

  return null;

});
