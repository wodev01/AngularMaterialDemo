(function() {
  'use strict';

  angular
    .module('angularMaterialDemoScss')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
