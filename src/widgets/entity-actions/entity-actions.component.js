(function () {
  "use strict";

  angular.module("axReleases.widgets")
    .component("entityActions", {
      templateUrl: "widgets/entity-actions/entity-actions.component.html",
      controller: EntityActionsController,
      bindings: {
        entityId: '<',
        isMasterDetail: '<',
        onCreate: '&',
        onUpdate: '&',
        onCancel: '&'
      }
    });

  EntityActionsController.$inject = [];

  function EntityActionsController() {
    const ctrl = this;
    ctrl.$onInit = onInit;

    function onInit() {

    }
  }
})();
