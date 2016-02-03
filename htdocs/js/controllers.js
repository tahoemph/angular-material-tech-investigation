'use strict';

angular.module('stars')
    .controller('StarController', ['$scope', 'starService', '$mdToast',
            function($scope, starService, $mdToast) {
        $scope.stars = [];
        var starPromise = starService.getStarPromise();
        starPromise.then(function(data) {
            $scope.stars = data.slice(0, 10);
        }, function(error) {
            console.log(error);
        });
        $scope.openToast = function(index) {
            var string = '';
            var star = $scope.stars[index];
            for (var key in star) {
                if (key[0] != '$' && star.hasOwnProperty(key)) {
                    string += "\n" + key + ": " + star[key];
                }
            }
            $mdToast.show($mdToast.simple().textContent(string));
        };
    }])
;
