(function() {
  'use strict';

  angular
    .module('angularMaterialDemoScss')
    .controller('TestController', TestController);

  /** @ngInject */
  function TestController($mdSidenav) {
    var vm = this;
    vm.toggleSidenav = toggleSidenav;
    //vm.loadPage = loadPage;
    vm.items = [
      {
        link : '',
        title: 'Home',
        icon: 'dashboard',
        state: 'Home'
      },
      {
        link : '',
        title: 'Employee',
        icon: 'group',
        state: 'Employee'
      },
      {
        link : '',
        title: 'Employee Detail',
        icon: 'message',
        state: 'EmployeeDetail'
      },
      {
        link : '',
        title: 'Directive',
        icon: 'dashboard',
        state: 'Directive'
      },
      {
        link : '',
        title: 'Promise',
        icon: 'group',
        state: 'Promise'
      },
      {
        link : '',
        title: 'About Us',
        icon: 'message',
        state: 'AboutUs'
      }
    ];

   function toggleSidenav(menuId) {
      $mdSidenav(menuId).toggle();

    }

   /* function loadPage(item) {

    }*/
  }
})();
