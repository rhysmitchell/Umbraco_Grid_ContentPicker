angular.module("umbraco").controller("GridContentPicker.Controller",
    function ($scope, $rootScope, $routeParams, $timeout, dialogService, contentResource) {
        $scope.setContentId = function () {
                dialogService.contentPicker({
                    multiPicker: true, // Specify whether to allow multiple..
                    startNodeId: $routeParams.id, // Specify start node
                    callback: function (data) {
                        $scope.control.value = data;
                        $scope.setPreview();
                    }
                });
        };

        $scope.setPreview = function () {

            if ($scope.control.value.length > 0) {
                $scope.control.nodes = $scope.control.value;
            }
        };

        $timeout(function () {
            if ($scope.control.$initializing) {
                $scope.setContentId();
            } else {
                $scope.setPreview();
            }
        }, 200);
    });