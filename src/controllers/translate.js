vkApp.controller('TeamCtrl', function TeamController($scope, TeamRes, $dialog, $stateParams, $translate, $translatePartialLoader) {
  $scope.teams = TeamRes.query();
  $translatePartialLoader.addPart('team');
  $translate.refresh();
  $scope.club_id = parseInt($stateParams.club_id, 10);
});