(function () {
  "use strict";

  angular
    .module("axReleases.customers")
    .component("customersList", {
      templateUrl: "customers/customers-list/customers-list.component.html",
      controller: CustomersListController,
      bindings: {
        onSelect: '&'
      }
    });

  CustomersListController.$inject = ['$scope', 'customersService'];

  function CustomersListController($scope, customersService) {
    const ctrl = this;
    ctrl.$onInit = onInit;
    ctrl.select = select;

    $scope.$on('refresh', onRefresh);

    function onInit() {
      loadCustomers();
    }

    function loadCustomers() {
      customersService.getCustomers()
        .then(data => {
          ctrl.customersArray = data;
        });
    }

    function onRefresh() {
      loadCustomers();
    }

    function select(customer) {
      ctrl.onSelect({ id: customer.Id });
    }
  }
})();
