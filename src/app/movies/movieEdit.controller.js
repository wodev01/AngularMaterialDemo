(function() {
  'use strict';

  angular
    .module('angularMaterialDemoScss')
    .controller('MovieEditController', MovieEditController);

  /** @ngInject */
  function MovieEditController($scope, $state, $stateParams, Movie) {
    $scope.updateMovie = function() { //Update the edited movie. Issues a PUT to /api/movies/:id
      $scope.movie.$update(function() {
        $state.go('main.movies'); // on success go back to home i.e. movies state.
      });
    };

    $scope.loadMovie = function() { //Issues a GET request to /api/movies/:id to get a movie to update
      $scope.movie = Movie.get({ id: $stateParams.id });
    };

    $scope.loadMovie(); // Load a movie which can be edited on UI
  }
})();
