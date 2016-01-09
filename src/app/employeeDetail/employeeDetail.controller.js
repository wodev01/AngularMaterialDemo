(function() {
  'use strict';

  angular
    .module('angularMaterialDemoScss')
    .controller('EmployeeDetailController', EmployeeDetailCtrl);

  /** @ngInject */
  function EmployeeDetailCtrl($scope,$state,ContactService, $log,$mdDialog, $mdMedia) {

    var vm  = this;

    vm.message = "This is Employee Detail page";
    vm.contacts = ContactService.list();

    vm.status = '  ';
    vm.customFullscreen = $mdMedia('xs') || $mdMedia('sm');

    vm.toggleSearch = false;
    vm.headers = [
      {
        name:'ID',
        field:'id'
      },{
        name: 'Name',
        field: 'name'
      },{
        name:'Email',
        field: 'email'
      },{
        name: 'Salary',
        field: 'salary'
      },{
        name: 'Phone',
        field: 'phone'
      }
    ];

    vm.edit = function (id) {
      vm.newcontact = angular.copy(ContactService.get(id));
      ContactService.setEmployee(vm.newcontact);

      $state.go("main.Employee",{id: id});
    };

    vm.animationsEnabled = true;

    vm.delete = function (ev,id) {

      var useFullScreen = ($mdMedia('sm') || $mdMedia('xs'))  && vm.customFullscreen;
      $mdDialog.show({
        controller: DeleteCtrl,
        templateUrl: 'app/employeeDetail/deleteDialog.html',
        parent: angular.element(document.body),
        targetEvent: ev,
        clickOutsideToClose:true,
        fullscreen: useFullScreen
      })
        .then(function() {
          ContactService.deletedata(id);
        }, function() {
        });
      $scope.$watch(function() {
        return $mdMedia('xs') || $mdMedia('sm');
      }, function(wantsFullScreen) {
        vm.customFullscreen = (wantsFullScreen === true);
      });

      /*var modalInstance = $uibModal.open({
        animation: vm.animationsEnabled,
        templateUrl: 'views/deleteDialog.html',
        controller: 'DeleteCtrl',
        size: 'sm'
      });

      modalInstance.result.then(function () {
        ContactService.deletedata(id);
      }, function () {
        //$log.info('Modal dismissed at: ' + new Date());
      });*/
    };

    vm.view = function(ev,id){

     $log.info("dsgsg",id);
      $scope.emp = angular.copy(ContactService.get(id));
      if(id>=0) {
        $scope.emp = angular.copy(ContactService.get(id));
        $log.info("yyy");
      }else{
        $scope.emp ={};
        $log.info("hhh");
      }
      $log.info($scope.emp);

      var useFullScreen = ($mdMedia('sm') || $mdMedia('xs'))  && $scope.customFullscreen;
      $mdDialog.show({
        controller: DialogControllerView,
        templateUrl: 'app/employeeDetail/employeeDialog.html',
        parent: angular.element(document.body),
        targetEvent: ev,
        clickOutsideToClose:true,
        fullscreen: useFullScreen,
        animate: 'full-screen-dialog',
        resolve: {
          emp: function () {
            return $scope.emp;
          }
        }
      })
        .then(function(selectedItem) {
          $log.info(selectedItem);
          ContactService.save(selectedItem);
        }, function() {

        });
      $scope.$watch(function() {
        return $mdMedia('xs') || $mdMedia('sm');
      }, function(wantsFullScreen) {
        vm.customFullscreen = (wantsFullScreen === true);
      });
      /*console.log(id);
      vm.emp = angular.copy(ContactService.get(id));
      if(id>=0) {
        vm.emp = angular.copy(ContactService.get(id));
        console.log("yyy");
      }else{
        vm.emp ={};
        console.log("hhh");
      }
      console.log(vm.emp);
      //console.log( vm.emp);
      var modalInstance = $uibModal.open({
        animation: vm.animationsEnabled,
        templateUrl: 'views/employeeDialog.html',
        controller: 'ViewCtrl',
        resolve: {
          emp: function () {
            return vm.emp;
          }
        }
      });

      modalInstance.result.then(function (selectedItem) {
        console.log(selectedItem);
        ContactService.save(selectedItem);
        console.log(vm.contacts);
      }, function () {
        $log.info('Modal dismissed at: ' + new Date());
      });*/
    };
  }
})();
function DialogControllerView($scope, $mdDialog, emp,$log,toastr) {

  $scope.emp = emp;
  $log.info($scope.emp);
  $scope.employeename = angular.copy(emp.name),
  $scope.editable = true;


  $scope.hide = function() {
    $mdDialog.hide();
  };
  $scope.cancel = function() {
    $mdDialog.cancel();
  };

  $scope.ok = function () {

    $mdDialog.hide(emp);
    toastr.success('Employee Created');
    console.log("hjhj",toastr);
  };

  $scope.edit = function (emp) {
    console.log("hjhj");
    $scope.editable = false;
  };

  $scope.answer = function(answer) {
    $mdDialog.hide(answer);
  };
}

function DeleteCtrl($scope, $mdDialog,toastr) {
  $scope.hide = function() {
    toastr.success('Deleted Employee');
    $mdDialog.hide();
  };
  $scope.cancel = function() {
    $mdDialog.cancel();
  };

}
