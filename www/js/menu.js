angular.module('starter.controllers')
    .controller('MenuCtrl', function($scope, $ionicModal) {})

 .controller('MenudetailsCtrl', function($scope, $$stateParams, list) {
    $scope.list = list.get($stateParams.listId);
 })
