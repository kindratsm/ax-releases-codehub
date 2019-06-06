(function () {
  "use strict";

  angular.module("axReleases").component("app", {
    templateUrl: "app.component.html",
    controller: AppController,
    controllerAs: "$ctrl"
  });

  AppController.$inject = ['logger'];

  function AppController(logger) {
    const ctrl = this;
    ctrl.$onInit = onInit;

    ctrl.title = "Axia Releases Application";

    ctrl.obj = {
      name: 'John',
      age: 24
    }
    ctrl.value = 55;
    ctrl.array = [
      {
        name: 'John',
        age: 25
      },
      {
        name: 'Stelios',
        age: 26
      },
      {
        name: 'George',
        age: 24
      }
    ];

    ctrl.onCreate = onCreate;
    ctrl.onUpdate = onUpdate;
    ctrl.onCancel = onCancel;

    function onInit() {
      logger.info('App component controller initialized');
    }

    function onCreate(event) {
      logger.warn('Create');
      console.warn(event);
    }

    function onUpdate(event) {
      logger.warn('Update');
      console.warn(event);
    }

    function onCancel(event) {
      logger.warn('Cancel');
      console.warn(event);
    }
  }
})();
