(function() {
  "use strict";

  // Usage:
  //
  // Creates:
  //

  angular.module("axReleases").component("axReleases", {
    templateUrl: "app.component.html",
    controller: ControllerController,
    controllerAs: "$ctrl"
  });

  ControllerController.$inject = [];
  function ControllerController() {
    var $ctrl = this;

    ////////////////

    $ctrl.$onInit = function() {};
    $ctrl.$onChanges = function(changesObj) {};
    $ctrl.$onDestroy = function() {};
  }
})();
