Template.estimate.username = function () {
  return Session.get('username');
};

Template.estimate.currentWorkItem = function () {
  var a = Session.get('currentWorkItem');
  console.log('a ', a, 'wi', WorkItems.find({}).count());

  console.log('all workItems', WorkItems.find({}).fetch());
  var currentWorkItem = WorkItems.findOne({_id: a});
  console.log(currentWorkItem);
  return currentWorkItem;
};