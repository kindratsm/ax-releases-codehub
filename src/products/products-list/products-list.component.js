(function () {
  "use strict";

  angular.module("axReleases.products").component("productsList", {
    templateUrl: "products/products-list/products-list.component.html",
    controller: ProductsListController,
    controllerAs: "$ctrl"
  });

  ProductsListController.$inject = ['requestService'];

  function ProductsListController(requestService) {
    const ctrl = this;
    ctrl.$onInit = onInit;

    function onInit() {
      requestService.getArray('Product')
        .then(data => {
          ctrl.productsArray = data;
        });
    }
  }
})();
