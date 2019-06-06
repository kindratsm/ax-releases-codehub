(function () {
  "use strict";

  angular.module("axReleases").config(configure);

  configure.$inject = ["$provide", "$logProvider", "$compileProvider"];

  function configure($provide, $logProvider, $compileProvider) {
    $provide.decorator('$exceptionHandler', GlobalExceptionHandler);
    $logProvider.debugEnabled(true);
    $compileProvider.debugInfoEnabled(true);
  }

  GlobalExceptionHandler.$inject = ['$delegate'];

  function GlobalExceptionHandler($delegate) {
    return function (exception, cause) {
      toastr.error(exception);
      $delegate(exception, cause);
    };
  }
})();
