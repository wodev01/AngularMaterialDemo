(function() {
  'use strict';

  angular
    .module('angularMaterialDemoScss')
    .controller('HeaderController', HeaderCtrl);

  /** @ngInject */
  function HeaderCtrl($scope,$mdSidenav,$cookies,$state) {

    $scope.uname = $cookies.get('userName');

    $scope.toggleSidenav= function(menuId) {
      $mdSidenav(menuId).toggle();
    }

    $scope. signout= function() {
      $cookies.remove('token');
      $cookies.remove('userName');
      $cookies.remove('password');
      $state.go('/');
    }
  }
})();
