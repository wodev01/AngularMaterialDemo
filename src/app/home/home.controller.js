(function() {
  'use strict';

  angular
    .module('angularMaterialDemoScss')
    .controller('HomeController', HomeController);

  /** @ngInject */
  function HomeController(ContactService,$cookies, $http,$log,uiGridConstants,$scope) {

    //var vm = this;

    $scope.contacts = ContactService.list();
    $log.info($scope.contacts);

    var uname = $cookies.get('userName');
    $scope.message = "welcome " + uname;

    $scope.gridOptions = {
      enableRowSelection: true,
      enableRowHeaderSelection: false ,
      enableColumnMenus : false,
      paginationPageSizes: [10,25, 50, 75],
      paginationPageSize: 10,
      rowHeight: 30,
    };

    $scope.mySelections = [];

    $scope.gridOptions.columnDefs = [
      { name: 'id' },
      { name: 'name'},
      { name: 'email'},
      /*{ name: 'age', displayName: 'Age (not focusable)', allowCellFocus : false },*/
      { name: 'address.city', displayName: 'Address'},
      { name: 'edit', displayName: 'Action', cellTemplate: '<div style="text-align: center"><a href="javscript:void(0);"  id="editBtn" type="button" ng-click="grid.appScope.edit(row)" ><i class="material-icons">remove_red_eye</i></a> | ' +
      '<a href="javscript:void(0);" id="deletetBtn" type="button"  ng-click="grid.appScope.delete(row)" ><i class="material-icons" style="color: red">delete</i></a> </div>'}
    ];

    $scope.gridOptions.multiSelect = false;
    $scope.gridOptions.modifierKeysToMultiSelect = false;
    $scope.gridOptions.noUnselect = true;
    $scope.edit = function(row) {
      $log.info(row);

      /*var modalInstance = $uibModal.open({
        animation: vm.animationsEnabled,
        templateUrl: 'views/employeeDialog.html',
        controller: 'ViewCtrl',
        resolve: {
          emp: function () {
            return  row.entity;
          }
        }
      });

      modalInstance.result.then(function (selectedItem) {
        $log.info(selectedItem);
        var data = vm.gridOptions.data ;
        for (i in data) {
          if (data[i].id == selectedItem.id) {
            data[i] = selectedItem;
          }
        }
        $log.info(data);
      }, function () {
        $log.info('Modal dismissed at: ' + new Date());
      });*/
    };

    $scope.delete = function(row) {
      $log.info(row);
      /*var modalInstance = $uibModal.open({
        animation: vm.animationsEnabled,
        templateUrl: 'views/deleteDialog.html',
        controller: 'DeleteCtrl',
        size: 'sm'
      });

      modalInstance.result.then(function () {
        var data = vm.gridOptions.data ;
        for (i in data) {
          if (data[i].id == row.entity.id) {
            data.splice(i, 1);
          }
        }
      }, function () {
        //$log.info('Modal dismissed at: ' + new Date());
      });*/
    };

    $scope.gridOptions.onRegisterApi = function (gridApi) {
      $scope.gridApi = gridApi;

      $scope.gridApi.pagination.on.paginationChanged($scope, function (pageNumber, pageSize)
      {
        pageNumberOrPageSizeChanged(pageNumber, pageSize);
      });
    }

    $scope.pgno = 10;
    function pageNumberOrPageSizeChanged(pageNumber, pageSize)
    {
      console.log("Received: pageNumber=" + pageNumber + ", pageSize= " + pageSize);
      $scope.pgno = pageSize;
    }

    $scope.getTableHeight = function() {
      var rowHeight = 30; // your row height
      var headerHeight = 30; // your header height
      return {
        height: (($scope.pgno+3) * rowHeight + headerHeight) + "px"
      };
    };

    /*$scope.gridOptions.onRegisterApi = function( gridApi ) {
      $scope.gridApi = gridApi;
      gridApi.paginationPageSizeselection.on.rowSelectionChanged($scope,function(row){
        var msg = 'row selected ' + row.isSelected;
        $scope.mySelections = gridApi.selection.getSelectedRows();
        $log.info( row.entity.id);
        //$state.go("Employee",{id: row.entity.id});
      });
    };*/

    $scope.toggleRowSelection = function() {
      $scope.gridApi.selection.clearSelectedRows();
      $scope.gridOptions.enableRowSelection = !$scope.gridOptions.enableRowSelection;
      $scope.gridApi.core.notifyDataChange( uiGridConstants.dataChange.OPTIONS);
    };

    $http.get('https://cdn.rawgit.com/angular-ui/ui-grid.info/gh-pages/data/500_complex.json')
      .success(function(data) {
        $scope.gridOptions.data = data;
        // $interval whilst we wait for the grid to digest the data we just gave it
        //$interval( function() {vm.gridApi.selection.selectRow(vm.gridOptions.data[0]);}, 0, 1);
      });

  }
})();
