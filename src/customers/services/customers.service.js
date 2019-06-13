(function () {
  'use strict';

  angular.module('axReleases.customers')
    .service('customersService', CustomersService);

  CustomersService.$inject = ['requestService'];
  function CustomersService(requestService) {
    this.getCountries = getCountries;
    this.getCountry = getCountry;
    this.createCountry = createCountry;
    this.updateCountry = updateCountry;
    this.deleteCountry = deleteCountry;

    this.getCustomers = getCustomers;
    this.getCustomer = getCustomer;
    this.createCustomer = createCustomer;
    this.updateCustomer = updateCustomer;
    this.deleteCustomer = deleteCustomer;

    const countryEntity = 'Country';
    const customerEntity = 'Customer';

    function getCountries() {
      return requestService.getArray(countryEntity);
    }

    function getCountry(id) {
      return requestService.getObject(countryEntity, id);
    }

    function createCountry(country) {
      return requestService.createObject(countryEntity, country);
    }

    function updateCountry(country) {
      return requestService.updateObject(countryEntity, country);
    }

    function deleteCountry(id) {
      return requestService.deleteObject(countryEntity, id);
    }

    function getCustomers() {
      return requestService.getArray(customerEntity);
    }

    function getCustomer(id) {
      return requestService.getObject(customerEntity, id);
    }

    function createCustomer(customer) {
      return requestService.createObject(customerEntity, customer);
    }

    function updateCustomer(customer) {
      return requestService.updateObject(customerEntity, customer);
    }

    function deleteCustomer(id) {
      return requestService.deleteObject(customerEntity, id);
    }
  }
})();