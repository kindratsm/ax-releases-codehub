(function () {
  "use strict";

  angular.module("axReleases.users").component("usersList", {
    templateUrl: "users/users-list/users-list.component.html",
    controller: UsersListController,
    controllerAs: "$ctrl"
  });

  UsersListController.$inject = ['requestService'];

  function UsersListController(requestService) {
    const ctrl = this;
    ctrl.$onInit = onInit;

    function onInit() {
      requestService.getArray('User')
        .then(data => {
          ctrl.usersArray = data;
        })
    }
  }
})();
