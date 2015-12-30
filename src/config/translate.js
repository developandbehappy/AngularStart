vkApp.config(['$translateProvider', function ($translateProvider) {
  $translateProvider.translations('en', {
    'ABOUT_TITLE': 'About us',
    'HOME_TITLE': 'Home'
  });

  $translateProvider.translations('ru', {
    'ABOUT_TITLE': 'О нас',
    'HOME_TITLE': 'Домой'
  });

  $translateProvider.preferredLanguage('en');
  $translateProvider.useStorage('translateStorage');
}]);