// "use strict";
angular.module('starter.controllers')
    .controller('ChartCtrl', [
        "$scope", "$http",
        function ($scope, $http) {
            $scope.myDataSource = {
                chart: {
                    caption: "Harry's SuperMart",
                    subCaption: "Top 5 stores in last month by revenue",
                    numberPrefix: "$",
                    theme: "ocean"
                },
                data: [{
                    label: "Bakersfield Central",
                    value: "880000"
                },
                    {
                        label: "Garden Groove harbour",
                        value: "730000"
                    },
                    {
                        label: "Los Angeles Topanga",
                        value: "590000"
                    },
                    {
                        label: "Compton-Rancho Dom",
                        value: "520000"
                    },
                    {
                        label: "Daly City Serramonte",
                        value: "330000"
                    }]
            };
            $http.get('json/glucose.json').success(function (data) {
                $scope.data = data;

            });

        }]);

