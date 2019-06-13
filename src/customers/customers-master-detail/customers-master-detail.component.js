(function () {
  'use strict';

  angular.module('axReleases.customers')
    .component('customersMasterDetail', {
      templateUrl: 'customers/customers-master-detail/customers-master-detail.component.html',
      controller: CustomersMasterDetailController
    });

  CustomersMasterDetailController.$inject = ['$scope'];
  function CustomersMasterDetailController($scope) {
    var ctrl = this;
    ctrl.refresh = refresh;

    function refresh() {
      $scope.$broadcast('refresh');
    }
  }
})();