(function () {
  "use strict";

  angular.module("axReleases").component("app", {
    templateUrl: "app.component.html",
    controller: AppController,
    controllerAs: "$ctrl"
  });

  AppController.$inject = [];

  function AppController() {
    const ctrl = this;

    ////////////////

    ctrl.title = "Axia Releases Application";
  }
})();
