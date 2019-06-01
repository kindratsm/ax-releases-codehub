(function () {
  'use strict';

  angular.module('axReleases.filters').filter('percent', Percent);

  function Percent() {
    return PercentFilter;

    function PercentFilter(input) {
      return `${(input ? input : 0)}%`;
    }
  }
})();