"use strict";
angular.module('starter.controllers')
    .controller('BmiCalculatorCtrl', [
        "$scope",
        function ($scope) {
            $scope.resultWeight = 0;
            $scope.numberWt = "";
            $scope.numberHt = "";
            $scope.numberHtPoint = "";
            $scope.resultHeight = "";
            $scope.resultWeight = "";
            $scope.txtWtChange = function () {
                console.log("heith change");
                $scope.resultWeight = $scope.numberWt;
            } //weight change function end

            $scope.txtHtChange = function () {
                $scope.resultHeight = $scope.numberHt / 100;
            } //height change function end

            $scope.calculateBMI = function () {
                console.log($scope.resultHeight);
                $scope.bmi = ($scope.resultWeight) / (($scope.resultHeight) * ($scope.resultHeight));
            }

        }]);