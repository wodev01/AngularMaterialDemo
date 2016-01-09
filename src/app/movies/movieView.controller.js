(function() {
  'use strict';

  angular
    .module('angularMaterialDemoScss')
    .controller('MovieViewController', MovieViewController);

  /** @ngInject */
  function MovieViewController($scope, $stateParams, Movie) {
    $scope.movie = Movie.get({ id: $stateParams.id }); //Get a single movie.Issues a GET to /api/movies/:id
  }
})();
