'use strict';

angular.module('stars')
    .controller('StarController', ['$scope', 'starService', function($scope, starService) {
        $scope.stars = [];
        var starPromise = starService.getStarPromise();
        starPromise.then(function(data) {
            $scope.stars = data.slice(0,10);
        }, function(error) {
            console.log(error);
        });
    }])
;
