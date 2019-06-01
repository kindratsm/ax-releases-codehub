(function () {
  "use strict";

  angular.module("axReleases.widgets").component("entityAdd", {
    templateUrl: "widgets/entity-add/entity-add.component.html",
    controller: EntityAddController,
    bindings: {
      onCreate: '&',
      onCancel: '&'
    }
  });

  EntityAddController.$inject = [];

  function EntityAddController() {
    const ctrl = this;
    ctrl.$onInit = onInit;

    function onInit() {
    }
  }
})();
