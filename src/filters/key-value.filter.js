(function () {
  'use strict';

  angular.module('axReleases.filters').filter('keyValue', KeyValue);

  function KeyValue() {
    return KeyValueFilter;

    function KeyValueFilter(input) {
      if (!input) {
        return [];
      }

      const result = [];

      for (let property in input) {
        result.push({
          key: property,
          value: input[property]
        });
      }

      return result;
    }
  }
})();