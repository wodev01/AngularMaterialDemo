(function() {
  'use strict';

  angular
    .module('angularMaterialDemoScss')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider,$httpProvider) {
    $httpProvider.interceptors.push('testInterceptor');
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
      })

      .state('main.movies', { // state for showing all movies
        url: 'movies',
        templateUrl: 'app/movies/movies.html',
        controller: 'MovieListController'
      })

      .state('main.viewMovie', { //state for showing single movie
        url: 'movies/:id/view',
        templateUrl: 'app/movies/movie-view.html',
        controller: 'MovieViewController'
      })

      .state('main.newMovie', { //state for adding a new movie
        url: 'movies/new',
        templateUrl: 'app/movies/movie-add.html',
        controller: 'MovieCreateController'
      })

      .state('main.editMovie', { //state for updating a movie
        url: 'movies/:id/edit',
        templateUrl: 'app/movies/movie-edit.html',
        controller: 'MovieEditController'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
