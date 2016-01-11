(function() {
  'use strict';

  angular
    .module('angularMaterialDemoScss')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($location) {
    var vm  = this;

    vm.getClass = function (path) {
      if ($location.path().substr(0, path.length) === path) {
        return 'active';
      } else {
        return '';
      }
    }

    vm.sideNavItem = [];
    vm.sideNavItem = [
      {
        name:'Home',
        icon:'home',
        uisref : 'main.Home',
        selected : 'Home'
      },
      {
        name:'Employees',
        icon:'group',
        uisref : 'main.EmployeeDetail',
        selected : 'Employees'
      },
      {
        name:'Directive',
        icon:'dashboard',
        uisref : 'main.Directive'
      },
      {
        name:'Movie',
        icon:'home',
        uisref : 'main.movies'
      },
      {
        name:'Promise',
        icon:'home',
        uisref : 'main.Promise'
      },
      {
        name:'About Us',
        icon:'home',
        uisref : 'main.AboutUs'
      }
    ];
  }
})();
