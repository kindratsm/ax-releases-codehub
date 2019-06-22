(function () {
  'use strict';

  angular
    .module('axReleases.core')
    .run(runBlock);

  runBlock.$inject = ['$transitions'];
  function runBlock($transitions, toastr) {
    $transitions.onError({}, t => {
      toastr.error(t.error());
    });
  }
})();