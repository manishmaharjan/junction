angular.module('starter.controllers', [])

  //.controller('DashCtrl', function ($scope) { })

   .controller('DashCtrl', function ContentController($scope, $ionicSideMenuDelegate) {
      $scope.toggleLeft = function() {
        $ionicSideMenuDelegate.toggleLeft();
      };
})

 
