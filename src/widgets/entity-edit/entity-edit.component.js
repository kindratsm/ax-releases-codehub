(function () {
  "use strict";

  angular.module("axReleases.widgets").component("entityEdit", {
    templateUrl: "widgets/entity-edit/entity-edit.component.html",
    controller: EntityEditController,
    bindings: {
      onUpdate: '&',
      onCancel: '&'
    }
  });

  EntityEditController.$inject = [];

  function EntityEditController() {
    const ctrl = this;
    ctrl.$onInit = onInit;

    function onInit() {

    }
  }
})();
