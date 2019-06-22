(function () {
  'use strict';

  angular
    .module('axReleases.customers')
    .component('customerDetails', {
      templateUrl: 'customers/customer-details/customer-details.component.html',
      controller: CustomerDetailsController,
      bindings: {
        customerId: '<',
        onAction: '&'
      },
    });

  CustomerDetailsController.$inject = ['common', 'logger', 'customersService'];
  function CustomerDetailsController(common, logger, customersService) {
    var ctrl = this;
    ctrl.$onInit = onInit;
    ctrl.$onChanges = onChanges;
    ctrl.onCreate = onCreate;
    ctrl.onUpdate = onUpdate;
    ctrl.onCancel = onCancel;

    // Init empty customer
    ctrl.customer = {};

    function onInit() {
      customersService.getCountries()
        .then(data => {
          ctrl.countriesArray = data;
        });
    }

    function onChanges(changesObj) {
      if (!!changesObj.customerId) {
        const id = changesObj.customerId.currentValue;
        if (common.isValidId(id)) {
          customersService.getCustomer(changesObj.customerId.currentValue)
            .then(data => {
              ctrl.customer = data;
            });
        }
      }
    }

    function onCreate(event) {
      customersService.createCustomer(ctrl.customer)
        .then(data => {
          ctrl.onAction();
        });
    }

    function onUpdate(event) {
      customersService.updateCustomer(ctrl.customer)
        .then(data => {
          ctrl.onAction();
        });
    }

    function onCancel(event) {
      logger.warn('Cancel');
      console.warn(event);
      ctrl.onAction();
    }
  }
})();