var buildLink = function (method, params) {
  var apiLink = 'https://api.vk.com/method/';

  var tokenResult = "";
  var paramsResult = "";
  if (params) {
    for (var key in params) {
      if (params.hasOwnProperty(key)) {
        paramsResult += key + '=' + params[key] + '&';
      }
    }
    return apiLink + method + '?' + paramsResult + 'access_token=' + tokenResult;
  } else {
    return apiLink + method + '?access_token=' + tokenResult;
  }
};
vkApp.controller('AboutCtrl', ['$scope', '$http', function ($scope, $http) {
  var list = [];
  var apiLink = buildLink('wall.get', {
    owner_id: 80651295,
    count: 100
  });
  console.log('apiLink', apiLink);
  $http.get(apiLink).success(function (response) {
    console.log('response', response);
    list = response.response;
    $scope.list = list.splice(1).map(function (item) {
      var wall = 'wall' + item.from_id + '_' + item.id;
      item.postLink = 'https://vk.com/id' + item.from_id + '?w=' + wall;
      return item;
    });
  }).error(function (err) {
    console.log('err', err);
  });
}]);