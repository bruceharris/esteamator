///////////////////
// helper functions

function estimatesForCurrentWorkItem(additionalCriteria) {
  var query = {
    sessionId: sessionId(),
    workItemId: currentWorkItem()._id
  };
  return Estimates.find(_(query).extend(additionalCriteria)).fetch();
}

function estimateForCurrentWorkItemForUser(userId) {
  var estimateForUser = estimatesForCurrentWorkItem({ userId: userId });
  return (estimateForUser.length === 0 ? null : estimateForUser[0].value);
}

function sessionId() {
  return Session.get('sessionId');
}

function currentWorkItem() {
  var result = WorkItems.findOne(
    { sessionId: sessionId() },
    { sort: { index: -1 }}
  );

  Session.set('currentWorkItemId', result._id);
  return result;
}

function usersInSession() {
  return Users.find({ sessionId: sessionId() }).fetch();
}

function currentUser() {
  return Session.get('user');
};

function allEstimatesSubmitted() {
  return estimatesForCurrentWorkItem().length === usersInSession().length;
}

/////////////////////
// Template.estimate

Template.estimate.events = {
  'click #nextItem': function(event, template) {
    var nextIndex = currentWorkItem().index + 1;
    var itemId = WorkItems.insert({
      sessionId: sessionId(),
      index: nextIndex
    });
    Session.set('currentWorkItemId', itemId);
  }
};

Template.estimate.user = currentUser;

Template.estimate.currentWorkItem = currentWorkItem;

Template.estimate.usersInSession = usersInSession;

Template.estimate.allEstimatesSubmitted = allEstimatesSubmitted;

////////////////////////
// Template.userEstimate

Template.userEstimate.events = {
  'change .estimateValue input': function(event, template) {
    Estimates.insert({
      sessionId: sessionId(),
      userId: currentUser()._id,
      workItemId: currentWorkItem()._id,
      value: $('.estimateValue input').val()
    });
  }
};

Template.userEstimate.userIsMe = function() {
  return this.name === currentUser().name;
};

Template.userEstimate.userSubmittedEstimate = function() {
  return estimateForCurrentWorkItemForUser(this._id) !== null;
};

Template.userEstimate.estimateValue = function() {
  return estimateForCurrentWorkItemForUser(this._id);
};

Template.userEstimate.allEstimatesSubmitted = allEstimatesSubmitted;