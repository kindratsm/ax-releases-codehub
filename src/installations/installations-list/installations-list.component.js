(function () {
  "use strict";

  angular.module("axReleases.installations").component("installationsList", {
    templateUrl: "installations/installations-list/installations-list.component.html",
    controller: InstallationsListController,
    controllerAs: "$ctrl"
  });

  InstallationsListController.$inject = [];

  function InstallationsListController() {
    const ctrl = this;
  }
})();
