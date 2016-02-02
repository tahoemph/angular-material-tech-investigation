'use strict'

angular.module('stars')
    .service('starService', ['$resource', function($resource) {
        this.starPromise = $resource("http://star-api.herokuapp.com/api/v1/stars").query();
        this.getStarPromise = function() {
            return this.starPromise.$promise;
        };
    }])
;
