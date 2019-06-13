(function () {
  "use strict";

  angular.module("axReleases.installations").component("installationsList", {
    templateUrl: "installations/installations-list/installations-list.component.html",
    controller: InstallationsListController,
    controllerAs: "$ctrl"
  });

  InstallationsListController.$inject = ['requestService'];

  function InstallationsListController(requestService) {
    const ctrl = this;
    ctrl.$onInit = onInit;

    function onInit() {
      requestService.getArray('Installation')
        .then(data => {
          ctrl.installationsArray = data;
        })
    }
  }
})();
