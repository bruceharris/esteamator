define('collections', [], function() {
  'use strict';

  return {

    // sessions { _id: 'mongo generated unique id' }
    sessions:  new Meteor.Collection("sessions"),

    // users {
    //   _id: 'mongo generated unique id',
    // 	sessionId: 'session._id',
    // 	name: 'user name'
    // }
    users: new Meteor.Collection("users"),

    // workItems {
    //   _id: 'mongo generated unique id',
    //   sessionId: 'session._id',
    //   index: '1 based index of work items in this session',
    //   description: 'brief summary of user story'
    // }
    workItems: new Meteor.Collection("workItems"),

    // estimates {
    //   _id: 'mongo generated unique id',
    //  sessionId: 'session._id'
    //  workItemId: 'workItem._id'
    //  userId: 'user._id',
    //  value: 'estimate value'
    // }
    estimates: new Meteor.Collection("estimates")

  };

});
