// if the database is empty on server start, create initial collection
Meteor.startup(function () {
  /*
  if (Sessions.find().count() === 0) {
    console.log('no sessions');
  } else {
    console.log(Sessions.find().count() + ' sessions');
  }
  */
});