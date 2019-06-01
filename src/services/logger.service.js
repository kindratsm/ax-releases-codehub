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
      console.log(message);
    }

    function warn(message) {
      console.warn(message);
    }

    function error(message) {
      console.error(message);
    }
  }
})();