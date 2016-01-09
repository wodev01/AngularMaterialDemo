(function() {
  'use strict';

  angular
    .module('angularMaterialDemoScss')
    .controller('MovieCreateController', MovieCreateController);

  /** @ngInject */
  function MovieCreateController($scope, $state, $stateParams, Movie) {
    $scope.movie = new Movie();  //create new movie instance. Properties will be set via ng-model on UI
    console.log($scope.movie);



    $scope.addMovie = function() { //create a new movie. Issues a POST to /api/movies
      $scope.movie.$save(function() {
        $state.go('main.movies'); // on success go back to home i.e. movies state.
      });
    };

  }
})();
