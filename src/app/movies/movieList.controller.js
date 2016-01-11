(function() {
  'use strict';

  angular
    .module('angularMaterialDemoScss')
    .controller('MovieListController', MovieListController);

  /** @ngInject */
  function MovieListController($scope, $state, $window, Movie) {
    console.log(Movie);
    $scope.movies = Movie.query(); //fetch all movies. Issues a GET to /api/movies
    $scope.addNew = function() { //create a new movie. Issues a POST to /api/movies
      $state.go('main.newMovie'); // on success go back to home i.e. movies state.
    };
    $scope.deleteMovie = function(movie) { // Delete a movie. Issues a DELETE to /api/movies/:id
      /*if (popupService.showPopup('Really delete this?')) {*/
      movie.$delete(function() {
        $scope.movies = Movie.query();
      });
      /* }*/
    }

    $scope.viewMovie = function(movie){
      console.log(movie._id);
      $state.go('main.viewMovie',{id: movie._id});
      /*$state.go("main.Employee",{id: id});*/
    }
  }
})();
