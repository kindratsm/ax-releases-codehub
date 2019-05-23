(function () {
  "use strict";

  angular.module("axReleases.widgets").component("entityEdit", {
    templateUrl: "widgets/entity-edit/entity-edit.component.html",
    controller: EntityEditController,
    controllerAs: "$ctrl"
  });

  EntityEditController.$inject = [];

  function EntityEditController() {
    const ctrl = this;
  }
})();
