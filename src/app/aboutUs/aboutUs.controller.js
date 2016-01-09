(function() {
  'use strict';

  angular
    .module('angularMaterialDemoScss')
    .controller('AboutUsController', AboutUsCtrl);

  /** @ngInject */
  function AboutUsCtrl($scope, $mdDialog, $mdMedia) {

    $scope.next = function() {
      $scope.data.selectedIndex = Math.min($scope.data.selectedIndex + 1, 2) ;
    }
    $scope.previous = function() {
      $scope.data.selectedIndex = Math.max($scope.data.selectedIndex - 1, 0);
    }

  }
})();


