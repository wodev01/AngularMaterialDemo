(function() {
  'use strict';

  angular
    .module('angularMaterialDemoScss')
    .config(config);

  /** @ngInject */
  function config($logProvider, toastrConfig,$mdThemingProvider) {

    /*var customBlueMap = 		$mdThemingProvider.extendPalette('light-blue', {
      'contrastDefaultColor': 'light',
      'contrastDarkColors': ['50'],
      '50': 'ffffff'
    });
    $mdThemingProvider.definePalette('customBlue', customBlueMap);
    $mdThemingProvider.theme('default')
      .primaryPalette('customBlue', {
        'default': '500',
        'hue-1': '50'
      })
      .accentPalette('pink');
    $mdThemingProvider.theme('input', 'default')
      .primaryPalette('grey')*/

    $mdThemingProvider.theme('default')
      .primaryPalette('blue')

    // Enable log
    $logProvider.debugEnabled(true);

    // Set options third-party lib
    toastrConfig.allowHtml = true;
    toastrConfig.timeOut = 3000;
    toastrConfig.positionClass = 'toast-top-right';
    toastrConfig.preventDuplicates = true;
    toastrConfig.progressBar = true;
  }

})();
