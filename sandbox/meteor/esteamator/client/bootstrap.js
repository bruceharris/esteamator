define('bootstrap', ['collections'], function(collections) {

  Deps.autorun(setUserToSessionIfStoredLocally);

  function setUserToSessionIfStoredLocally() {
    if (!Session.equals('user', null)) return;

    var localUserId = window.sessionStorage.getItem('userId');
    var sessionId = Session.get('sessionId');
    if (!localUserId || !sessionId) return;

    var user = collections.users.findOne({ _id: localUserId, sessionId: sessionId });
    if (user) Session.set('user', user);
  }

});