(function() {
  "use strict";

  angular.module("axReleases").component("app", {
    templateUrl: "app.component.html",
    controller: AppController,
    controllerAs: "$ctrl"
  });

  AppController.$inject = [];
  function AppController() {
    var $ctrl = this;

    ////////////////

    $ctrl.$onInit = function() {};
    $ctrl.$onChanges = function(changesObj) {};
    $ctrl.$onDestroy = function() {};
  }
})();
