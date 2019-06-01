(function () {
  'use strict';

  angular.module('axReleases.widgets').component('contactInfo', {
    templateUrl: 'widgets/contact-info/contact-info.component.html',
    controller: ContactInfoController,
    bindings: {
      logo: '@',
      text: '@',
      url: '@'
    },
  });

  ContactInfoController.$inject = [];
  function ContactInfoController() {
    var ctrl = this;
  }
})();