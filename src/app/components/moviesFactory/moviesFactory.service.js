(function() {
  'use strict';

  angular
      .module('angularMaterialDemoScss')
      .factory('Movie', Movie);

  /** @ngInject */
  function Movie($resource) {
    return $resource('http://movieapp-sitepointdemos.rhcloud.com/api/movies/:id', { id: '@_id' }, {
      update: {
        method: 'PUT'
      }
    });
  }

})();
