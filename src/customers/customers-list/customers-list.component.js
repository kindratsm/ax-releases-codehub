(function() {
  "use strict";

  angular.module("axReleases.customers").component("customersList", {
    templateUrl: "customers/customers-list/customers-list.component.html",
    controller: CustomersListController,
    controllerAs: "$ctrl"
  });

  CustomersListController.$inject = [];
  function CustomersListController() {
    const ctrl = this;
  }
})();
