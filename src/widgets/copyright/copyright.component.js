(function () {
  'use strict';

  angular.module('axReleases.widgets').component('copyright', {
    templateUrl: 'widgets/copyright/copyright.component.html',
    controller: CopyrightController,
    bindings: {
      company: '@',
      yearFrom: '@'
    },
  });

  CopyrightController.$inject = [];
  function CopyrightController() {
    var ctrl = this;
    ctrl.$onInit = onInit;

    function onInit() {
      const currentYear = new Date().getFullYear();
      if (currentYear == ctrl.yearFrom) {
        ctrl.year = currentYear;
      } else {
        ctrl.year = `${ctrl.yearFrom}-${currentYear}`;
      }
    }
  }
})();