(function () {
  'use strict';

  angular
    .module('axReleases.services')
    .service('logger', Logger);

  Logger.$inject = [];
  function Logger() {
    this.info = info;
    this.warn = warn;
    this.error = error;

    function info(message) {
      console.info(`[info] ${message}`);
    }

    function warn(message) {
      console.warn(`[warning] ${message}`);
    }

    function error(message) {
      console.error(`[error] ${message}`);
    }
  }
})();