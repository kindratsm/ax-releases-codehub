(function () {
  'use strict';

  angular.module('axReleases.core')
    .service('requestService', RequestService);

  RequestService.$inject = ['$http', 'logger', 'apiUrl'];
  function RequestService($http, logger, apiUrl) {
    this.getArray = getArray;
    this.getObject = getObject;

    function validateUrl(url) {
      if (!url) {
        throw new Error('Invalid URL');
      }
    }

    function validateId(id) {
      if (!id || typeof id !== 'number' || id <= 0) {
        throw new Error('Invalid ID');
      }
    }

    function getArray(url) {
      validateUrl(url);

      return $http.get(`${apiUrl}/${url}`)
        .then(response => {
          if (!!response && !!response.data && !!response.data.value && angular.isArray(response.data.value)) {
            return response.data.value;
          }

          return [];
        }).catch(error => {
          logger.error(error);
        });
    }

    function getObject(url, id) {
      validateUrl(url);
      validateId(id);

      return $http.get(`${apiUrl}/${url}/${id}`)
        .then(response => {
          if (!!response && !!response.data && typeof response.data === 'object') {
            const obj = response.data;

            // Remove @odata object properties
            for (let property in obj) {
              if (property.startsWith('@odata')) {
                delete obj[property];
              }
            }

            return obj;
          }

          return null;
        }).catch(error => {
          logger.error(error);
        })
    }
  }
})();