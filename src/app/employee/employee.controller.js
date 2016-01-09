(function() {
  'use strict';

  angular
    .module('angularMaterialDemoScss')
    .controller('EmployeeController', EmployeeCtrl);

  /** @ngInject */
  function EmployeeCtrl($state,ContactService,$log) {

    var vm  = this;
    vm.message = "Employee";
    vm.newcontact={};
    vm.buttonText = 'Save';

    if($state.params.id)
    {
      vm.newcontact = angular.copy(ContactService.get($state.params.id));
      $log.info(vm.newcontact);
      vm.buttonText = 'Update';
    }

    vm.saveContact = function () {
      ContactService.save(vm.newcontact);
      $state.go("main.EmployeeDetail");
    }
  }
})();
