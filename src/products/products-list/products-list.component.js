(function () {
  "use strict";

  angular.module("axReleases.products").component("productsList", {
    templateUrl: "products/products-list/products-list.component.html",
    controller: ProductsListController,
    controllerAs: "$ctrl"
  });

  ProductsListController.$inject = [];

  function ProductsListController() {
    const ctrl = this;
  }
})();
