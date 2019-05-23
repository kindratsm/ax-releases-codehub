(function() {
  "use strict";

  angular.module("axReleases.widgets").component("entityAdd", {
    templateUrl: "widgets/entity-add/entity-add.component.html",
    controller: EntityAddController,
    controllerAs: "$ctrl"
  });

  EntityAddController.$inject = [];
  function EntityAddController() {
    const ctrl = this;
  }
})();
