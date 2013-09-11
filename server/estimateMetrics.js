define('estimateMetrics', ['collections'], function(collections) {
  'use strict';

  forEachEstimateAdded(setWorkItemSummary);

  function forEachEstimateAdded(fn) {
    collections.estimates.find({}).observeChanges({ added: fn });
  }

  function setWorkItemSummary(estimateId, estimateFields) {
    var estimates = collections.estimates.find({ workItemId: estimateFields.workItemId }).fetch(),
        query = { _id: estimateFields.workItemId };

    collections.workItems.update(query, {
      $set: { summary: createSummary(estimates) }
    });
  }

  function createSummary(estimates) {
    var min = _(estimates).min(getValue).value,
        max = _(estimates).max(getValue).value,
        sum = estimates.reduce(sumOfValue, 0),
        mean = sum / estimates.length,
        sumOfSquaredDifferences = estimates.map(getValue).map(differenceToMean).reduce(sumSquares, 0),
        stdDev = Math.sqrt(sumOfSquaredDifferences / estimates.length);

    function differenceToMean(value) {
      return value - mean;
    }

    return {
      min: min,
      max: max,
      spread: max - min,
      mean: mean,
      stdDev: stdDev
    };

  }

  function getValue(estimate) {
    return estimate.value;
  } 

  function sumOfValue(memo, estimate) {
    return memo + +estimate.value;
  }

  function sumSquares(memo, value) {
    return value * value + memo;
  }

  return null;

});