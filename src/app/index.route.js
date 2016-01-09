(function() {
  'use strict';

  angular
    .module('angularMaterialDemoScss')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider

      .state('/', {
        url: '/',
        templateUrl: 'app/login/login.html',
        controller: 'LoginController',
        controllerAs: 'login'
      })

      .state('main', {
        url: "/",
        abstract: true,
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })

      .state('main.Home', {
        url: 'Home',
        templateUrl: 'app/home/home.html',
        controller: 'HomeController',
        controllerAs: 'home'
      })

      .state('main.test', {
        url: 'test',
        templateUrl: 'app/test/test.html',
        controller: 'TestController',
        controllerAs: 'test'
      })

      .state('main.Employee', {
        url: 'Employee/:id',
        /*url: '/Employee',*/
        templateUrl: 'app/employee/employee.html',
        controller: 'EmployeeController',
        controllerAs: 'emp'
      })

      .state('main.EmployeeDetail', {
        url: 'EmployeeDetail',
        templateUrl: 'app/employeeDetail/employeeDetail.html',
        controller: 'EmployeeDetailController',
        controllerAs: 'empDetail'
      })

      .state('main.Directive', {
        url: 'Directive',
        templateUrl: 'app/directive/directive.html',
        controller: 'DirectiveController',
        controllerAs: 'directive'
      })

      .state('main.Promise', {
        url: 'Promise',
        templateUrl: 'app/promises/promises.html',
        controller: 'PromiseController',
        controllerAs: 'promise'
      })

      .state('main.AboutUs', {
        url: 'AboutUs',
        templateUrl: 'app/aboutUs/aboutUs.html',
        controller: 'AboutUsController',
        controllerAs: 'abtus'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
