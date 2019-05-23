(function() {
  "use strict";

  angular.module("axReleases.users").component("usersList", {
    templateUrl: "users/users-list/users-list.component.html",
    controller: UsersListController,
    controllerAs: "$ctrl"
  });

  UsersListController.$inject = [];
  function UsersListController() {
    const ctrl = this;
  }
})();
