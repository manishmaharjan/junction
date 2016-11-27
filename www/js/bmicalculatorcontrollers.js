angular.module('starter.controllers')
    .controller('BmiCalculatorCtrl', [
        "$scope",
        function ($scope) {
            $scope.resultWeight = 0;
            $scope.numberWt = 0;
            $scope.numberHt = 0;
            $scope.numberHtPoint = 0;
            $scope.resultHeight = 0;
            $scope.resultWeight= 0;
            
            $scope.calculateBMI = function () {
                console.log($scope.resultHeight);
                $scope.resultHeight = $scope.numberHt / 100;
                $scope.bmi = 23.85;
            }

        }]);