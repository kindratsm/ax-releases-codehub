(function () {
  "use strict";

  angular
    .module("axReleases.customers")
    .component("customersList", {
      templateUrl: "customers/customers-list/customers-list.component.html",
      controller: CustomersListController,
      bindings: {
        onCreate: '&',
        onEdit: '&'
      }
    });

  CustomersListController.$inject = ['$scope', 'common', 'customersService'];

  function CustomersListController($scope, common, customersService) {
    const ctrl = this;
    ctrl.$onInit = onInit;
    ctrl.onDelete = onDelete;
    ctrl.select = select;

    $scope.$on('refresh', refresh);

    function onInit() {
      loadCustomers();
    }

    function loadCustomers() {
      customersService.getCustomers()
        .then(data => {
          ctrl.customersArray = data;
        });
    }

    function refresh() {
      loadCustomers();
    }

    function onDelete(id) {
      customersService.deleteCustomer(id)
        .then(() => {
          refresh();
        });
    }

    function select(customer) {
      if (!!customer && common.isValidId(customer.Id)) {
        ctrl.onEdit({
          id: customer.Id
        });
      }
    }
  }
})();
