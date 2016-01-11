(function() {
  'use strict';

  angular
    .module('angularMaterialDemoScss')
    .controller('MovieViewController', MovieViewController);

  /** @ngInject */
  function MovieViewController($scope, $stateParams, Movie,$state) {
    $scope.movie = Movie.get({ id: $stateParams.id }); //Get a single movie.Issues a GET to /api/movies/:id
    console.log("jkhkju");


    $scope.editMovie =function(movie) {
      //Get a single movie.Issues a GET to /api/movies/:id

      $state.go('main.editMovie',{id:movie._id});
    }
  }
})();
