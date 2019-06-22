(function () {
  'use strict';

  angular
    .module('axReleases.customers')
    .config(configure);

  configure.$inject = ['$stateProvider'];
  function configure($stateProvider) {
    $stateProvider
      .state({
        name: 'customers',
        url: '/customers',
        title: 'Customers',
        component: 'customersList',
        isMenuItem: true,
        resolve: {
          onCreate: ['$state', $state => {
            return function () {
              $state.go('customer');
            }
          }],
          onEdit: ['$state', 'common', ($state, common) => {
            return function (id) {
              if (common.isValidId(id)) {
                $state.go('customer', {
                  id
                });
              }
            };
          }]
        }
      })
      .state({
        name: 'customer',
        url: '/customer/{id}',
        component: 'customerDetails',
        resolve: {
          customerId: ['$transition$', $transition$ => {
            console.warn($transition$.params());

            return $transition$.params().id;
          }],
          onAction: ['$state', $state => {
            return function () {
              $state.go('customers');
            }
          }]
        },
        params: {
          id: {
            type: 'int',
            value: 0,
            dynamic: true
          }
        }
      });
  }
})();