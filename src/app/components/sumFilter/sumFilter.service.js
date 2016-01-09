(function() {
  'use strict';

  angular
      .module('angularMaterialDemoScss')
      .filter('sumProduct', sumProduct);

  /** @ngInject */
  function sumProduct() {
    return function (data, key) {
      /* console.log(key);/!*salary*!/
       console.log(data);*/
      if (angular.isUndefined(data) && angular.isUndefined(key))
        return 0;
      var sum = 0;

      angular.forEach(data,function(v,k){
        sum = sum + parseInt(v[key]);
      });
      return sum;
    }
  }

})();
