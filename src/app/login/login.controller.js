(function() {
  'use strict';

  angular
    .module('angularMaterialDemoScss')
    .controller('LoginController', LoginController);

  /** @ngInject */
  function LoginController($state,$timeout,$cookies,$log) {
    var vm = this;
    vm.LoginCheck = LoginCheck;
    vm.authObj = {
      userName : '',
      pass : ''
    };
    vm.errorMsg = '';

    function LoginCheck(authObj) {
      $log.info(authObj);
      vm.dataLoading = true;
      $timeout(function(){
        if((authObj.userName == 'test@test.com' && authObj.pass == '123456') || (authObj.userName == 'wo.dev02@gmail.com' && authObj.pass == '1234567'))
        {

          if(authObj.userName == 'test@test.com') {
            authObj.userName = "Shivani";
          }else if(authObj.userName == 'wo.dev02@gmail.com')
          {
            authObj.userName = "Web Osmatic";
          }

          // Setting a cookie
          var rand = function() {
            return Math.random().toString(36).substr(2); // remove `0.`
          };

          var gettoken = function() {
            return rand() + rand(); // to make it longer
          };

          var token = gettoken();
          $log.info(token);

          $cookies.put('token', token);
          $cookies.put('userName', authObj.userName);
          $cookies.put('password', authObj.pass);

          $state.go('main.Home');
        }
        else{
          vm.errorMsg="Invalid Username Or Password";
        }
        vm.dataLoading = false;
      },2000);
    }
  }
})();
