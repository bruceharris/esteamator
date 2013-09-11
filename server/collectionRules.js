define('collectionRules', ['collections'], function(collections) {
  'use strict';

  var anyInsert = {
    insert: function(userId, doc) {
      return true;
    }
  }

  // currently no restrictions on creating sessions or workItems
  collections.sessions.allow(anyInsert);
  collections.workItems.allow(anyInsert);

  function isValidEstimate(value) {
    return _.isFinite(value) && value >= 0;
  };

  collections.estimates.allow({

    insert: function(userId, doc) {
      return isValidEstimate(doc.value);
    },

    update: function(userId, doc, fields, modifer) {
      // TODO
      return true;
    }

  });

  function isNonBlankString(value) {
    return _.isString(value) && value.replace(/ /g, '').length > 0;
  }

  collections.users.allow({

    insert: function(userId, doc) {
      return isNonBlankString(doc.name);
    },

    update: function(userId, doc, fields, modifer) {
      // TODO
      return true;
    }

  });

  return null;

});