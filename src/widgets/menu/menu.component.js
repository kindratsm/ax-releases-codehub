(function () {
  'use strict';

  angular
    .module('axReleases.widgets')
    .component('axMenu', {
      templateUrl: 'widgets/menu/menu.component.html',
      controller: MenuController,
    });

  MenuController.$inject = ['$state'];
  function MenuController($state) {
    var $ctrl = this;
    $ctrl.$onInit = onInit;
    $ctrl.menu = [];

    ////////////////

    function onInit() {
      angular.forEach($state.get(), state => {
        if (!!state.isMenuItem) {
          $ctrl.menu.push(state);
        }
      });
    }
  }
})();