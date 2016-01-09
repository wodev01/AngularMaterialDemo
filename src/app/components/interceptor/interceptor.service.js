(function() {
  'use strict';

  angular
      .module('angularMaterialDemoScss')
      .factory('testInterceptor', testInterceptor);

  /** @ngInject */
  function testInterceptor($q,$location,$cookies,$rootScope,$injector) {
    return {
      request: function (req) {
        // console.log('request started...',config);
        var token = $cookies.get('token');
        var deferred = $q.defer();

        if(token) {
          console.log("token",req);
          $rootScope.isLoggedIn = true;
          if(req.url == 'app/login/login.html')
          {
            console.log("token1",token);
            $location.url("/Home");
          }
          else{
            console.log("token2",token);
          }
          deferred.resolve(req);
        } else {

          if(req.url == 'app/login/login.html')
          {
            console.log("state1",req.url);
            deferred.resolve(req);
          }
          else{
            console.log("state2",req.url);
            $injector.get('$state').transitionTo('/');
            deferred.reject(req);
          }
          $rootScope.isLoggedIn = false;
          console.log(req);
        }
        return deferred.promise;
      },

      requestError: function (rejection) {
        console.log("rejection : :",rejection);
        // Contains the data about the error on the request and return the promise rejection.
        return $q.reject(rejection);
      },

      response: function (result) {
        //console.log('request completed',result);
        return result;
      },

      responseError: function (response) {
        console.log('response error started...');
        $location.url("/");
        //Check different response status and do the necessary actions 400, 401, 403,401, or 500 eror
        if (response.status === 401) {
          $location.path('/')
          $rootScope.$broadcast('error')
        }

        if (response.status === 500) {
          $rootScope.ErrorMsg = "An Unexpected error occured";
          $location.path('/')
        }
        return $q.reject(response);
      }
    }
  }

})();
