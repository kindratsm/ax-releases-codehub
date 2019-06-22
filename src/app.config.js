(function () {
  "use strict";

  angular.module("axReleases").config(configure);

  configure.$inject = ["$provide", "$logProvider", "$compileProvider", 'toastr'];

  function configure($provide, $logProvider, $compileProvider, toastr) {
    //Configure global exception handler
    $provide.decorator('$exceptionHandler', GlobalExceptionHandler);

    $logProvider.debugEnabled(true);
    $compileProvider.debugInfoEnabled(true);

    // Configure toastr
    toastr.options.escapeHtml = true;
    toastr.options.closeButton = true;
    toastr.options.progressBar = true;
  }

  GlobalExceptionHandler.$inject = ['$delegate'];

  function GlobalExceptionHandler($delegate) {
    return function (exception, cause) {
      toastr.error(JSON.stringify(exception));
      $delegate(exception, cause);
    };
  }
})();
