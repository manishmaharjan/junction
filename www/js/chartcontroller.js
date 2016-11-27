// "use strict";
angular.module('starter.controllers')
    .controller('ChartCtrl', [
        "$scope", "$http",
        function ($scope, $http) {
            $http.get('json/glucose.json').success(function (data) {
                $scope.data = data;
                $scope.dataSource = {
                    "chart": {
                        "caption": "Sales of Liquor",
                        "subCaption": "Last week",
                        "xAxisName": "Day",
                        "yAxisName": "glucose",
                        "numberPrefix": "$",
                        "paletteColors": "#0075c2",
                        "bgColor": "#ffffff",
                        "showBorder": "0",
                        "showCanvasBorder": "0",
                        "plotBorderAlpha": "10",
                        "usePlotGradientColor": "0",
                        "plotFillAlpha": "50",
                        "showXAxisLine": "1",
                        "axisLineAlpha": "25",
                        "divLineAlpha": "10",
                        "showValues": "1",
                        "showAlternateHGridColor": "0",
                        "captionFontSize": "14",
                        "subcaptionFontSize": "14",
                        "subcaptionFontBold": "0",
                        "toolTipColor": "#ffffff",
                        "toolTipBorderThickness": "0",
                        "toolTipBgColor": "#000000",
                        "toolTipBgAlpha": "80",
                        "toolTipBorderRadius": "2",
                        "toolTipPadding": "5"
                    },
                    "data": [
                        {
                            "label": "Mon",
                            "value": "4123"
                        },
                        {
                            "label": "Tue",
                            "value": "4633"
                        },
                        {
                            "label": "Wed",
                            "value": "5507"
                        },
                        {
                            "label": "Thu",
                            "value": "4910"
                        },
                        {
                            "label": "Fri",
                            "value": "5529"
                        },
                        {
                            "label": "Sat",
                            "value": "5803"
                        },
                        {
                            "label": "Sun",
                            "value": "6202"
                        }
                    ]
                };
                
            });

        }]);

