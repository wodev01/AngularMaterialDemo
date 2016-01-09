(function() {
  'use strict';

  angular
    .module('angularMaterialDemoScss')
    .directive('changeColor', changeColor);


  /** @ngInject */
  function changeColor()
  {

      var directive = {};
      directive.restrict = 'E';
      directive.template = "<input type='color' name='favcolor' ng-model='changecolor'>";

      directive.scope = {
        changecolor: "=change"
      }
      return directive;
    }
    })();
