(function() {
  'use strict';

  angular
    .module('angularMaterialDemoScss')
    .controller('DirectiveController', DirectiveCtrl);

  /** @ngInject */
  function DirectiveCtrl() {

     var vm  = this;
    vm.temp  = '#000000';

    vm.temp1  = '#ffffff';
  }
})();
