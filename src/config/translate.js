vkApp.config(['$translateProvider', function ($translateProvider) {
  $translateProvider.translations('en', {
    'TITLE': 'Hello',
    'FOO': 'This is a paragraph'
  });

  $translateProvider.translations('de', {
    'TITLE': 'Hallo',
    'FOO': 'Dies ist ein Absatz'
  });

  $translateProvider.translations('ru', {
    'TITLE': 'Привет',
    'FOO': 'Это параграф'
  });

  $translateProvider.preferredLanguage('ru');
}]);