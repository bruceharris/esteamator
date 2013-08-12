/**
  Sessions { _id: 'mongo generated unique id' }
*/
Sessions = new Meteor.Collection("sessions");

/**
  Users {
    _id: 'mongo generated unique id',
  	sessionId: 'session._id',
  	name: 'user name'
  }
*/
Users = new Meteor.Collection("users");

/**
  WorkItems {
    _id: 'mongo generated unique id',
    sessionId: 'session._id',
	  index: '1 based index of work items in this session'
  }
*/
WorkItems = new Meteor.Collection("workItems");

/**
  Estimates {
    _id: 'mongo generated unique id',
	  sessionId: 'session._id'
	  workItemId: 'workItem._id'
	  userId: 'user._id',
	  value: 'estimate value'
  }
*/
Estimates = new Meteor.Collection("estimates");
