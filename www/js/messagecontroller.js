// "use strict";
angular.module('starter.controllers')
    .controller('MessageCtrl', [
        "$scope",
        function ($scope) {
          $scope.startSpeechRecognition = function(){
            console.log("ciao");
          };
        }]);