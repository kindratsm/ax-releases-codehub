(function() {
  "use strict";

  angular.module("axReleases.users").component("userAdd", {
    templateUrl: "users/user-add/user-add.component.html",
    controller: UserAddController,
    controllerAs: "$ctrl"
  });

  UserAddController.$inject = [];
  function UserAddController() {
    const ctrl = this;
  }
})();
