(function () {
  'use strict';

  angular
    .module('axReleases.core')
    .run(runBlock);

  runBlock.$inject = ['$transitions', 'toastr'];
  function runBlock($transitions, toastr) {
    $transitions.onError({}, t => {
      toastr.error(JSON.stringify(t.error()));
    });
  }
})();