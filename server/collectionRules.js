define('collectionRules', ['collections'], function(collections) {
  'use strict';

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
      console.log(doc.name, isNonBlankString(doc.name));
      return isNonBlankString(doc.name);
    },

    update: function(userId, doc, fields, modifer) {
      // TODO
      return true;
    }

  });

  return null;

});