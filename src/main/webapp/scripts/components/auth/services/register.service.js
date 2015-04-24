'use strict';

angular.module('vripApp')
    .factory('Register', function ($resource) {
        return $resource('api/register', {}, {
        });
    });


