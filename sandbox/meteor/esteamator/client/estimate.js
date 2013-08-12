///////////////////
// helper functions

function estimatesForCurrentWorkItem(additionalCriteria) {
  var query = {
    sessionId: sessionId(),
    workItemId: currentWorkItem()._id
  };
  var result = Estimates.find(_(query).extend(additionalCriteria)).fetch();
  return result;
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

  console.log('result', result);
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
  console.log('#', estimatesForCurrentWorkItem().length);
  return estimatesForCurrentWorkItem().length === usersInSession().length;
}

/////////////////////
// Template.estimate

Template.estimate.user = currentUser;

Template.estimate.currentWorkItem = currentWorkItem;

Template.estimate.usersInSession = usersInSession;

Template.estimate.allEstimatesSubmitted = allEstimatesSubmitted;

////////////////////////
// Template.userEstimate

Template.userEstimate.events = {
  'click .estimateValue button': function() {
    var x = {
      sessionId: sessionId(),
      userId: currentUser()._id,
      workItemId: currentWorkItem()._id,
      value: $('.estimateValue input').val()
    };
    console.log('---------x', x)
    var id = Estimates.insert(x);
    console.log('click', id, $('.estimateValue input').val());
  }
};

Template.userEstimate.userIsMe = function() {
  return this.name === currentUser().name;
};

Template.userEstimate.userSubmittedEstimate = function() {
  return estimateForCurrentWorkItemForUser(this._id) !== null;
};

Template.userEstimate.estimateValue = function() {
  console.log('ue', estimateForCurrentWorkItemForUser(currentUser()._id));
  return estimateForCurrentWorkItemForUser(currentUser()._id);
};

Template.userEstimate.allEstimatesSubmitted = allEstimatesSubmitted;