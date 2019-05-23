(function () {
  "use strict";

  angular.module("axReleases").config(configure);

  configure.$inject = ["$logProvider", "$compileProvider"];

  function configure($logProvider, $compileProvider) {
    $logProvider.debugEnabled(true);
    $compileProvider.debugInfoEnabled(true);
  }
})();
